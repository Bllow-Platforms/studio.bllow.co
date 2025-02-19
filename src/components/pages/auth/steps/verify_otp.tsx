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
      <div className="w-full max-w-[400px] mx-auto">
        <InputOTP
          maxLength={6}
          value={otp}
          onChange={setOtp}
          onComplete={handleComplete}
        >
          <InputOTPGroup className="gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <InputOTPSlot
                key={index}
                index={index}
                className="!rounded-lg w-[60px] h-[60px] !shadow-none inset-0"
              />
            ))}
          </InputOTPGroup>
        </InputOTP>
      </div>
      <p className="text-gray-400 text-sm mt-8">
        Didn't receive code?{' '}
        <button className="text-primary hover:underline">Resend</button>
      </p>
    </div>
  );
};
