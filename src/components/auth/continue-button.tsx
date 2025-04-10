import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface IContinueButtonProps {
  note?: string;
  onContinue: () => void;
  disabled?: boolean;
  label?: string;
  loading?: boolean;
  type?: 'submit' | 'button';
}

export const ContinueButton: FC<IContinueButtonProps> = ({
  note,
  onContinue,
  disabled,
  label = 'Continue',
  loading = false,
  type,
}) => {
  return (
    <>
      {note && (
        <p className="text-center w-full lg:w-[400px] mx-auto text-gray-400 my-4 text-lg font-light">
          {note}
        </p>
      )}

      <div className="flex items-center justify-center gap-4 mt-8">
        <Button
          onClick={onContinue}
          className="px-[55px]"
          disabled={disabled || loading}
          loading={loading}
          type={type}
        >
          {loading && <Loader2 className="animate-spin mr-2 h-4 w-4" />}
          {label}
        </Button>
      </div>
    </>
  );
};
