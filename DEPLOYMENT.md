# Vercel Deployment Guide

This portfolio is configured for Vercel with `vercel.json`.

## One-time setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Log in to Vercel:
   ```bash
   npx vercel login
   ```

## Preview deploy

```bash
npx vercel
```

## Production deploy

```bash
npx vercel --prod
```

## CI/non-interactive deploy

Set these environment variables in CI:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Then run:

```bash
npx vercel --prod --yes --token "$VERCEL_TOKEN"
```
