import { FC, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface StepProps {
  onNext: () => void;
  onBack: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  authState: any;
  updateAuthState: (key: string, value: any) => void;
}

export const PinSetupStepper: FC<StepProps> = ({ updateAuthState }) => {
  const [pin, setPin] = useState<string>('');
  const [confirmPin, setConfirmPin] = useState<string>('');
  const [isConfirming, setIsConfirming] = useState(false);

  const handleNumberClick = (number: number) => {
    if (!isConfirming && pin.length < 4) {
      const newPin = pin + number;
      setPin(newPin);
      if (newPin.length === 4) {
        setTimeout(() => setIsConfirming(true), 500);
      }
    } else if (isConfirming && confirmPin.length < 4) {
      setConfirmPin(confirmPin + number);
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

  return (
    <div className="w-full max-w-[400px] mx-auto space-y-8">
   
      <div className="flex justify-center gap-3">
        {Array(4).fill(0).map((_, i) => (
          <div
            key={i}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              (!isConfirming && i < pin.length) || (isConfirming && i < confirmPin.length)
                ? "bg-primary scale-110"
                : "bg-gray-200"
            )}
          />
        ))}
      </div>

      <p className="text-center text-gray-700 font-medium">
        {isConfirming ? 'Confirm your PIN' : 'Enter your PIN'}
      </p>

      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <Button
            key={number}
            variant="outline"
            onClick={() => handleNumberClick(number)}
            className="h-16 text-xl w-[80px] rounded-2xl font-medium bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
          >
            {number}
          </Button>
        ))}
        <Button
          variant="outline"
          onClick={handleReset}
           className="h-16 text-xs w-[80px] rounded-lg font-medium bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
        >
          Reset
        </Button>
        <Button
          variant="outline"
          onClick={() => handleNumberClick(0)}
           className="h-16 text-xl w-[80px] rounded-lg font-medium bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
        >
          0
        </Button>
        <Button
          variant="outline"
          onClick={handleDelete}
           className="h-16 text-xs w-[80px] rounded-lg font-medium bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
        > 
          Delete
        </Button>
      </div>

     
      {isConfirming && confirmPin.length === 4 && pin !== confirmPin && (
        <p className="text-center text-red-500">
          PINs don't match. Please try again.
        </p>
      )}

      {isConfirming && confirmPin.length === 4 && pin === confirmPin && (
        <p className="text-center text-green-600">
          PIN successfully set!
        </p>
      )}
    </div>
  );
};