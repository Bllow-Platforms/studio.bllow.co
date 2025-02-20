import { ENDPOINT_ENUM } from '@/enums/endpoint';
import { ApiClient } from '@/lib/api-client';

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

export class AuthService {
  private static readonly BASE_PATH = '/auth';

  static async signIn(credentials: LoginCredentials) {
    return ApiClient.post<LoginResponse>(ENDPOINT_ENUM.EMAIL_SIGN_IN, credentials);
  }

  static async signup(credentials: any) {
    return ApiClient.post(ENDPOINT_ENUM.EMAIL_SIGN_UP, credentials);
  }

  static async me() {
    return ApiClient.get(`${this.BASE_PATH}/me`);
  }
}
