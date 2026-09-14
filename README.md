# OFi Consortium website

Source for [oficonsortium.org](https://oficonsortium.org) — React + Vite + Tailwind, served as static assets by a Cloudflare Worker.

## Develop

```sh
npm install
npm run dev        # http://localhost:8080
npm run build      # outputs dist/
npm run lint
```

## Deploy

Deployment is automatic via Cloudflare Workers Builds:

- push to `main` → production (`oficonsortium.org`)
- any other branch / pull request → a preview URL, posted on the PR

Manual fallback (needs `npx wrangler login` on the OFI Technologies account):

```sh
npm run deploy
```

`wrangler.toml` holds the worker config (custom domains, SPA fallback); `worker/index.ts` redirects `www.` to the apex domain; `public/_headers` sets caching and security headers.

## Content

- Board members: `src/components/Team.tsx`
- Consortium members: `src/components/Members.tsx`
- Legal pages: `src/pages/Bylaws.tsx`, `PrivacyPolicy.tsx`, `TermsOfService.tsx`
