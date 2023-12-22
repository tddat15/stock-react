import { apiPost } from '../../../core/libs/axios';

export const onLogin = (params: any) => {
  const user = { email: 'dat_thai@gmail.com', password: 'quang123' };
  return apiPost('http://localhost:8989/api/auth/login', user);
};
