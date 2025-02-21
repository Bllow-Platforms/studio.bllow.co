import { FC } from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ContinueButton } from '../components/continue-button';
import { useAuthStore } from '@/store/auth.store';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { AuthService } from '@/services/auth.service';
import { toast } from 'sonner';

const detailsSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  birthDate: z.string().min(1, 'Birth date is required'),
  gender: z.string().min(1, 'Gender is required'),
});

type DetailsFormData = z.infer<typeof detailsSchema>;

export const MoreUserDetailStepper: FC<StepProps> = ({ onNext, note }) => {
  const updateProfile = useAuthStore(state => state.updateProfile);
  const authState = useAuthStore(state => state);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm<DetailsFormData>({
    resolver: zodResolver(detailsSchema),
    mode: 'onChange',
  });

  const { mutateAsync: signupUser, isPending } = useMutation({
    mutationFn: (data: DetailsFormData) =>
      AuthService.signupUser({
        ...authState,
        ...data,
        dob: data.birthDate,
      }),
    onSuccess: () => {
      toast.success('Profile created successfully');
      onNext();
    },
    onError: error => {
      toast.error(error.message || 'Failed to create profile');
    },
  });

  const onSubmit = async (data: DetailsFormData) => {
    updateProfile({
      firstName: data.firstName,
      lastName: data.lastName,
      dob: data.birthDate,
      gender: data.gender,
    });

    try {
      await signupUser(data);
    } catch (error) {}
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[600px] mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Firstname"
          placeholder="e.g johndo"
          {...register('firstName')}
          error={errors.firstName?.message}
        />

        <Input
          label="Lastname"
          placeholder="e.g johndo"
          {...register('lastName')}
          error={errors.lastName?.message}
        />

        <Input
          label="Birthdate"
          placeholder="DD/MM/YYYY"
          type="date"
          {...register('birthDate')}
          error={errors.birthDate?.message}
          className="bg-white/5"
        />

        <div className="space-y-2">
          <label className="text-sm font-medium mb-2 text-gray-400">Gender</label>
          <Select
            onValueChange={value =>
              setValue('gender', value, { shouldValidate: true })
            }
          >
            <SelectTrigger className="h-[48px] rounded-full bg-white/5">
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
              <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
            </SelectContent>
          </Select>
          {errors.gender && (
            <p className="text-sm text-red-500">{errors.gender.message}</p>
          )}
        </div>
      </div>

      <ContinueButton
        type="submit"
        note={note}
        onContinue={handleSubmit(onSubmit)}
        disabled={!isValid || isPending}
      />
    </form>
  );
};
