import { FC } from 'react';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContinueButton } from '../components/continue-button';
import { toast } from 'sonner';
import { AuthService } from '@/services/auth.service';
import { useMutation } from '@tanstack/react-query';

const emailSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type EmailFormData = z.infer<typeof emailSchema>;

interface IEmailStepperProps {
  onNext: () => void;
  note?: string;
}

export const EnterEmailStepper: FC<IEmailStepperProps> = ({ onNext, note }) => {
  const { mutateAsync: signIn, isPending } = useMutation({
    mutationFn: (email: string) => AuthService.signIn({ email, password: '' }),
    onError: error => {
      toast.error(error.message || 'Failed to sign in');
    },
    onSuccess: () => {
      onNext();
    },
  });

  const {
    register,
    getValues,
    formState: { errors, isValid },
    trigger,
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
    mode: 'onChange',
  });

  const handleContinue = async () => {
    const isValid = await trigger('email');
    if (!isValid) {
      toast.error('Please enter a valid email');
      return;
    }

    try {
      await signIn(getValues('email'));
      onNext();
    } catch (error) {
      toast.error('Failed to proceed');
    }
  };

  return (
    <div className="w-full flex justify-center flex-col items-center mx-auto">
      <div className="w-full">
        <Input
          label="Email"
          placeholder="eg. johndoe@gmail.com"
          {...register('email')}
          error={errors.email?.message}
        />
      </div>

      <ContinueButton
        note={note}
        onContinue={handleContinue}
        disabled={!isValid || isPending}
      />
    </div>
  );
};
