import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';

interface StepProps {
  onNext: () => void;
  onBack: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

export const OTPVerificationStepper: FC<StepProps> = ({ onNext }) => {
  const [otp, setOtp] = useState('');

  const handleComplete = (value: string) => {
    setOtp(value);
    if (value.length === 6) {
      setTimeout(() => {
        onNext();
      }, 500);
    }
  };

  return (
    <div className="w-full flex justify-center flex-col items-center mx-auto space-y-6">
      <div className="w-full max-w-[350px] mx-auto">
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <p className="text-gray-400 text-sm">
        Didn't receive code?{' '}
        <button className="text-primary hover:underline">Resend</button>
      </p>
    </div>
  );
};
