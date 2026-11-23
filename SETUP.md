# Lamp Bible: putting it online for free

Do this on a computer. It takes about 15 minutes. Replace YOURNAME with your GitHub username everywhere below.

## 1. Put the site on GitHub Pages
1. On github.com, click **+** (top right) > **New repository**.
2. Name it `lamp-bible`, set it to **Public**, and click **Create repository**.
3. On the new repository page, click **uploading an existing file**.
4. Unzip `lamp-bible-site.zip` on your computer. Open the folder, select **everything inside it** (including the `data` folder), and drag it onto the GitHub page. Wait until all files finish uploading, then click **Commit changes**.
5. Go to **Settings > Pages**. Under "Branch", pick **main** and **/ (root)**, then click **Save**.
6. Wait 1–2 minutes. Your site is live at `https://YOURNAME.github.io/lamp-bible/`.

## 2. Let Google sign-in work on your site
1. Firebase console > **Build > Authentication > Settings > Authorized domains**.
2. Click **Add domain**, type `YOURNAME.github.io`, and click **Add**.

## 3. Lock down the database
1. Firebase console > **Build > Firestore Database > Rules** tab.
2. Delete everything there, paste the contents of `firestore.rules`, and click **Publish**.

## 4. (Optional) Turn on the free AI features
Explain, Ask, Set the Scene, Nutshell and Quiz use Google's free Gemini AI.
1. Go to https://aistudio.google.com/apikey, sign in, and click **Create API key**. Copy the key.
2. On GitHub, open `config.js`, click the pencil icon, paste the key between the quotes after `geminiKey:`, and click **Commit changes**.
3. Protect the key so only your site can use it: go to https://console.cloud.google.com/apis/credentials, click your key, set **Application restrictions** to **Websites**, add `https://YOURNAME.github.io/*`, and **Save**.

## Put it on your home screen
- **iPhone (Safari):** open the site, tap **Share > Add to Home Screen**.
- **Android (Chrome):** open the site, tap **⋮ > Add to Home screen**.

## Making changes later
Edit a file on GitHub (pencil icon) and commit. The site updates in a minute or two.
