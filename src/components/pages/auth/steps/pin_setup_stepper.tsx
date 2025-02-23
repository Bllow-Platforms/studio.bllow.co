import { FC, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { AuthService } from '@/services/auth.service';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import DefaultLoadingPage from '@/components/loaders/default-loader';
import { Delete } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface StepProps {
  onNext: () => void;
  onBack: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  authState: any;
  updateAuthState: (key: string, value: any) => void;
}

export const PinSetupStepper: FC<StepProps> = ({ onNext, updateAuthState }) => {
  const [pin, setPin] = useState<string>('');
  const [confirmPin, setConfirmPin] = useState<string>('');
  const [isConfirming, setIsConfirming] = useState(false);
  const route = useRouter();

  const { mutateAsync: createPin, isPending } = useMutation({
    mutationFn: (data: { pin: string; confirmPin: string }) =>
      AuthService.createWithdrawalPin(data),
    onSuccess: () => {
      toast.success('PIN set successfully');
      updateAuthState('pin', pin);
      route.push('/dashboard');
      onNext();
    },
    onError: error => {
      toast.error(error.message || 'Failed to set PIN');
      handleReset();
    },
  });

  const handleNumberClick = (number: number) => {
    if (!isConfirming && pin.length < 4) {
      const newPin = pin + number;
      setPin(newPin);
      if (newPin.length === 4) {
        setTimeout(() => setIsConfirming(true), 500);
      }
    } else if (isConfirming && confirmPin.length < 4) {
      const newConfirmPin = confirmPin + number;
      setConfirmPin(newConfirmPin);

      if (newConfirmPin.length === 4) {
        if (pin === newConfirmPin) {
          createPin({ pin, confirmPin: newConfirmPin });
        }
      }
    }
  };

  const handleDelete = () => {
    if (!isConfirming) {
      setPin(pin.slice(0, -1));
    } else {
      setConfirmPin(confirmPin.slice(0, -1));
    }
  };

  const handleReset = () => {
    setPin('');
    setConfirmPin('');
    setIsConfirming(false);
  };

  if (isPending) {
    return <DefaultLoadingPage />;
  }

  return (
    <div className="w-full max-w-[400px] mx-auto space-y-8">
      <div className="flex justify-center gap-3">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={cn(
                'w-4 h-4 rounded-full transition-all duration-300',
                (!isConfirming && i < pin.length) ||
                  (isConfirming && i < confirmPin.length)
                  ? 'bg-primary scale-110'
                  : 'bg-gray-200'
              )}
            />
          ))}
      </div>

      <p className="text-center text-gray-700 font-medium">
        {isConfirming ? 'Confirm your PIN' : 'Enter your PIN'}
      </p>

      <div className="grid grid-cols-3 lg:px-[3em] gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(number => (
          <Button
            key={number}
            variant="outline"
            onClick={() => handleNumberClick(number)}
            className="h-[64px] text-xl w-[64px] rounded-2xl font-medium bg-transparent border-gray-200 text-gray-700 hover:bg-gray-100"
          >
            {number}.
          </Button>
        ))}
        <Button
          variant="outline"
          onClick={handleReset}
          className="h-[64px]  text-xs invisible w-[64px] rounded-2xl font-medium bg-transparent border-gray-200 text-gray-700 hover:bg-gray-100"
        >
          Reset
        </Button>
        <Button
          variant="outline"
          onClick={() => handleNumberClick(0)}
          className="h-[64px] text-xl w-[64px] rounded-2xl font-medium bg-transparent border-gray-200 text-gray-700 hover:bg-gray-100"
        >
          0
        </Button>
        <Button
          variant="outline"
          onClick={handleDelete}
          className="h-[64px] text-xl w-[64px] rounded-2xl font-medium bg-transparent border-gray-200 text-gray-700 hover:bg-gray-100"
        >
          <Delete />
        </Button>
      </div>

      {isConfirming && confirmPin.length === 4 && pin !== confirmPin && (
        <p className="text-center text-red-500">
          PINs don't match. Please try again.
        </p>
      )}

      {isConfirming && confirmPin.length === 4 && pin === confirmPin && (
        <p className="text-center text-green-600">PIN successfully set!</p>
      )}
    </div>
  );
};
