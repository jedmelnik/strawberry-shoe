# Strawberry Shoe & Watch Repair

Modern rebuild of [strawberryshoe.com](http://www.strawberryshoe.com/) for Jed Melnik / Vercel Hobby.

## Stack

- Next.js App Router + TypeScript + Tailwind CSS + shadcn/ui
- Shared `PageHero` / `FocalBanner` framing (phone/tablet/desktop/ultrawide)

## Local development

```bash
cd /path/to/strawberry-shoe
npm install
npm run dev -- --hostname 127.0.0.1 --port 43217
```

Open [http://127.0.0.1:43217](http://127.0.0.1:43217).

## Contact facts (from the live site)

- **Address:** 800 Redwood Highway, Suite 617, Mill Valley, CA 94941
- **Phone:** (415) 381-3398
- **Email:** info@strawberryshoe.com
- **Hours:** Mon-Fri 10:30am-6:30pm · Sat 10:30am-5:30pm · Sun closed

## Deploy

```bash
export VERCEL_TOKEN="$(cat /home/ubuntu/.vercel_token)"
npx vercel@latest link --yes --product strawberry-shoe
npx vercel@latest deploy --prod --yes
```
