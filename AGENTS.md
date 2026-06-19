# AGENTS.md

## Cursor Cloud specific instructions

This repository is a **static GitHub Pages portfolio site** (HTML/CSS/vanilla JS). There is no `package.json`, Docker stack, build step, or backend.

### Required service

| Service | Purpose |
|---------|---------|
| Static HTTP server on repo root | Serves files and enables `fetch('data/projects.json')` in `js/scripts.js` (same-origin; `file://` is unreliable) |

### Run locally

From `/workspace`:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`. Alternatives: `npx serve .`, VS Code Live Server, etc.

### Lint / test / build

- **Lint:** Not configured in-repo.
- **Test:** Not configured in-repo.
- **Build:** None; assets are committed as-is.

Optional sanity checks:

```bash
python3 -m json.tool data/projects.json > /dev/null
curl -sf http://localhost:8000/ -o /dev/null
curl -sf http://localhost:8000/data/projects.json | python3 -m json.tool > /dev/null
```

### CDN dependencies

Bootstrap, Font Awesome, and Google Fonts load from CDNs in `index.html`. Outbound HTTPS improves styling; the page still loads offline with degraded icons/fonts.

### Hello-world verification

1. Start the HTTP server.
2. Open the site and confirm the **Projects** section lists entries from `data/projects.json` (not the Japanese load-failure message).
3. Click a project link to confirm external URLs resolve (optional).
