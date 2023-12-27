import { axiosInstance } from './axios-instance';
import { HOST } from '../../../features/common.ts';

const apiDelete = async (url: string, params?: any, useDataConfig = false) => {
  try {
    console.log('apiDelete', HOST + url);
    const {
      data: { data },
    } = useDataConfig
      ? await axiosInstance.delete(HOST + url, { data: params })
      : await axiosInstance.delete(HOST + url, { params });

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
export default apiDelete;
