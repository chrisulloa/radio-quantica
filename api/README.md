# Radio Quantica: Payload CMS & API

This is the backend API service for the Radio Quantica website and admin
tooling. It is written in Typescript and uses
[Payload CMS](https://payloadcms.com/) providing a GraphQL endpoint and REST API
as well as an admin console.

## How to Run Locally

First start a MongoDB instance locally with Docker.

Next install dependencies with `npm install`

Now run `npm run dev` and access the service at `localhost:3000/admin`

The project uses [nodemon](https://github.com/remy/nodemon) for hot reloading.

## How to Develop

You can edit and add collections in the `src/collections` directory to update
the Payload CMS schema.

## Deployment

This service is hosted on the
[Digital Ocean App Platform](https://docs.digitalocean.com/products/app-platform/),
after a change is merged into main the deployment kicks off and api.particle.fm
is updated.
