# NORYX — Full Deployment Guide
## From zero to live at noryxtechnologies.com

**Time required:** ~30 minutes  
**Cost:** $0/month  
**Prerequisites:** GitHub account, Google account, domain at noryxtechnologies.com

---

# PHASE 1 — Backend (Google Apps Script)
### Sets up the waitlist API that writes signups to Google Sheets

---

## Step 1 — Create the Google Sheet

1. Go to **https://sheets.google.com**
2. Click **+ Blank** to create a new spreadsheet
3. Click "Untitled spreadsheet" at the top and rename it to:
   ```
   NORYX Waitlist
   ```
4. Leave the tab open — you'll come back to it

---

## Step 2 — Open Apps Script

1. In the spreadsheet, click the top menu: **Extensions → Apps Script**
2. A new tab opens with a code editor
3. **Delete all** the default code (select all → delete)
4. Open the file **Code.gs** from this package
5. **Copy everything** in that file
6. **Paste it** into the Apps Script editor
7. Press **Ctrl+S** (or Cmd+S on Mac) to save
8. When asked to name the project, type:
   ```
   NORYX Waitlist API
   ```
   and click **Rename**

---

## Step 3 — Deploy the Apps Script as a Web App

1. Click the blue **Deploy** button (top right)
2. Select **New deployment**
3. Click the **gear icon ⚙** next to "Select type"
4. Choose **Web app**
5. Fill in the form:
   - **Description:** `v1`
   - **Execute as:** `Me (your@gmail.com)`
   - **Who has access:** `Anyone`
6. Click **Deploy**
7. A permissions screen appears — click **Authorize access**
8. Choose your Google account
9. You'll see "Google hasn't verified this app" — click **Advanced**
10. Click **Go to NORYX Waitlist API (unsafe)** → click **Allow**
11. You'll now see a screen with your **Web App URL**
12. **Copy this URL** — it looks like:
    ```
    https://script.google.com/macros/s/AKfycbxXXXXXXXXXXXXXXXXXXXXXXXXXX/exec
    ```
    ⚠️ Save this somewhere safe — you need it in Step 5

---

## Step 4 — Verify the backend is working

Paste your Web App URL into a browser address bar and press Enter.

You should see:
```json
{"result":"ok","message":"NORYX Waitlist API is running."}
```

✅ If you see that, your backend is live and ready.  
❌ If you see an error, go back to Step 3 and check the "Execute as" and "Who has access" settings.

---

# PHASE 2 — Frontend (Connect the form)

---

## Step 5 — Add your Apps Script URL to index.html

1. Open **index.html** in a text editor
   - **Recommended:** Download VS Code from https://code.visualstudio.com (free)
   - Or use any plain text editor (TextEdit on Mac set to plain text mode)

2. Press **Ctrl+F** (or Cmd+F) to open Find
3. Search for:
   ```
   YOUR_APPS_SCRIPT_URL_HERE
   ```
4. Replace it with your URL from Step 3:
   ```javascript
   const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxXXXX.../exec';
   ```
5. Save the file

---

## Step 6 — Test the form locally

1. Double-click **index.html** to open it in your browser
2. Scroll to the waitlist section
3. Fill in: name, email, and role
4. Click **Join waitlist**
5. Check your Google Sheet — a new row should appear within seconds ✅
6. Check your inbox at hello@noryxtechnologies.com — you should get a notification email ✅

---

# PHASE 3 — GitHub Repository

---

## Step 7 — Install Git (if you don't have it)

Check if you already have Git:
```bash
git --version
```

If you see a version number, skip to Step 8.

If not, download from: **https://git-scm.com/download/mac**  
Install it, then restart your Terminal.

---

## Step 8 — Create the GitHub repository

1. Go to **https://github.com/new**
2. Fill in:
   - **Repository name:** `noryxtechnologies.com`
   - **Description:** `NORYX Technologies official website`
   - **Visibility:** ✅ Public (required for free GitHub Pages)
   - **DO NOT** check "Add a README file"
   - **DO NOT** add .gitignore or license here
3. Click **Create repository**
4. Leave this page open — you'll need the repository URL

---

## Step 9 — Push the files to GitHub

Open **Terminal** (Mac: press Cmd+Space, type Terminal, press Enter).

Run these commands one by one, pressing Enter after each:

```bash
# 1. Navigate to your website folder
#    Replace the path with wherever you saved the files
cd ~/Downloads/noryx-repo

# 2. Initialise Git
git init

# 3. Add all files
git add .

# 4. Make the first commit
git commit -m "Initial production deployment"

# 5. Set the branch to main
git branch -M main

# 6. Connect to GitHub
#    Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/noryxtechnologies.com.git

# 7. Push the files
git push -u origin main
```

When prompted, enter your GitHub username and password.  
> **Note:** If GitHub asks for a password and rejects it, you need a Personal Access Token instead. Go to GitHub → Settings → Developer Settings → Personal Access Tokens → Generate new token (classic). Tick "repo" scope. Use that token as your password.

---

## Step 10 — Enable GitHub Pages

1. Go to your repository: `https://github.com/YOUR_USERNAME/noryxtechnologies.com`
2. Click **Settings** (top tab with the gear icon)
3. Scroll down the left sidebar and click **Pages**
4. Under **Source**, select:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**
6. Wait about 2 minutes
7. Refresh the page — you'll see:
   ```
   Your site is live at https://YOUR_USERNAME.github.io/noryxtechnologies.com
   ```
