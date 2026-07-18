# Deployment Guide

The NSWF Wikipedia Portal is a fully static-compatible Next.js App Router project and can be deployed anywhere that supports Node.js or static HTML hosting.

## Vercel (Recommended)
1. Push your code to GitHub.
2. Go to Vercel dashboard and click "Add New Project".
3. Import your repository and click "Deploy". Vercel automatically detects Next.js.

## Static Export (GitHub Pages / Netlify / S3)
To export static files:
1. Update `next.config.ts` with `output: 'export'`.
2. Run `npm run build`.
3. The `out` folder contains the generated static files.

## Traditional Node.js Server
1. Run `npm run build`.
2. Start the production server with `npm start`.
3. Configure Nginx to reverse proxy port 3000.
