import axios from 'axios';
import { getAccessToken, removeCookieToken } from '../../../utils/sesstion';

export type Callback<T> = (arg?: T) => T;

export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  async (config) => {
    config.headers['Authorization'] = `Bearer ${getAccessToken()}`;
    const configure = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };
    return { ...config, ...configure };
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      removeCookieToken();
      window.location.reload();
    }

    return Promise.reject(error);
  }
);
