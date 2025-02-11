export enum ENDPOINT {
    // Auth 🔐
    SOCIAL_SIGN_IN = '/sign-in/social',
    EMAIL_SIGN_IN = '/sign-in/email',
    EMAIL_SIGN_UP = '/sign-up/email',
    SIGN_OUT = '/sign-out',
    GET_SESSION = '/get-session',
    FORGET_PASSWORD = '/forget-password',
    RESET_PASSWORD = '/reset-password',
    RESET_PASSWORD_TOKEN = '/reset-password/:token',

    // Email verification 📧
    VERIFY_EMAIL = '/verify-email',
    SEND_VERIFICATION_EMAIL = '/send-verification-email',

    // User management 
    CHANGE_EMAIL = '/change-email',
    CHANGE_PASSWORD = '/change-password',
    UPDATE_USER = '/update-user',
    DELETE_USER = '/delete-user',
    DELETE_USER_CALLBACK = '/delete-user/callback',

    // Sessions 🔑
    LIST_SESSIONS = '/list-sessions',
    REVOKE_SESSION = '/revoke-session',
    REVOKE_SESSIONS = '/revoke-sessions',
    REVOKE_OTHER_SESSIONS = '/revoke-other-sessions',

    // Social accounts 🤙
    LINK_SOCIAL = '/link-social',
    LIST_ACCOUNTS = '/list-accounts',
    UNLINK_ACCOUNT = '/unlink-account',

    // Status ✅
    OK = '/ok',
    ERROR = '/error'
}