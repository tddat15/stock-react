import cookie from 'js-cookie';
import {
  ACCESS_TOKEN,
  ACCESS_TOKEN_EXPIRED_TIME,
  ID_TOKEN,
  REFRESH_TOKEN,
  REFRESH_TOKEN_EXPIRED_TIME,
} from './constants';
import { AuthResponse } from '../features/authentication/helpers/authentication.service.ts';

export const getCookie = (name: string) => {
  cookie.get(name);
};

export const setCookie = (name: string, value: string) => {
  cookie.set(name, value, {
    sameSite: 'lax',
  });
};

export const removeCookie = (name: string) => {
  cookie.remove(name);
};

export const getAccessToken = () => {
  return cookie.get(ACCESS_TOKEN);
};

export const getAccessTokenExpiredTime = () => {
  return cookie.get(ACCESS_TOKEN_EXPIRED_TIME);
};

export const getRefreshToken = () => {
  return cookie.get(REFRESH_TOKEN);
};

export const getRefreshTokenExpiredTime = () => {
  return cookie.get(REFRESH_TOKEN_EXPIRED_TIME);
};

export const getIdToken = () => {
  return cookie.get(ID_TOKEN);
};

export const hasLoggedIn = () => {
  return getAccessToken() != null;
};

export const removeCookieToken = () => {
  cookie.remove(ACCESS_TOKEN);
  cookie.remove(ID_TOKEN);
  cookie.remove(REFRESH_TOKEN);
};

export const addCookieToken = (response: AuthResponse) => {
  setCookie(ACCESS_TOKEN, response.credentials.accessToken);
  setCookie(REFRESH_TOKEN, response.credentials.refreshToken);
};
