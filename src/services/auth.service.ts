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
        `${this.BASE_PATH}/${ENDPOINT_ENUM.EMAIL_SIGN_IN}`,
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

  static async checkUsername(payload: { username: string }) {
    return ApiClient.get(
      `${ENDPOINT_ENUM.CHECK_USERNAME}?username=${payload.username}`
    );
  }

  static async checkEmailAddress(payload: { email: string }) {
    return ApiClient.get(`${ENDPOINT_ENUM.CHECK_EMAIL}?email=${payload.email}`);
  }

  static async sendVerificationEmailOtp(payload: any) {
    return ApiClient.post(ENDPOINT_ENUM.SEND_EMAIL_VERIFICATION, payload);
  }

  static async signup(credentials: any) {
    return ApiClient.post(ENDPOINT_ENUM.EMAIL_SIGN_UP, credentials);
  }

  static async signupUser(credentials: any) {
    return ApiClient.put(ENDPOINT_ENUM.UPDATE_PROFILE, credentials);
  }

  static async signInEmailVerificationOtp(credentials: any) {
    return ApiClient.post(ENDPOINT_ENUM.VERIFY_EMAIL_OTP, credentials);
  }

  static async me() {
    return ApiClient.get(`${this.BASE_PATH}/me`);
  }

  static async createWithdrawalPin(payload: any) {
    return ApiClient.post(ENDPOINT_ENUM.CREATE_WITHDRAWAL_PIN, payload);
  }
}
