# Jimmy Wang — personal website redirect

The personal website now lives at **https://portfolio.jimmychwang.com/**.

This repository retains a small static redirect for `https://jimmychwang.github.io/`. The former React website has been retired; its source and published assets remain available in Git history.

## Publishing

GitHub Pages serves the root of the `gh-pages` branch. The `master` branch holds the same redirect source. No dependency installation or build step is required.

Publish changes to `index.html`, `404.html`, `.nojekyll`, and `robots.txt` on both branches. Keep the two HTML files identical.

The redirect uses `location.replace` to avoid leaving the old website in browser history, with an HTML refresh and a visible link as fallbacks. GitHub Pages serves static files, so this is a browser redirect rather than an HTTP 301.

## Old links

- `/` → `https://portfolio.jimmychwang.com/`
- `#/projects` or `/projects` → `/work/` on the new website
- `#/academics` or `/academics` → `/#education` on the new website
- `#/achievements` or `/achievements` → `/interests/` on the new website
- `#/useful-links` or `/useful-links` → `/#contact` on the new website
- Other old personal-site paths → the new homepage via `404.html`

Other GitHub Pages project sites are served by their own repositories and are not changed by this migration.
