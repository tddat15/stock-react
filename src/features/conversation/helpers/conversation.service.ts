import { apiGet, apiPost } from '../../../core/libs/axios';

export interface ListOfConversationResponse {
  conversation: {
    id: 'c794db60-6ff7-4900-8330-2a15c814b700';
    title: '019de390-5148-472e-99b9-cc8c26dd5b83';
    createdAt: '2023-12-25T16:06:26.597393';
  };
}

export const getListOfConversation = (params: { accessToken: string }) => {
  return apiGet('http://localhost:8989/api/conversation', {
    headers: {
      Authorization: `${params.accessToken}`,
    },
  });
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
