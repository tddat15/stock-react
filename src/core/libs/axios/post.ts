import { AxiosRequestConfig } from 'axios';
import { axiosInstance } from './axios-instance';
import { HOST } from '../../../features/common.ts';

const apiPost = async (url: string, body?: any, opts?: AxiosRequestConfig, responseData = true) => {
  try {
    const response = await axiosInstance.post(HOST + url, body, opts);
    if (!responseData) return response.data;

    const {
      data: { data },
    } = response;
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export default apiPost;
