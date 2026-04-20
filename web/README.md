# AI Product Management Portfolio — Web UI

A small Vite + React + TypeScript + Tailwind site that renders the portfolio at
[`stephengardnerd.github.io/AI_Product_Management`](https://stephengardnerd.github.io/AI_Product_Management).

## Local development

```bash
cd web
npm install
npm run dev
```

## Build

```bash
npm run build      # output → dist/
npm run preview    # serve built dist
```

## Deploy

GitHub Actions handles deploy on push to `main` via `.github/workflows/deploy-pages.yml`.
