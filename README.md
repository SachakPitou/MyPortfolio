# Project Log — a simple portfolio site

A single-page, no-build portfolio that lists your GitHub projects as a
scrollable "commit log." Just HTML, CSS, and JS — nothing to compile.

## Files

- `index.html` — page structure and copy (name, about, contact)
- `style.css` — all styling
- `script.js` — **your project list lives here**

## 1. Add your projects

Open `script.js` and edit the `PROJECTS` array at the top. Each object is
one card:

```js
{
  name: "Task Flow",
  hash: "a1b2c3d",              // shown like a short git hash, can be anything
  date: "2026",
  desc: "One or two sentence description.",
  tags: ["React", "IndexedDB"],
  github: "https://github.com/yourusername/task-flow",
  demo: "https://task-flow.vercel.app"   // optional, leave "" to hide
}
```

Add, remove, or reorder entries freely — the page renders whatever is in
the array.

## 2. Fill in your info

In `index.html`, replace:
- `Alex Chen` (page title, brand, hero copy)
- `yourusername` in the GitHub/LinkedIn links
- `you@example.com` in the contact section

## 3. Preview locally (optional)

Any static server works, e.g.:

```bash
npx serve .
```

Or just double-click `index.html` to open it in a browser.

## 4. Deploy on Vercel

**Option A — Vercel dashboard (no terminal needed)**
1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import that repo.
3. Framework preset: choose **Other** (it's a static site, no build step).
4. Click **Deploy**. You'll get a live URL like `your-project.vercel.app`.

**Option B — Vercel CLI**
```bash
npm install -g vercel
cd portfolio
vercel
```
Follow the prompts; Vercel auto-detects it as a static site.

Every time you push changes to GitHub, Vercel redeploys automatically.

## Customizing further

- Colors and fonts are defined as CSS variables at the top of `style.css`
  under `:root` — change `--accent`, `--bg`, etc. to restyle the whole site.
- The vertical line + dot styling for each entry is in the
  `.log__list` / `.entry` rules if you want to adjust the "commit log" look.
