import { FC } from 'react';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContinueButton } from '../components/continue-button';
import { toast } from 'sonner';
import { AuthService } from '@/services/auth.service';
import { useMutation } from '@tanstack/react-query';
import { useAuthStore } from '@/store/auth.store';

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
  const updateProfile = useAuthStore(state => state.updateProfile);

  const { mutateAsync: checkUsername, isPending } = useMutation({
    mutationFn: (username: string) => AuthService.checkUsername({ username }),
    onSuccess: response => {
      if (response.exists) {
        toast.error('Username already exists');
      } else {
        updateProfile({ username: getValues('username') });
        onNext();
      }
    },
    onError: error => {
      toast.error(error.message || 'Failed to verify username');
    },
  });

  const {
    register,
    getValues,
    formState: { errors, isValid },
    trigger,
  } = useForm<UsernameFormData>({
    resolver: zodResolver(usernameSchema),
    mode: 'onChange',
  });

  const handleContinue = async () => {
    const isValid = await trigger('username');
    if (!isValid) {
      toast.error('Please enter a valid username');
      return;
    }

    try {
      await checkUsername(getValues('username'));
    } catch (error) {}
  };

  return (
    <div className="w-full flex justify-center flex-col items-center mx-auto">
      <div className="w-full space-y-2">
        <div className="w-full flex items-center  border border-input rounded-full pl-4">
          <p className="text-sm">bllow.com/</p>
          <Input className="border-none " placeholder='username' {...register('username')} />
        </div>
        {errors.username?.message && (
          <p className="text-sm text-destructive px-2">{errors.username.message}</p>
        )}
      </div>

      <ContinueButton
        note={note}
        onContinue={handleContinue}
        loading={isPending}
        disabled={!isValid || isPending}
      />
    </div>
  );
};
