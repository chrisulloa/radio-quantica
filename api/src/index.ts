/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import express from 'express';
import http from 'http';
import morgan from 'morgan';
import payload from 'payload';
import logger from './utils/logging';
import seed from './seed';

const app = express();
const httpServer = http.createServer(app);
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// eslint-disable-next-line no-void
void (async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
  });
  if (process.env.SEED) {
    await seed(payload);
  }
})();

app.get('/', (req, res) => {
  res.redirect('/admin');
});

const port = 3000;
logger.info(`🚀 Server ready at http://localhost:${port}`);

httpServer.listen({ port });
