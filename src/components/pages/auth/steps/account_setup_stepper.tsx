import { FC } from 'react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@radix-ui/react-label';
import { ContinueButton } from '../components/continue-button';
import { CameraIcon } from '@/assets/svgs';

interface StepProps {
  onNext: () => void;
  onBack: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  authState: any;
  updateAuthState: (key: string, value: any) => void;
}

export const SetUpAccountStepper: FC<StepProps> = ({
  onNext,
  updateAuthState,
  note,
}) => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [displayName, setDisplayName] = useState('');
  const [bio, setBio] = useState('');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        const result = e.target?.result as string;
        setProfileImage(result);
        updateAuthState('profileImage', file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleContinue = () => {
    if (displayName.trim()) {
      onNext();
    }
  };

  return (
    <div className="w-full max-w-[600px] mx-auto">
      <div className="flex items-center flex-col lg:flex-row gap-10 justify-center">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center border-dotted border-[1px]  h-[150px] w-[150px] rounded-full border-gray-400">
            <CameraIcon />
          </div>

          <div className="text-sm text-gray-400">Click to upload picture</div>
        </div>

        <div className="space-y-6 w-full">
          <Input
            label="Display Name"
            placeholder="e.g johndo"
            value={displayName}
            onChange={e => {
              setDisplayName(e.target.value);
              updateAuthState('displayName', e.target.value);
            }}
          />
          <div>
            <Label className="mb-[3em] text-gray-400 font-">Bio</Label>
            <Textarea
              label="Bio"
              placeholder="Tell us about yourself..."
              value={bio}
              onChange={e => {
                setBio(e.target.value);
                updateAuthState('bio', e.target.value);
              }}
              className="min-h-[120px] mt-2 rounded-2xl bg-white/5 border-gray-300"
            />
          </div>
        </div>
      </div>

      <ContinueButton
        note={note}
        onContinue={handleContinue}
        disabled={!displayName.trim()}
      />
    </div>
  );
};
