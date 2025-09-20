# Pioneer Roadways — static site (with contact form)
This is a clean one-page site for your trucking company.

## Edit the basics
- In `index.html`, change:
  - Company name (“Pioneer Roadways”)
  - Phone number `(555) 123-4567` & `tel:` link
  - Email `dispatch@pioneerroadways.com`
  - USDOT / MC numbers
  - Lanes & equipment text

## Contact form (Formspree)
- Replace `YOUR_FORMSPREE_ID` in the form `action` with your Formspree ID (create a free form at https://formspree.io).
- Submissions will be emailed to you. You can also hook Formspree to Google Sheets or Zapier for a spreadsheet/CRM later.
- If you prefer Netlify Forms, add `netlify` attribute to the form and deploy to Netlify.

## Preview locally
Open `index.html` in your browser (no server needed).

## Optional: serve with Docker (static Nginx)
```bash
docker run --rm -p 8080:80 -v "$PWD:/usr/share/nginx/html:ro" nginx:alpine
# then open http://localhost:8080
```

## Deploy (easy options)
- **GitHub Pages**: push these files to a repo, enable Pages.
- **Netlify / Vercel**: drag-and-drop this folder into the dashboard.
