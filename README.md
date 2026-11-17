# VA Navigator project website

The project website for KSU IT capstone Team 42. The app itself lives at <https://va-navigator.lovable.app/>.

The site is plain HTML, CSS, and a little JavaScript. No build step and nothing to install.

## Update your team profile

1. Open `js/team-data.js`.
2. Find your entry and fill in anything set to `null`: graduation date, internship, dream job, LinkedIn, and GitHub. Fields left as `null` are hidden on the page.
3. To change your photo, add a square JPG to `assets/team/` and update `photo`.
4. Commit and push. GitHub Pages updates the live site within a minute or two.

## Preview locally

Open `index.html` in a browser. To preview it the way GitHub Pages serves it, run this from the repo root:

```sh
python -m http.server 8000
```

Then go to <http://localhost:8000>.

## Publish with GitHub Pages

In the repo on GitHub, go to **Settings → Pages**. Set **Source** to "Deploy from a branch", pick `main` and `/ (root)`, and save. The site will be at `https://<github-username>.github.io/ITCapstone-2026/`.

## Files

| Path | What it is |
|---|---|
| `index.html` | All page content and sections |
| `css/styles.css` | Styles. The colors and fonts match the VA Navigator app |
| `js/team-data.js` | Team profiles (edit this one) |
| `js/team.js` | Builds the team cards from the data |
| `assets/team/` | Headshots |
| `assets/screens/` | App screenshots |
