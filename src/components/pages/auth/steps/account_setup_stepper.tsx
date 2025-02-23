import { FC } from 'react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@radix-ui/react-label';
import { ContinueButton } from '../components/continue-button';
import { CameraIcon } from '@/assets/svgs';
import { useAuthStore } from '@/store/auth.store';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { MiscServices } from '@/services/misc.service';

const accountSchema = z.object({
  displayName: z.string().min(3, 'Display name must be at least 3 characters'),
  bio: z.string().optional(),
  profileImage: z.any().optional(),
});

type AccountFormData = z.infer<typeof accountSchema>;

export const SetUpAccountStepper: FC<StepProps> = ({ onNext, note }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const updateProfile = useAuthStore(state => state.updateProfile);

  const { mutateAsync: uploadImage, isPending: isUploading } = useMutation({
    mutationFn: (file: File) => MiscServices.upload({ file }),
    onSuccess: response => {
      const { url } = response;
      setProfileImage(url);
      toast.success('Profile picture uploaded successfully');
      return url;
    },
    onError: () => {
      toast.error('Failed to upload profile picture');
    },
  });

  const onSubmit = async (data: AccountFormData) => {
    try {
      let imageUrl = '';
      console.log(imageUrl);
      if (selectedFile) {
        const response = await uploadImage(selectedFile);
        imageUrl = response?.url;
      }

      updateProfile({
        displayName: data.displayName,
        bio: data.bio || '',
        profileImage: imageUrl,
      });
      onNext();
    } catch (error) {
      toast.error('Failed to complete setup');
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = e => {
        const result = e.target?.result as string;
        setProfileImage(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<AccountFormData>({
    resolver: zodResolver(accountSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[600px] mx-auto"
    >
      <div className="flex items-center flex-col lg:flex-row gap-10 justify-center">
        <div className="flex flex-col gap-4">
          <label className="cursor-pointer">
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
            <div className="flex items-center justify-center border-dotted border-[1px] h-[150px] w-[150px] rounded-full border-gray-400">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <CameraIcon />
              )}
            </div>
          </label>
          <div className="text-sm text-gray-400">Click to upload picture</div>
        </div>

        <div className="space-y-6 w-full">
          <Input
            label="Display Name"
            placeholder="e.g johndo"
            {...register('displayName')}
            error={errors.displayName?.message}
          />
          <div>
            <Label className="mb-[3em] text-gray-400">Bio</Label>
            <Textarea
              placeholder="Tell us about yourself..."
              {...register('bio')}
              className="min-h-[120px] mt-2 rounded-2xl bg-white/5 border-gray-300"
            />
          </div>
        </div>
      </div>

      <ContinueButton
        type="submit"
        note={note}
        onContinue={handleSubmit(onSubmit)}
        disabled={isSubmitting || isUploading}
        loading={isSubmitting || isUploading}
      />
    </form>
  );
};
