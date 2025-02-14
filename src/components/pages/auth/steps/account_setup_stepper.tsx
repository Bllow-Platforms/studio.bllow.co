import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Camera } from 'lucide-react';
import Image from 'next/image';
import { Label } from '@radix-ui/react-label';

interface StepProps {
  onNext: () => void;
  onBack: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  authState: any;
  updateAuthState: (key: string, value: any) => void;
}

const CameraIcon = () => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 14C12.6569 14 14 12.6569 14 11C14 9.34315 12.6569 8 11 8C9.34315 8 8 9.34315 8 11C8 12.6569 9.34315 14 11 14Z"
        stroke="#5C5C5C"
        stroke-width="1.5"
      />
      <path
        d="M1 11.364C1 8.29905 1 6.76705 1.749 5.66705C2.07457 5.18904 2.49118 4.77991 2.975 4.46305C3.695 3.99005 4.597 3.82105 5.978 3.76105C6.637 3.76105 7.204 3.27105 7.333 2.63605C7.43158 2.17092 7.68773 1.75408 8.05815 1.456C8.42857 1.15791 8.89055 0.996855 9.366 1.00005H12.634C13.622 1.00005 14.473 1.68505 14.667 2.63605C14.796 3.27105 15.363 3.76105 16.022 3.76105C17.402 3.82105 18.304 3.99105 19.025 4.46305C19.51 4.78105 19.927 5.19005 20.251 5.66705C21 6.76705 21 8.29905 21 11.364C21 14.429 21 15.96 20.251 17.061C19.9254 17.5391 19.5088 17.9482 19.025 18.265C17.904 19 16.343 19 13.222 19H8.778C5.657 19 4.096 19 2.975 18.265C2.49144 17.9478 2.07517 17.5383 1.75 17.06C1.53274 16.7364 1.37274 16.3779 1.277 16M18 8.00005H17"
        stroke="#5C5C5C"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};

export const SetUpAccountStepper: FC<StepProps> = ({ onNext, updateAuthState }) => {
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

  return (
    <div className="w-full max-w-[600px] mx-auto ">
      {/* Profile Image Upload */}
      <div className="flex justify-center">
        <div className="relative">
          <div className="w-[120px] rounded-full border-2 border-dashed border-white/30 flex items-center justify-center overflow-hidden">
            {profileImage ? (
              <Image
                src={profileImage}
                alt="Profile"
                fill
                className="object-cover"
              />
            ) : (
              <Camera className="w-8 h-8 text-white/50" />
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <p className="text-center mt-2 text-sm text-white/60">
            Click to upload picture
          </p>
        </div>
      </div>

      <div
        className="flex items-center flex-col lg:flex-row gap-10 justify-center 
        "
      >
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

          {/* Bio Input */}
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
    </div>
  );
};
