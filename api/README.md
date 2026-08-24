# Radio Quantica: Payload CMS & API

This is the backend API service for the Radio Quantica website and admin
tooling. It is written in Typescript and uses
[Payload CMS](https://payloadcms.com/) providing a GraphQL endpoint and REST API
as well as an admin console. The Next.js frontend in `../frontend` consumes
this service's GraphQL API; see the root [README](../README.md) for how the
Libretime and Owncast streaming integrations fit in.

## How to Run Locally

1. **Start MongoDB.** For example, with Docker:

   ```
   docker run -d --name radio-quantica-mongo -p 27017:27017 mongo
   ```

2. **Create `.env.dev`** in this directory (it's gitignored) with at least:

   ```
   NODE_ENV=development
   PAYLOAD_CONFIG_PATH=src/payload.config.ts
   MONGO_URL=mongodb://localhost:27017/radio-quantica
   PAYLOAD_SECRET=<any-random-string-for-local-dev>
   PAYLOAD_DROP_DATABASE=false
   SEED=false
   ```

   A few features are backed by external services and only need their
   variables set if you're exercising that feature locally:
   - `SPACES_KEY` / `SPACES_SECRET` — DigitalOcean Spaces (S3-compatible) credentials, needed for media uploads.
   - `LIBRETIME_DROPLET_IP` / `LIBRETIME_DROPLET_PORT` / `LIBRETIME_DROPLET_USER` / `LIBRETIME_DROPLET_KEY` / `LIBRETIME_DROPLET_PASSPHRASE` — SSH access used by the admin-triggered "restart Libretime" job.
   - `REVALIDATE_TOKEN` — shared secret used to call the frontend's `/api/revalidate` endpoint when content changes.

3. **Install dependencies** with `npm install`.

4. **Run `npm run dev`** and access the service at [localhost:3000/admin](http://localhost:3000/admin). This creates the first admin user on initial load if the `users` collection is empty.

> `package.json` pins `engines.node` to `21.x`, but the production Docker image builds on Node 22.12 — if you hit engine-mismatch issues locally, prefer a Node 22 LTS via `nvm`.

## How to Develop

You can edit and add collections in the `src/collections` directory to update
the Payload CMS schema. After changing a collection, run `npm run generate`
(`payload generate:types`) to regenerate the TypeScript types Payload writes
to `src/types/payload.ts` — collections and resolvers import their types from
there (as `payload/generated-types`).

If you add or change a custom admin UI component (custom fields, views, etc.),
also run `npm run generate:importmap` (`payload generate:importmap`) to
regenerate the admin panel's import map so Payload can resolve your component.

Other useful scripts (see `package.json`):
- `npm run lint` / `npm run lint-fix` — ESLint.
- `npm run format` — Prettier.
- `npm test` — Jest.
- `npm run build` — production build (`./build.sh`).

## Deployment

This service is hosted on the
[Digital Ocean App Platform](https://docs.digitalocean.com/products/app-platform/).
A merge into `main` kicks off a deployment of the production API.