8. Click that link to verify the site loads correctly ✅

---

# PHASE 4 — Custom Domain

---

## Step 11 — Tell GitHub your domain

1. Still in **Settings → Pages**
2. Scroll to **Custom domain**
3. Type: `noryxtechnologies.com`
4. Click **Save**
5. GitHub will add a `CNAME` file to your repo automatically
   (This is normal — don't delete it)

---

## Step 12 — Configure DNS at your registrar

Log into wherever you bought noryxtechnologies.com  
(GoDaddy / Namecheap / Google Domains / Cloudflare / etc.)

Find the **DNS Management** or **DNS Records** section.

### Delete any existing A records for @ (if present)

### Add these 4 A records (GitHub's servers):

| Type | Name/Host | Value | TTL |
|------|-----------|-------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |

### Add this CNAME record (for www):

| Type | Name/Host | Value | TTL |
|------|-----------|-------|-----|
| CNAME | www | YOUR_USERNAME.github.io | 3600 |

> **Note:** Some registrars use `@` for the root domain, others use your domain name. Use whatever your registrar shows for the apex/root domain.

> **DNS propagation takes 10 minutes to 48 hours.** Usually under 1 hour.

---

## Step 13 — Verify DNS is working

You can check propagation at: **https://dnschecker.org**  
Search for `noryxtechnologies.com` — when you see the GitHub IPs appearing globally, you're done.

---

## Step 14 — Enable HTTPS

1. Go back to GitHub: **Settings → Pages**
2. Once DNS is verified, you'll see a green checkmark ✅ next to your domain
3. Check the box: **Enforce HTTPS**
4. Wait ~10 minutes for the SSL certificate to provision

Your site is now live at:  
**https://noryxtechnologies.com** ✅

---

# PHASE 5 — Final Polish

---

## Step 15 — Create and add the OG image

The social sharing image is referenced in the HTML meta tags.  
Without it, link previews on X, LinkedIn, Facebook will be blank.

**Create the image:**
1. Open Figma or Canva
2. Create a new design: **1200 × 630 px**
3. Background: `#000000`
4. Add the NORYX logo (centered or top-left)
5. Add text: "Infrastructure for intelligent systems"
6. Export as **PNG**
7. Name the file exactly: `og-image.png`

**Add to repo:**
```bash
cd ~/Downloads/noryx-repo
# Copy your og-image.png into this folder, then:
git add og-image.png
git commit -m "Add OG social sharing image"
git push
```

---

## Step 16 — Final checks

Go through this checklist before sharing the link publicly:

- [ ] https://noryxtechnologies.com loads correctly
- [ ] HTTPS padlock shows in browser (no "Not Secure" warning)
- [ ] All nav links scroll to the right sections
- [ ] Waitlist form submits successfully (test with your own email)
- [ ] Confirmation email arrives at hello@noryxtechnologies.com
- [ ] New row appears in Google Sheets
- [ ] Mobile layout looks correct (resize browser or use phone)
- [ ] Social links work: LinkedIn, X, Instagram, Facebook
- [ ] OG image shows when you paste the URL into X or LinkedIn

---

# Ongoing — Making Updates

## To update the website

```bash
cd ~/Downloads/noryx-repo

# Edit index.html in VS Code, then:
git add index.html
git commit -m "describe what you changed"
git push
```

GitHub Pages automatically redeploys in ~60 seconds.

## To view waitlist signups

Open your **NORYX Waitlist** Google Sheet anytime.  
Columns: `Timestamp | Email | Name | Role | Source`

## To update the Apps Script backend

1. Go to **https://script.google.com**
2. Open **NORYX Waitlist API**
3. Make your edits
4. Click **Deploy → Manage deployments**
5. Click the ✏️ pencil on your active deployment
6. Set version to **New version**
7. Click **Deploy**

> ⚠️ The Web App URL stays the same — no changes needed in index.html.

---

# Troubleshooting

**Form submits but nothing appears in Google Sheets**  
→ Go to Apps Script → Run the `doGet` function manually → Check "Executions" for errors  
→ Make sure "Who has access" is set to "Anyone" in the deployment settings

**Site shows "There isn't a GitHub Pages site here"**  
→ Wait 2–5 more minutes and refresh  
→ Check Settings → Pages and confirm it says "Your site is live"

**Custom domain shows "Not Secure"**  
→ HTTPS certificate is still provisioning — wait up to 24 hours  
→ Make sure "Enforce HTTPS" is checked in Settings → Pages

**DNS not resolving**  
→ Check https://dnschecker.org for your domain  
→ Confirm all 4 A records are added correctly  
→ Wait up to 48 hours for full propagation

**Git push asks for password and fails**  
→ Use a Personal Access Token instead of your password  
→ GitHub → Settings → Developer Settings → Personal Access Tokens → Generate new token  
→ Select "repo" scope → copy token → use as password when pushing

---

# Quick Reference Card

| What | Where |
|------|-------|
| Edit website | `index.html` in VS Code |
| Push changes | `git add . && git commit -m "msg" && git push` |
| View signups | Google Sheets → NORYX Waitlist |
| Notification emails | hello@noryxtechnologies.com |
| Update backend | script.google.com → NORYX Waitlist API |
| GitHub repo | github.com/YOUR_USERNAME/noryxtechnologies.com |
| Live site | https://noryxtechnologies.com |

---

*NORYX Technologies LLC · © 2026 · hello@noryxtechnologies.com*
