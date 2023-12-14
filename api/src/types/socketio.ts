export type MessageType = 'GIF' | 'Chat' | 'TrackID';

export interface ServerToClientEvents {
  newUser: (username: string, createdAt: string) => void;
  usernameChange: (
    oldUsername: string,
    newUsername: string,
    createdAt: string
  ) => void;
  chatMessage: (
    messageType: MessageType,
    content: string,
    username: string,
    createdAt: string
  ) => void;
}

export interface ClientToServerEvents {
  newUser: (username: string, createdAt: string) => void;
  usernameChange: (
    oldUsername: string,
    newUsername: string,
    createdAt: string
  ) => void;
  chatMessage: (
    messageType: MessageType,
    content: string,
    username: string,
    createdAt: string
  ) => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  name: string;
  age: number;
}
