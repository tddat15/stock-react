export enum ROLE_TYPE {
  USER = 'user',
  ASSISTANT = 'assistant',
}

export interface Conversations {
  conversation: {
    id: string;
    title: string;
    createdAt: string;
  };
}

export interface MessageProps {
  id: string;
  content: string;
  role: ROLE_TYPE;
  createdAt: string;
}

export interface SideBarResponse {
  user: {
    bio: string;
    email: string;
    image: string;
    username: string;
  };
}

export interface CreateConversationResponse {
  conversation: {
    createdAt: string;
    id: string;
    title: string;
  };
}
