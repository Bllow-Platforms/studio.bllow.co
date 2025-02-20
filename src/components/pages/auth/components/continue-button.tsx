import { FC } from 'react';
import { Button } from '@/components/ui/button';

interface IContinueButtonProps {
  note?: string;
  onContinue: () => void;
  disabled?: boolean;
}

export const ContinueButton: FC<IContinueButtonProps> = ({
  note,
  onContinue,
  disabled,
}) => {
  return (
    <>
      {note && (
        <p className="text-center w-full lg:w-[400px] mx-auto text-gray-400 my-4 text-lg font-light">
          {note}
        </p>
      )}

      <div className="flex items-center justify-center gap-4 mt-8">
        <Button onClick={onContinue} className="px-[55px]" disabled={disabled}>
          Continue
        </Button>
      </div>
    </>
  );
};
