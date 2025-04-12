export enum ENDPOINT_ENUM {
  SOCIAL_SIGN_IN = '/sign-in/social',
  EMAIL_SIGN_IN = '/sign-in/email',
  EMAIL_SIGN_UP = '/sign-up/email',
  SIGN_OUT = '/sign-out',
  GET_SESSION = '/get-session',
  FORGET_PASSWORD = '/forget-password',
  RESET_PASSWORD = '/reset-password',
  RESET_PASSWORD_TOKEN = '/reset-password/:token',
  SEND_EMAIL_VERIFICATION = '/auth/email-otp/send-verification-otp',
  CHECK_USERNAME = '/auth/check-username',
  CHECK_EMAIL = '/auth/check-email',
  VERIFY_EMAIL_OTP = '/auth/sign-in/email-otp',
  CREATE_WITHDRAWAL_PIN = '/account/withdrawal-pin',
  VERIFY_EMAIL = '/verify-email',

  CHANGE_EMAIL = '/change-email',
  CHANGE_PASSWORD = '/change-password',
  UPDATE_USER = '/update-user',
  DELETE_USER = '/delete-user',
  DELETE_USER_CALLBACK = '/delete-user/callback',
  UPDATE_PROFILE = '/account/profile',

  LIST_SESSIONS = '/list-sessions',
  REVOKE_SESSION = '/revoke-session',
  REVOKE_SESSIONS = '/revoke-sessions',
  REVOKE_OTHER_SESSIONS = '/revoke-other-sessions',

  LINK_SOCIAL = '/link-social',
  LIST_ACCOUNTS = '/list-accounts',
  UNLINK_ACCOUNT = '/unlink-account',

  LIST_BANK = '/bank/list',
  ADD_BANK = '/account/bank-account',
  RESOLVE_BANK = '/bank/resolve-account',

  UPLOAD = '/upload',
  OK = '/ok',
  ERROR = '/error',

}
