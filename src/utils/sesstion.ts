import cookie from 'js-cookie';
import { ACCESS_TOKEN, ID_TOKEN, REFRESH_TOKEN } from './constants';

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

export const getRefreshToken = () => {
  return cookie.get(REFRESH_TOKEN);
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
