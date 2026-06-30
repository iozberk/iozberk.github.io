# AIxEd Workforce Summit — Fall 2026

Standalone event landing page for the AIxEd Workforce Summit (Nov 10, 2026) and
Strategy Collaborative (Nov 9, 2026), hosted by Boston University.

Plain static site — no build step. Open `index.html` or serve the folder.

## Structure

```
index.html                     # the whole page (HTML + CSS + JS inline)
assets/
  logos/                       # AIxEd brand mark, sponsor & org logos
  speakers/                    # past speaker headshots (local copies)
  photos/
    events-web/                # web-optimized past-event photos (rotating gallery)
    venue/                     # BU GSU / Metcalf Ballroom photos (rotating)
    events/                    # ORIGINAL full-res photos — gitignored, not deployed
```

## Run locally

```bash
python3 -m http.server 3456
# open http://localhost:3456/index.html
```

## Deploy (Netlify — recommended)

**Option A — drag & drop (fastest):**
1. Go to https://app.netlify.com/drop
2. Drag the whole `AIxEd` folder onto the page
3. Live in seconds at a `*.netlify.app` URL

**Option B — connect a Git repo (auto-deploys on push):**
1. Push this repo to GitHub
2. Netlify → "Add new site" → "Import from Git" → pick the repo
3. Build command: *(none)* · Publish directory: `.`

## Custom domain

To serve at `summit.aixed.org`:
1. Netlify → Site → Domain settings → add `summit.aixed.org`
2. At the DNS provider for `aixed.org`, add the CNAME record Netlify shows
3. Link it from the main Wix site's menu

## External links (configured)

- Register → Luma: https://luma.com/9dv2pace
- Strategy Collaborative invite → Luma: https://luma.com/08e2wl19
- Past events / Advisory Board → aixed.org

## TODO (owner)

- Luma: registration form fields (name, title, "What is your organization?", LinkedIn) + payment (Stripe)
- Luma: Summit = no approval; Strategy Collaborative = approval required
- Google Form: route responses to hello@aixed.org
- About AIxEd: final copy
- Founder: final bio text
