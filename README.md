# NORYX Technologies

**Website:** [noryxtechnologies.com](https://noryxtechnologies.com)
**Status:** Early stage · Developer preview Q4 2026

---

## About

NORYX is building an AI-native operating system designed from the ground up — not AI bolted onto old interfaces. A new system layer where intelligence lives in the fabric of the OS itself.

## Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Static HTML / CSS / JS |
| Hosting | GitHub Pages |
| Domain | noryxtechnologies.com |
| Waitlist | Google Apps Script → Google Sheets |

## Repository

```
├── index.html              # Company homepage
├── noryxos.html            # NoryxOS product page
├── careers.html            # Careers page
├── styles.css              # Shared stylesheet
├── logo.jpg                # Brand mark
├── hero.png                # NoryxOS hero screenshot
├── google-apps-script.js   # Waitlist backend (Apps Script)
├── favicon.svg             # Browser favicon (SVG)
├── og-image.png            # Social sharing image (1200×630) — add before launch
├── CNAME                   # GitHub Pages custom domain
├── .gitignore
└── README.md
```

## Local development

```bash
npx serve .
```

## Deploying

```bash
git add -A && git commit -m "description" && git push
```

GitHub Pages redeploys automatically within ~60 seconds.

## Before launch

- [ ] Replace `YOUR_APPS_SCRIPT_URL_HERE` in `index.html` with the deployed Apps Script Web App URL
- [ ] Add `og-image.png` (1200×630px, black background, NORYX logo + tagline)
- [ ] Test waitlist form end-to-end
- [ ] Verify HTTPS and custom domain

---

© 2026 NORYX Technologies LLC
