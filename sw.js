// Keeps Bible text cached so chapters open fast and work offline.
const C="lamp-data-v1";
self.addEventListener("install",e=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",e=>{
  const u=new URL(e.request.url);
  if (u.origin===location.origin && u.pathname.includes("/data/")){
    e.respondWith(caches.open(C).then(async c=>{ const hit=await c.match(e.request); if (hit) return hit; const r=await fetch(e.request); if (r.ok) c.put(e.request,r.clone()); return r; }));
  }
});
