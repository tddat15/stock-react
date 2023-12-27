import { apiGet, apiPost } from '../../../core/libs/axios';

export const getListOfConversation = () => {
  return apiGet('/conversations');
};

export const getUserData = () => {
  return apiGet(`/users/me`);
};

export const getConversationById = (id: string) => {
  return apiGet(`/conversations/${id}`);
};

export const createNewConversation = () => {
  return apiPost(`/conversations`);
};

export const getConversationStory = (id: string) => {
  return apiGet(`/conversations/${id}/messages`);
};

export const postMessage = (content: string, id: string) => {
  return apiPost(`/conversations/${id}/messages`, { content });
};
