# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

Marketing site for the OFi Consortium (Open Finance Consortium), a nonprofit that stewards the classic Open Collective platform. Static single-page React app, served by a Cloudflare Worker.

**Stack**: Vite 5 + React 18 + TypeScript + Tailwind 3 + shadcn/ui + React Router 6 · Node 24 (`.nvmrc`) · path alias `@` → `./src`

## Commands

```bash
npm run dev          # Vite dev server (localhost:8080)
npm run build        # Production build to dist/
npm run lint         # ESLint
npm run typecheck    # tsc (app + node configs)
npm run deploy       # Manual production deploy (normally not needed, see Deployment)
```

CI (`.github/workflows/ci.yml`) runs lint, typecheck and build on every PR. Keep all three green.

## Layout

- `src/pages/` — routes: `Index` (homepage), `Bylaws`, `PrivacyPolicy`, `TermsOfService`, `NotFound`. Routes live in `src/App.tsx`; add new ones above the `*` catch-all.
- `src/components/` — homepage sections (`Hero`, `About`, `Members`, `Team`, `Contact`, `Navbar`, `Footer`); `ui/` is shadcn (leave as generated).
- `public/` — static assets. `images/` for photos we add; `lovable-uploads/` is legacy assets from the original Lovable build (still referenced, don't delete).
- `worker/index.ts` — the Cloudflare Worker: redirects `www.` → apex, otherwise serves `dist/`.

## Content editing

- **Board / directors**: `teamMembers` array in `src/components/Team.tsx`. Each entry has `name`, `role`, `initials`, optional `image` (put files in `public/images/`, lowercase-hyphenated) and optional `linkedIn`. Order = display order; President first.
- **Consortium members**: `members` array in `src/components/Members.tsx` (name, description, logo, website/oc/linkedin links). The hero's member count is derived from this array.
- Legal text lives directly in the page components under `src/pages/`.

## Deployment

Cloudflare Workers Builds is connected to this GitHub repo (account: OFI Technologies):

- push to `main` → production at https://oficonsortium.org
- any other branch / PR → preview URL, posted as a PR comment by the Cloudflare bot

Config is in `wrangler.toml` (custom domains, SPA fallback, preview URLs) and `public/_headers` (caching + security headers). Don't add environments or GitHub deploy workflows; Builds handles it.

## Conventions

- Tailwind utility classes inline; shared tokens in `tailwind.config.ts` (`navy`, `purple`, `ofi` palettes) and `src/index.css`.
- Keep dependencies minimal — the scaffold came with the full shadcn kit, much of which is unused.
- Commit messages: short imperative subject, no trailers.
