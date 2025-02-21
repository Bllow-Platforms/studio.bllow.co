import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

interface AuthState {
  firstName: string;
  lastName: string;
  bio: string;
  gender: string;
  dob: string;
  profileImage: string;
  displayName: string;
  username: string;
  email: string;
}

interface AuthActions {
  updateProfile: (data: Partial<AuthState>) => void;
  resetAuth: () => void;
}

const initialState: AuthState = {
  firstName: '',
  lastName: '',
  bio: '',
  gender: '',
  dob: '',
  profileImage: '',
  displayName: '',
  username: '',
  email: '',
};

export const useAuthStore = create<AuthState & AuthActions>()(
  devtools(
    persist(
      set => ({
        ...initialState,

        updateProfile: data => {
          set(
            state => ({
              ...state,
              ...data,
            }),
            false,
            'updateProfile'
          );
        },

        resetAuth: () => {
          set(initialState, false, 'resetAuth');
        },
      }),
      {
        name: 'auth-storage',
      }
    ),
    {
      name: 'Auth Store',
      enabled: process.env.NODE_ENV === 'development',
    }
  )
);
