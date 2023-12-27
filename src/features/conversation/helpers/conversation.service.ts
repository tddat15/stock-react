import { apiPost } from '../../../core/libs/axios';

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
  return apiPost('/auth/register', { user });
};
