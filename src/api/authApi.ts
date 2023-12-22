import { ApiResponse } from './api-common.ts';

interface User {
  email: string;
  username: string;
  bio: string;
  image: string | null;
}

interface Credentials {
  accessToken: string;
  accessTokenExpiredTime: string;
  refreshToken: string;
  refreshTokenExpiredTime: string;
}

interface AuthResponse extends ApiResponse {
  data: {
    user: User;
    credentials: Credentials;
  };
}

export class AuthApi {
  public async loginApi(data: { email: string; password: string }): Promise<AuthResponse> {
    const { email, password } = data;

    const response = await fetch('http://localhost:8989/api/auth/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        user: {
          email,
          password,
        },
      }),
    });

    return await response.json();
  }

  public async registerApi(data: {
    email: string;
    username: string;
    password: string;
  }): Promise<AuthResponse> {
    const { email, password, username } = data;

    const response = await fetch('http://localhost:8989/api/auth/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        user: {
          email,
          password,
          username,
        },
      }),
    });

    return await response.json();
  }
}
