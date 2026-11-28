// Lamp Bible AI helper: keeps your Gemini key secret and only answers your site.
const SITE = "https://shuu-shu.github.io";

export default {
  async fetch(req, env) {
    const origin = req.headers.get("Origin") || "";
    const cors = {
      "Access-Control-Allow-Origin": SITE,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Vary": "Origin",
    };
    if (req.method === "OPTIONS") return new Response(null, { headers: cors });
    if (origin !== SITE || req.method !== "POST") return new Response("Not allowed", { status: 403, headers: cors });

    const model = new URL(req.url).searchParams.get("model") || "";
    if (!/^[a-z0-9.\-]{3,60}$/.test(model)) return new Response("Bad model", { status: 400, headers: cors });
    const body = await req.text();
    if (body.length > 8000000) return new Response("Too long", { status: 413, headers: cors });

    const r = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:streamGenerateContent?alt=sse`,
      { method: "POST", headers: { "Content-Type": "application/json", "x-goog-api-key": env.GEMINI_KEY }, body }
    );
    return new Response(r.body, {
      status: r.status,
      headers: { ...cors, "Content-Type": r.headers.get("Content-Type") || "text/event-stream" },
    });
  },
};
