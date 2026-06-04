# AGENTS.md

Guidance for AI agents working in this repository.

## Project overview

Static personal portfolio site (Start Bootstrap Resume theme) for GitHub Pages. Stack: HTML, CSS, vanilla JavaScript, Bootstrap 5 (CDN). No build step, package manager, or backend.

## Cursor Cloud specific instructions

### Running locally

A static HTTP server is **required**. `js/scripts.js` loads `data/projects.json` via `fetch()`, which does not work reliably when opening `index.html` as a `file://` URL.

From the repository root:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

### Lint / test / build

This repo has no `package.json`, Makefile, or CI workflows. There is nothing to install, lint, test, or build beyond serving the files over HTTP.

### External assets

`index.html` loads Bootstrap, Font Awesome, and Google Fonts from CDNs. Full styling needs outbound HTTPS; offline/local-only serving still works but icons and fonts may be missing.

### Core behavior to verify

After starting the server, confirm the Projects section (`#projects`) lists entries from `data/projects.json` (e.g. `search_devices`, `crypto-visualizer`, `Shogi`). If fetch fails, the page shows: `プロジェクト一覧の読み込みに失敗しました。`

### Production

Deployed via GitHub Pages from `main` (user/org site `T3pp31.github.io`).
