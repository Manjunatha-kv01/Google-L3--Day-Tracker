# Google-L3--Day-Tracker
A simple tracker for Google L3 interview preparation that can run as a static website and load data from a Google Sheet.

## What you need to make it live

### Accounts
- GitHub account: needed to host the website for free with GitHub Pages.
- Google account: needed if you want the tracker to read live data from a Google Sheet or Apps Script endpoint.

### Optional services
- GitHub Pages: free and ideal for this static site.
- Google Sheets: great for editing tracker rows visually from anywhere.

## How to publish it online
1. Push this repository to GitHub.
2. Open the repository on GitHub.
3. Go to Settings → Pages.
4. Under Build and deployment, choose GitHub Actions.
5. Save the settings.
6. The workflow in .github/workflows/deploy.yml will publish the site automatically.

Your site will be available at:
https://<your-github-username>.github.io/Google-L3--Day-Tracker/

## How to connect live Google Sheet data
- Publish a Google Sheet as a CSV, or
- Create a simple Apps Script endpoint that returns JSON.
- Paste the URL into the tracker input box to load the live data.

## Remote use
Once the site is hosted, anyone with the link can open it from any device. Updates to the Google Sheet will appear when the sheet URL is refreshed.
