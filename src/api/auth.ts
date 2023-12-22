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
