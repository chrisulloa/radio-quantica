import { MessageType } from '../types/socketio';

export enum ChatMessageType {
  Chat = 'Chat',
  Gif = 'GIF',
  TrackId = 'TrackID',
}

export type ChatMessage = {
  __typename?: 'ChatMessage';
  content?: string;
  createdAt: string;
  messageType?: ChatMessageType;
  username: string;
};

class MessageStore {
  elements: ChatMessage[];

  constructor() {
    this.elements = [];
  }

  add(message: ChatMessage) {
    if (this.elements.length > 25) this.elements.shift();
    this.elements.push(message);
  }

  get store() {
    return this.elements;
  }
}

const messageStore = new MessageStore();

export const getMessageHistory = () => messageStore.store;

export const updateMessageHistory = (
  messageType: MessageType,
  content: string,
  username: string,
  createdAt: string
) => {
  messageStore.add({
    messageType: messageType as ChatMessageType,
    content,
    username,
    createdAt,
  });
};
