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
