export interface Conversations {
  conversation: {
    id: string;
    title: string;
    createdAt: string;
  };
}

export interface MessageProps {
  id: string;
  text: string;
  host: boolean;
}
