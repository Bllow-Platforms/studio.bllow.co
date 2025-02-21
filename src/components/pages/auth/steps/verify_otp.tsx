import { FC } from 'react';
import { useState } from 'react';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { ContinueButton } from '../components/continue-button';
import { AuthService } from '@/services/auth.service';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { useAuthStore } from '@/store/auth.store';

interface StepProps {
  onNext: () => void;
  note?: string;
}

export const OTPVerificationStepper: FC<StepProps> = ({ onNext, note }) => {
  const [otp, setOtp] = useState('');
  const email = useAuthStore(state => state.email);

  const { mutateAsync: resendOtp, isPending: isResending } = useMutation({
    mutationFn: () =>
      AuthService.sendVerificationEmailOtp({
        email,
        type: 'sign-in',
      }),
    onSuccess: () => {
      toast.success('Verification code resent to your email');
    },
    onError: error => {
      toast.error(error.message || 'Failed to resend code');
    },
  });

  const { mutateAsync: verifyOtp, isPending } = useMutation({
    mutationFn: (otp: string) =>
      AuthService.signInEmailVerificationOtp({
        email,
        otp,
      }),
    onSuccess: (response: { token: string }) => {
      toast.success('Email verified successfully');
      const { token } = response || {};
      if (token) {
        localStorage.setItem('token', token);
      }
      onNext();
    },
    onError: error => {
      toast('Invalid OTP');
      toast.error(error.message || 'Invalid OTP code');
    },
  });

  const handleContinue = async () => {
    if (otp.length === 6) {
      try {
        await verifyOtp(otp);
      } catch (error) {}
    }
  };

  const handleResend = async () => {
    try {
      await resendOtp();
    } catch (error) {}
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
        <button
          onClick={handleResend}
          disabled={isResending}
          className="text-primary hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isResending ? 'Sending...' : 'Resend'}
        </button>
      </p>

      <ContinueButton
        note={note}
        onContinue={handleContinue}
        disabled={otp.length !== 6 || isPending}
      />
    </div>
  );
};
