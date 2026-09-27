# Goldkrest Group website

Business website for Goldkrest Group: brickwork, landscaping & garden maintenance, and pressure washing.

Built with **Next.js (App Router)**, **TypeScript** and **Tailwind CSS**. There's no database and no platform-specific
tooling. It's a standard Next.js app that deploys to Vercel with zero configuration.

## Pages

| Route               | Page                                |
| ------------------- | ----------------------------------- |
| `/`                 | Homepage                            |
| `/brickwork`        | Brickwork                           |
| `/garden`           | Landscaping & Garden Maintenance    |
| `/pressure-washing` | Pressure Washing                    |
| `/contact`          | Contact Us (form + contact details) |
| `/api/contact`      | API route that emails form submissions via Resend |

## Local development

Requires Node.js 20.9 or newer.

```bash
npm install
cp .env.example .env.local   # then add your RESEND_API_KEY
npm run dev                  # http://localhost:3000
```

Other scripts: `npm run build`, `npm start`, `npm run lint`.

## Contact form email (Resend)

The contact form posts to `app/api/contact/route.ts`, which sends the enquiry to **info@goldkrest.group**
using [Resend](https://resend.com). The visitor's email is set as *Reply-To*, so you can reply directly.

The only thing you need to set is **`RESEND_API_KEY`**:

1. Create a free account at [resend.com](https://resend.com) and create an API key under **API Keys**.
2. Add it as an environment variable:
   - **Locally:** put `RESEND_API_KEY=re_...` in `.env.local`.
   - **On Vercel:** Project → **Settings → Environment Variables** → add `RESEND_API_KEY`, then redeploy.

> **Important:** until you verify a domain, Resend sends from its shared address `onboarding@resend.dev`,
> which can **only deliver to the email address that owns the Resend account**. So either sign up to Resend
> using **info@goldkrest.group**, or (recommended) verify `goldkrest.group` under **Domains** in Resend and
> set the optional `RESEND_FROM_EMAIL` variable, e.g. `Goldkrest Group <website@goldkrest.group>`.

If `RESEND_API_KEY` is missing, the form shows a friendly error and logs a message on the server.

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel, click **Add New → Project** and import the repo. The Next.js defaults are correct, so there are no build settings to change.
3. Add `RESEND_API_KEY` under **Environment Variables** and deploy.

## Editing content

- **Contact details, navigation, service text and gallery photos:** `lib/site.ts`
- **Homepage copy:** `app/page.tsx`
- **Colours** (gold `#BDB04C`, dark green `#303A1C`): `app/globals.css`
- **Fonts** (DM Serif Display + Plus Jakarta Sans, via `next/font/google`): `app/layout.tsx`

### Adding photos

Real photos live in `public/images/<service>/` (e.g. `public/images/garden/`). To add one:

1. Save it there (JPEG, around 1600px on the long side is plenty).
2. Import it at the top of `lib/site.ts` and add it to that service's `gallery` list with a short `alt` description.

Galleries show photos as uniform square tiles; clicking one opens the full, uncropped photo.

**Before & after:** when you have a genuine pair (both photos of the same job), add it to that service's
`beforeAfter` list in `lib/site.ts` instead of the gallery. Pairs appear in their own labelled "Before & after"
section above the gallery; the section is hidden on pages with no pairs.
Any gallery or hero image still using `placeholder(...)` comes from picsum.photos. Once none remain, you can delete
the `images.remotePatterns` block in `next.config.ts`.
