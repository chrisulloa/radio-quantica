# Particle FM: GraphQL API

This is the backend API service for the Particle FM website and admin tooling.
It is written in Typescript and uses
[Apollo Server](https://www.apollographql.com/docs/) for handling GraphQL
services.

## How to Run Locally

First start the Postgres DB with Docker: `./run-db.sh`, then you can query the
database locally:

```
psql -d defaultdb -U doadmin -p 5432 -h localhost
password: test
```

Next install dependencies with `npm install`

Now run `npm run dev` and access the service at `localhost:3000/graphql`

```
INFO 2023-01-02T01:43:26.716Z: Fetching azuracast_creds from creds.json file.
INFO 2023-01-02T01:43:26.732Z: 🚀 Server ready at http://localhost:3000/graphql
```

The project uses [nodemon](https://github.com/remy/nodemon) for hot reloading.

## How to Develop

After making changes to the `/resources/schema.graphql` file you will need to
generate types for use in the Typescript code by running `npm run generate`.

Similarly any changes to the
[Prisma](https://www.prisma.io/docs/concepts/components/prisma-migrate/get-started)
schema will require you to run migrations with `npm run migrate:dev` to apply to
your local database (prod migrations are run as part of the build).

## Deployment

This service is hosted on the
[Digital Ocean App Platform](https://docs.digitalocean.com/products/app-platform/),
after a change is merged into main the deployment kicks off and api.particle.fm
is updated.
