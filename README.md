# Goldkrest Group website

Business website for Goldkrest Group: brickwork and stone restoration, plus landscaping & garden maintenance.

Built with **Next.js (App Router)**, **TypeScript** and **Tailwind CSS**. There's no database and no platform-specific
tooling. It's a standard Next.js app that deploys to Vercel with zero configuration.

## Pages

| Route               | Page                                |
| ------------------- | ----------------------------------- |
| `/`                 | Homepage                            |
| `/brickwork`        | Brickwork                           |
| `/landscaping`      | Landscaping (`/garden` redirects here) |
| `/garden-maintenance` | Garden Maintenance |
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

When someone submits the contact form, `app/api/contact/route.ts` emails the enquiry to
**info@goldkrest.group** using [Resend](https://resend.com). The visitor's email is set as *Reply-To*, so
pressing **Reply** in the inbox answers the customer directly. No code changes are needed, only the setup below.

### Setup (about 15 minutes, done once)

1. **Check the inbox works.** Send a test email to info@goldkrest.group from a personal address and make sure it
   arrives. The website can only deliver to a mailbox that exists.
2. **Create a Resend account** at [resend.com](https://resend.com) (the free plan is plenty for a contact form).
3. **Verify the domain.** In Resend go to **Domains → Add Domain**, enter `goldkrest.group`, and add the DNS records
   it shows (a few TXT/MX records) wherever the domain's DNS is managed (the registrar, e.g. GoDaddy, Namecheap,
   123 Reg, or Cloudflare). These records sit on the `send.` and `resend._domainkey` sub-names, so they **do not
   affect the existing info@ inbox**. Wait until Resend shows the domain as **Verified** (often minutes, can take
   a few hours).
4. **Create an API key.** In Resend go to **API Keys → Create API Key**, choose **Sending access** for
   `goldkrest.group`, and copy the key (it starts with `re_` and is only shown once).
5. **Add the settings to Vercel.** In the Vercel project go to **Settings → Environment Variables** and add:

   | Name                | Value                                            |
   | ------------------- | ------------------------------------------------ |
   | `RESEND_API_KEY`    | the key from step 4                              |
   | `RESEND_FROM_EMAIL` | `Goldkrest Group Website <website@goldkrest.group>` |

   Then **redeploy** (Deployments → ⋯ → Redeploy). Environment variables only apply to new deployments.
6. **Test it.** Fill in the form on the live site. The enquiry should arrive at info@goldkrest.group within a
   minute. Check spam the first time and mark it "not spam" if needed.

For local development, put the same two variables in `.env.local` (see `.env.example`).

**Shortcut without DNS changes:** sign up to Resend *using info@goldkrest.group* and set only `RESEND_API_KEY`.
Emails then come from Resend's shared `onboarding@resend.dev` address, which can only deliver to the account
owner's email, and they're more likely to land in spam. Fine for testing; verify the domain for the real thing.

**If it isn't working:** a missing key makes the form show "temporarily unavailable"; a rejected send shows
"couldn't be sent". In both cases the reason is logged in Vercel under **Logs**, and Resend's **Emails** page
lists every send attempt and whether it was delivered.

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

Real photos live in `public/images/<service>/` (`brickwork/`, `landscaping/`, `garden-maintenance/`). To add one:

1. Save it there (JPEG, around 1600px on the long side is plenty).
2. Import it at the top of `lib/site.ts` and add it to that service's `gallery` list with a short `alt` description.

Galleries show photos as uniform square tiles; clicking one opens the full, uncropped photo.

**Before & after:** when you have a genuine pair (both photos of the same job), add it to that service's
`beforeAfter` list in `lib/site.ts` instead of the gallery. Pairs appear in their own labelled "Before & after"
section above the gallery; the section is hidden on pages with no pairs.
