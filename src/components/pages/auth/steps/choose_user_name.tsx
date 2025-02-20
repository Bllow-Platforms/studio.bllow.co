import { FC } from 'react';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContinueButton } from '../components/continue-button';
import { toast } from 'sonner';

const usernameSchema = z.object({
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .max(30, 'Username must be less than 30 characters')
    .regex(
      /^[a-zA-Z0-9_]+$/,
      'Username can only contain letters, numbers, and underscores'
    ),
});

type UsernameFormData = z.infer<typeof usernameSchema>;

interface IPickerUsernameStepperProps {
  onNext: () => void;
  note?: string;
}

export const PickerUsernameStepper: FC<IPickerUsernameStepperProps> = ({
  onNext,
  note,
}) => {
  const {
    register,
    formState: { errors, isValid },
    trigger,
  } = useForm<UsernameFormData>({
    resolver: zodResolver(usernameSchema),
    mode: 'onChange',
  });

  const handleContinue = async () => {
    const isValid = await trigger('username');
    if (isValid) {
      onNext();
    } else {
      toast.error('Please enter a valid username');
    }
  };

  return (
    <div className="w-full flex justify-center flex-col items-center mx-auto">
      <div className="w-full">
        <Input
          placeholder="bllow.com/username"
          label="Username"
          {...register('username')}
          error={errors.username?.message}
        />
      </div>

      <ContinueButton note={note} onContinue={handleContinue} disabled={!isValid} />
    </div>
  );
};
