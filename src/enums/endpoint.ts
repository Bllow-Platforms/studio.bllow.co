export enum ENDPOINT_ENUM {
  // Auth 🔐
  SOCIAL_SIGN_IN = '/sign-in/social',
  EMAIL_SIGN_IN = '/sign-in/email',
  EMAIL_SIGN_UP = '/sign-up/email',
  SIGN_OUT = '/sign-out',
  GET_SESSION = '/get-session',
  FORGET_PASSWORD = '/forget-password',
  RESET_PASSWORD = '/reset-password',
  RESET_PASSWORD_TOKEN = '/reset-password/:token',
  CHECK_EMAIL = '/auth/check-email',
  EMAIL_VERIFICATION = '/auth/sign-in/email-otp',

  // 📧
  VERIFY_EMAIL = '/verify-email',
  SEND_VERIFICATION_EMAIL = '/send-verification-email',

  // User management
  CHANGE_EMAIL = '/change-email',
  CHANGE_PASSWORD = '/change-password',
  UPDATE_USER = '/update-user',
  DELETE_USER = '/delete-user',
  DELETE_USER_CALLBACK = '/delete-user/callback',

  //  🔑
  LIST_SESSIONS = '/list-sessions',
  REVOKE_SESSION = '/revoke-session',
  REVOKE_SESSIONS = '/revoke-sessions',
  REVOKE_OTHER_SESSIONS = '/revoke-other-sessions',

  // 🤙
  LINK_SOCIAL = '/link-social',
  LIST_ACCOUNTS = '/list-accounts',
  UNLINK_ACCOUNT = '/unlink-account',

  // 🏦
  LIST_BANK = '/bank/list',
  ADD_BANK = '/account/bank-account',
  RESOLVE_BANK = '/bank/resolve-account',

  //MISC
  OK = '/ok',
  ERROR = '/error',
}
