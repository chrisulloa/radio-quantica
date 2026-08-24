# Radio Quantica API & Frontend
This repo contains a Payload CMS backend (`api/`) with a NextJS React Frontend (`frontend/`) used to drive the new Rádio Quântica website, an online community internet radio station based in Lisbon, Portugal.

## Related services
The website connects to two externally-hosted streaming services that aren't part of this repo:

- **Libretime** — handles the live audio stream and show schedule. The frontend plays the live stream directly from Libretime and pulls schedule/now-playing data from its API (`frontend/lib/utils.ts`, `frontend/components/player.tsx`, `frontend/pages/schedule.tsx`). The API can also SSH into the Libretime host to restart it via an admin-triggered job (`api/src/tasks/restartStreamingServer.ts`).
- **Owncast** — handles the live video stream. Owncast posts webhooks to the API (`/set-owncast-status`) when the stream starts/stops, which updates a cached live status served to the frontend over GraphQL (`api/src/graphql/resolvers.ts`).
