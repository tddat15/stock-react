import { apiDelete, apiPost } from '../../../core/libs/axios';
import { getRefreshToken } from '../../../utils/sesstion.ts';

export interface AuthResponse {
  user: {
    email: string;
    username: string;
    bio: string;
    image: string | null;
  };
  credentials: {
    accessToken: string;
    accessTokenExpiredTime: string;
    refreshToken: string;
    refreshTokenExpiredTime: string;
  };
}

export const onLogin = (params: { email: string; password: string }) => {
  const user = {
    email: params.email,
    password: params.password,
  };
  return apiPost('/auth/login', { user });
};

export const onSignup = (params: { email: string; username: string; password: string }) => {
  const user = {
    email: params.email,
    username: params.username,
    password: params.password,
  };
  return apiPost('/auth/register', { user });
};

export const onRefreshToken = () => {
  const refreshToken = getRefreshToken();
  return apiPost('/auth/refresh', {
    refreshToken,
  });
};

export const onLogout = () => {
  return apiDelete('/auth/logout');
};
