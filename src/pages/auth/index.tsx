import { AuthLayout } from "@/components/layouts/authLayout";
import { SelectAccountType } from "@/components/pages/auth/steps/select_account_type";
import { EnterEmailStepper } from "@/components/pages/auth/steps/enter_email_stepper";
import { PickerUsernameStepper } from "@/components/pages/auth/steps/choose_user_name";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface StepConfig {
  title: string;
  description: string;
  component: React.ComponentType<StepProps>;
}

interface StepProps {
  onNext: () => void;
  onBack: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

interface AuthState {
  accountType: string;
  username: string;
  email: string;
}

const IndexAuth = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [authState, setAuthState] = useState<AuthState>({
    accountType: '',
    username: '',
    email: '',
  });

  const STEPS: StepConfig[] = [
    {
      title: "How would you like to create an account",
      description: "Choose your account type to get started",
      component: SelectAccountType
    },
    {
      title: "Choose a username",
      description: "Choose your account type to get started",
      component: PickerUsernameStepper
    },
    {
      title: "What's your email?",
      description: "Tell us your email address",
      component: EnterEmailStepper
    },

    {
      title: "You're almost there!, let's make it official! ✅ 🌟",
      description: "Verify your Bllow account to dive into a world of creators. It just takes a moment",
      component: EnterEmailStepper
    },

    {
      title: "Complete your account ",
      description: "Choose your account type to get started",
      component: EnterEmailStepper
    },

    {
      title: "Just a few more details ",
      description: "You’re almost there....",
      component: EnterEmailStepper
    },

    {
      title: "Where should your tips be paid ",
      description: "Tell us where you’d like to receive your payments",
      component: EnterEmailStepper
    },

    {
      title: "Lastly, Setup withdrawal pin ",
      description: "You’d use this to authorize your withdrawals",
      component: EnterEmailStepper
    },

  ];

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

  const updateAuthState = (key: keyof AuthState, value: string) => {
    setAuthState(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const CurrentStepComponent = STEPS[currentStep].component;

  return (
    <AuthLayout
      title={STEPS[currentStep].title}
      description={STEPS[currentStep].description}
    >
      <div className="w-full max-w-[800px] mx-auto">
        <div className="w-full mb-8">
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white rounded-full transition-all duration-700 ease-in-out"
              style={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
            />
          </div>
          
          <div className="flex justify-between mt-2 text-xs text-white/50">
            {STEPS.map((_, index) => (
              <span key={index}>Step {index + 1}</span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-8">
          <div className="w-full transition-all duration-300">
            <CurrentStepComponent 
              onNext={handleNext}
              onBack={handleBack}
              isFirstStep={currentStep === 0}
              isLastStep={currentStep === STEPS.length - 1}
              authState={authState}
              updateAuthState={updateAuthState}
            />
          </div>

          <div className="flex items-center gap-4">
            {currentStep > 0 && (
              <Button
                variant="outline"
                onClick={handleBack}
                className="px-8 hover:bg-white/10"
              >
                Back
              </Button>
            )}
            <Button
              onClick={handleNext}
              className="px-8 bg-white text-background hover:bg-white/90"
              //disabled={!authState[Object.keys(authState)[currentStep] as keyof AuthState]}
            >
              {currentStep === STEPS.length - 1 ? 'Get Started' : 'Continue'}
            </Button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default IndexAuth;
