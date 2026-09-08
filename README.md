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
- `js/characters.js` — the 12 result characters (KR/EN), hand-maintained
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

## Result characters

The result now leads with one of twelve named characters, in the style of a
personality result. Each character is taken from Terry Kim's 12-type feedback
document and is keyed to one of the twelve existing dimension keys
(`concept`, `market`, `beverage`, `service`, `operations`, `inventory`,
`finance`, `team`, `marketing`, `space`, `data`, `growth`).

Selection is unchanged: `diagnostic.js` still picks `primaryDimension`, and
`app.js` simply looks up the matching character. Scoring, thresholds, ties,
red flags, routing and Level logic were not touched.

Each character carries a `name`, the existing stable `code`, a `tagline`, two
`essence` paragraphs, three `traits`, a `principle` and five `questions`. The
stored result codes (`VISION ARCHITECT` and so on) are unchanged, so existing
D1 records and reports stay valid.

## Maintenance

The content and scoring modules are generated from the production TypeScript
sources by `scripts/export-standalone.mjs`. Re-run that script after changing
questions, translations or scoring rules. Layout markup and interaction logic
remain hand-maintained in this folder.

`js/characters.js` is **hand-maintained and is not generated**. It was kept
separate from `quiz-data.js` and `i18n.js` for exactly that reason: those two
are overwritten on the next export. When this character layer is promoted into
the full-stack app, mirror it as `lib/diagnostic/characters.ts` and add it to
the export script.
