import { AuthLayout } from '@/components/modules/layouts/auth-layout';
import { SelectAccountType } from '@/components/auth/steps/select-account-type';
import { EnterEmailStepper } from '@/components/auth/steps/enter-email-stepper';
import { PickerUsernameStepper } from '@/components/auth/steps/choose-username';
import { FC, useState } from 'react';
import { OTPVerificationStepper } from '@/components/auth/steps/verify-otp';
import { SetUpAccountStepper } from '@/components/auth/steps/account-setup-stepper';
import { MoreUserDetailStepper } from '@/components/auth/steps/more-details-stepper';
import { FinancialSetupStepper } from '@/components/auth/steps/financial-setup-stepper';
import { PinSetupStepper } from '@/components/auth/steps/pin-setup-stepper';
import { useSearchParams } from 'next/navigation';
import { AuthState, StepProps } from '@/types/auth-types';

interface BaseStep {
  title: string;
  description: string;
  component: FC<any>;
  note?: string;
  allowSkip?: true;
}

const IndexAuth = () => {
  const searchParams = useSearchParams();
  const accountType = searchParams.get('type');
  const [currentStep, setCurrentStep] = useState(0);

  const [authState, setAuthState] = useState<AuthState>({
    accountType: '',
    username: '',
    email: '',
  });

  const baseSteps: BaseStep[] = [
    {
      title: 'How would you like to create an account',
      description: 'Choose your account type to get started',
      component: SelectAccountType,
    },
    {
      title: "What's your email?",
      description: 'Tell us your email address',
      component: EnterEmailStepper,
      note: 'Has to be unique 👋🏽',
    },
    {
      title: "You're almost there!, let's make it official! ✅ 🌟",
      description:
        'Verify your Bllow account to dive into a world of creators. It just takes a moment',
      component: OTPVerificationStepper,
      note: 'We sent you a temporary sign-in code to your mail. Please paste (or type) your 6-digit code 👀',
    },
    {
      title: 'Complete your account',
      description: 'Choose your account type to get started',
      component: SetUpAccountStepper,
      note: 'This details is visitors to your profile would see first 👊🏽',
    },
    {
      title: 'Just a few more details',
      description: 'Youre almost there....',
      component: MoreUserDetailStepper,
      note: 'Just a few more details incase you Bllow 😌',
    },
    {
      title: 'Where should your tips be paid',
      description: 'Tell us where youd like to receive your payments',
      component: FinancialSetupStepper,
      note: 'We really dont need to tell you what to do, do we? 💰',
      allowSkip: true,
    },
    {
      title: 'Lastly, Setup withdrawal pin',
      description: 'Youd use this to authorize your withdrawals',
      component: PinSetupStepper,
    },
  ];

  const creatorUsernameStep: BaseStep = {
    title: 'Choose a username',
    description: 'Choose your account type to get started',
    component: PickerUsernameStepper,
    note: 'This is something you be uniquely addressed as, so you want to use something that stands out 🔥',
  };

  const STEPS: BaseStep[] =
    accountType === 'fan'
      ? baseSteps
      : [...baseSteps.slice(0, 1), creatorUsernameStep, ...baseSteps.slice(1)];

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const updateAuthState = (key: keyof AuthState, value: any) => {
    setAuthState(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const CurrentStepComponent = STEPS[currentStep]?.component;
  const progress = ((currentStep + 1) / STEPS.length) * 100;

  return (
    <AuthLayout
      title={STEPS[currentStep]?.title}
      description={STEPS[currentStep]?.description}
      progress={progress}
      showBackButton={currentStep > 0}
      onBackClick={handleBack}
      handleNext={handleNext}
      allowSkip={STEPS[currentStep]?.allowSkip}
    >
      <CurrentStepComponent
        onNext={handleNext}
        onBack={handleBack}
        isFirstStep={currentStep === 0}
        isLastStep={currentStep === STEPS?.length - 1}
        authState={authState}
        updateAuthState={updateAuthState}
        note={STEPS[currentStep].note}
      />
    </AuthLayout>
  );
};

export default IndexAuth;
