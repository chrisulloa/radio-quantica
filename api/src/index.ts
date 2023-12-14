/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import express from 'express';
import http from 'http';
import morgan from 'morgan';
import { Server } from 'socket.io';
import payload from 'payload';
import logger from './utils/logging';
import {
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData,
} from './types/socketio';
import { updateMessageHistory } from './utils/messageHistory';
import seed from './seed';
import { validCORSURLs } from './utils/config';

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

const port = 3000;
logger.info(`🚀 Server ready at http://localhost:${port}`);

httpServer.listen({ port });

const io = new Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>(httpServer, {
  cors: {
    origin: validCORSURLs,
    methods: ['GET', 'POST'],
  },
});

io.on('connect', (socket) => {
  logger.info('New socket connection');
  socket.on('disconnect', () => {
    logger.info('Socket disconnected');
  });
  socket.on('newUser', (username: string, createdAt: string) => {
    logger.info(`New user joined ${username}`);
    io.emit('newUser', username, createdAt);
  });
  socket.on(
    'usernameChange',
    (oldUsername: string, newUsername: string, createdAt: string) => {
      io.emit('usernameChange', oldUsername, newUsername, createdAt);
    }
  );
  socket.on('chatMessage', (messageType, content, username, createdAt) => {
    io.emit('chatMessage', messageType, content, username, createdAt);
    updateMessageHistory(messageType, content, username, createdAt);
  });
});
