import { apiPost } from '../../../core/libs/axios';

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
  return apiPost('http://localhost:8989/api/auth/login', { user });
};

export const onSignup = (params: { email: string; username: string; password: string }) => {
  const user = {
    email: params.email,
    username: params.username,
    password: params.password,
  };
  return apiPost('http://localhost:8989/api/auth/register', { user });
};
