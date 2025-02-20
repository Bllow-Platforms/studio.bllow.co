import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { ContinueButton } from '../components/continue-button';

interface StepProps {
  onNext: () => void;
  note?: string;
}

export const OTPVerificationStepper: FC<StepProps> = ({ onNext, note }) => {
  const [otp, setOtp] = useState('');

  const handleContinue = () => {
    if (otp.length === 6) {
      onNext();
    }
  };

  return (
    <div className="w-full flex justify-center flex-col items-center mx-auto space-y-6">
      <div className="w-full max-w-[400px] mx-auto">
        <InputOTP maxLength={6} value={otp} onChange={setOtp}>
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
      <p className="text-gray-400 text-sm">
        Didn't receive code?{' '}
        <button className="text-primary hover:underline">Resend</button>
      </p>

      <ContinueButton
        note={note}
        onContinue={handleContinue}
        disabled={otp.length !== 6}
      />
    </div>
  );
};
