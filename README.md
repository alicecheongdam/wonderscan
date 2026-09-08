# Wonder Lab Bar Diagnostic — Standalone Build

This folder is a framework-free HTML/CSS/JavaScript version of the current
Wonder Scan website. It preserves the Korean/English interface, both diagnostic
paths, 30-question flow, 12-area scoring, result report, copy action and the
existing lead-submission request.

## Structure

- `index.html` — semantic screen templates and document metadata only
- `css/styles.css` — presentation and responsive layout only
- `js/app.js` — browser state, events, template population and API calls
- `js/config.js` — environment-specific endpoint configuration
- `js/diagnostic.js` — scoring and recommendation rules
- `js/i18n.js` — Korean/English UI and question localization
- `js/quiz-data.js` — canonical questions, types and consulting levels
- `assets/` — static brand assets

## Run locally

ES modules require an HTTP server. From this folder, run:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Submission API

The default endpoint is `/api/submissions`, matching the live Wonder Lab site.
When this standalone package is hosted on another domain, change
`submissionEndpoint` in `js/config.js` to the absolute API URL and configure
CORS on that server. The request body is:

```json
{
  "submissionId": "uuid",
  "path": "preopen | operating",
  "answers": { "question_id": 0 },
  "lead": { "companyName": "..." },
  "locale": "ko | en"
}
```

## Maintenance

The content and scoring modules are generated from the production TypeScript
sources by `scripts/export-standalone.mjs`. Re-run that script after changing
questions, translations or scoring rules. Layout markup and interaction logic
remain hand-maintained in this folder.
