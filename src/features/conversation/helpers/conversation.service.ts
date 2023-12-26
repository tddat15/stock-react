import { apiGet, apiPost } from '../../../core/libs/axios';
import { conversationList } from './mockData';

export const getListOfConversation = () => {
  // return apiGet('http://localhost:8989/api/conversation');
  return conversationList;
};

export const createNewConversation = (params: {
  email: string;
  username: string;
  password: string;
}) => {
  const user = {
    email: params.email,
    username: params.username,
    password: params.password,
  };
  return apiPost('http://localhost:8989/api/auth/register', { user });
};
