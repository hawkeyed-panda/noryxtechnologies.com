# NORYX Technologies

**Website:** [noryxtechnologies.com](https://noryxtechnologies.com)  
**Status:** Early stage · Developer preview Q4 2026

---

## About

NORYX is building an AI-native operating system designed from the ground up — not AI bolted onto old interfaces. A new system layer where intelligence lives in the fabric of the OS itself.

## Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Static HTML/CSS/JS |
| Hosting | GitHub Pages |
| Domain | noryxtechnologies.com |
| Waitlist backend | Google Apps Script |
| Database | Google Sheets |

## Repository structure

```
/
├── index.html        # Main website (single file, self-contained)
├── og-image.png      # Social sharing image (1200×630px) — add before launch
├── CNAME             # Custom domain for GitHub Pages (auto-generated)
├── .gitignore
└── README.md
```

## Local development

No build step needed. Just open `index.html` in a browser:

```bash
# macOS
open index.html

# or use a local server (recommended for testing fetch())
npx serve .
```

## Deploying changes

```bash
git add index.html
git commit -m "your change description"
git push
```

GitHub Pages redeploys automatically within ~60 seconds.

## Waitlist backend

The waitlist form posts to a Google Apps Script Web App.
The script code lives in `Code.gs` (not committed to this repo — stored in Google Apps Script editor).

To update the backend:
1. Go to [script.google.com](https://script.google.com)
2. Open **NORYX Waitlist API**
3. Edit and deploy a new version

---

© 2026 NORYX Technologies LLC
