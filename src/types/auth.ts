import { ReactComponent } from 'react';

export interface BaseStep {
  title: string;
  description: string;
  component: React.ComponentType<StepProps>;
}

export type StepConfig = BaseStep & Partial<{
  note: string;
  validation: (state: AuthState) => boolean;
}>;

export type StepProps = {
  onNext: () => void;
  onBack: () => void;
} & Pick<AuthState, 'authState' | 'updateAuthState'> & {
  isFirstStep: boolean;
  isLastStep: boolean;
};

export type AuthState = {
  accountType: string;
  username: string;
  email: string;
  otp?: string;
  profileImage?: File;
  bio?: string;
  firstName?: string;
  lastName?: string;
  bankAccounts?: Array<{
    bankName: string;
    accountNumber: string;
  }>;
  pin?: string;
};