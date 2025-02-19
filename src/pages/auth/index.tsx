import { AuthLayout } from '@/components/layouts/authLayout';
import { SelectAccountType } from '@/components/pages/auth/steps/select_account_type';
import { EnterEmailStepper } from '@/components/pages/auth/steps/enter_email_stepper';
import { PickerUsernameStepper } from '@/components/pages/auth/steps/choose_user_name';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { OTPVerificationStepper } from '@/components/pages/auth/steps/verify_otp';
import { SetUpAccountStepper } from '@/components/pages/auth/steps/account_setup_stepper';
import { MoreUserDetailStepper } from '@/components/pages/auth/steps/more_details_stepper';
import { FinancialSetupStepper } from '@/components/pages/auth/steps/financial_setup_stepper';
import { PinSetupStepper } from '@/components/pages/auth/steps/pin_setup_stepper';

interface BaseStep {
  title: string;
  description: string;
  component: React.ComponentType<StepProps>;
}

type StepConfig = BaseStep &
  Partial<{
    note: string;
    validation: (state: AuthState) => boolean;
    onStepComplete?: (state: AuthState) => Promise<boolean> | boolean;
  }>;

const IndexAuth = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [authState, setAuthState] = useState<AuthState>({
    accountType: '',
    username: '',
    email: '',
  });

  const STEPS: StepConfig[] = [
    {
      title: 'How would you like to create an account',
      description: 'Choose your account type to get started',
      component: SelectAccountType,
      note: '',
      onStepComplete: () => {},
    },
    {
      title: 'Choose a username',
      description: 'Choose your account type to get started',
      component: PickerUsernameStepper,
      note: 'This is something you’d be uniquely addressed as, so you’d want to use something that stands out 🔥',
    },
    {
      title: "What's your email?",
      description: 'Tell us your email address',
      component: EnterEmailStepper,
      note: 'Has to be unique 👋🏽',
      onStepComplete: () => {},
    },

    {
      title: "You're almost there!, let's make it official! ✅ 🌟",
      description:
        'Verify your Bllow account to dive into a world of creators. It just takes a moment',
      component: OTPVerificationStepper,
      note: 'We sent you a  temporary sign-in code sent to your mail or Please paste (or type) your 6-digit code 👀',
    },

    {
      title: 'Complete your account ',
      description: 'Choose your account type to get started',
      component: SetUpAccountStepper,
      note: 'This details is visitors to your profile would see first 👊🏽',
    },

    {
      title: 'Just a few more details ',
      description: 'You’re almost there....',
      component: MoreUserDetailStepper,
      note: 'Just a few more details incase you Bllow 😌',
    },

    {
      title: 'Where should your tips be paid ',
      description: 'Tell us where you’d like to receive your payments',
      component: FinancialSetupStepper,
      note: 'We really don’t need to tell you what to do, do we? 💰',
    },

    {
      title: 'Lastly, Setup withdrawal pin ',
      description: 'You’d use this to authorize your withdrawals',
      component: PinSetupStepper,
      note: '',
    },
  ];

  const handleNext = async () => {
    const currentStepConfig = STEPS[currentStep];

    if (currentStepConfig.onStepComplete) {
      try {
        const canProceed = await currentStepConfig.onStepComplete(authState);
        if (!canProceed) return;
      } catch (error) {
        console.error('Step completion failed:', error);
        return;
      }
    }

    if (currentStep < STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const updateAuthState = (key: keyof AuthState, value: string) => {
    setAuthState(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const CurrentStepComponent = STEPS[currentStep].component;

  const progress = ((currentStep + 1) / STEPS.length) * 100;

  return (
    <AuthLayout
      title={STEPS[currentStep].title}
      description={STEPS[currentStep].description}
      progress={progress}
      buttonText={currentStep === STEPS.length - 1 ? 'Continue' : 'Coninue'}
      onButtonClick={handleNext}
      showBackButton={currentStep > 0}
      onBackClick={handleBack}
      isButtonDisabled={false}
      note={STEPS[currentStep].note}
    >
      <CurrentStepComponent
        onNext={handleNext}
        onBack={handleBack}
        isFirstStep={currentStep === 0}
        isLastStep={currentStep === STEPS.length - 1}
        authState={authState}
        updateAuthState={updateAuthState}
      />
    </AuthLayout>
  );
};

export default IndexAuth;
