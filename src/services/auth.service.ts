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
    try {
      const response = await ApiClient.post<LoginResponse>(
        ENDPOINT_ENUM.EMAIL_SIGN_IN,
        credentials
      );
      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Authentication failed: ${error.message}`);
      }
      throw new Error('Authentication failed: An unexpected error occurred');
    }
  }

  static async signInWithUsername() {
    ApiClient.post(ENDPOINT_ENUM);
  }

  static async verifyEmailOtp(payload: any) {
    return ApiClient.post(ENDPOINT_ENUM.EMAIL_VERIFICATION, payload);
  }

  static async signup(credentials: any) {
    return ApiClient.post(ENDPOINT_ENUM.EMAIL_SIGN_UP, credentials);
  }

  static async signInEmailVerificationOtp(credentials: any) {
    return ApiClient.post(ENDPOINT_ENUM.SIGN_IN_EMAIL_OTP, credentials);
  }

  static async me() {
    return ApiClient.get(`${this.BASE_PATH}/me`);
  }
}
