import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Input } from '@/components/ui/input';

interface ISelectProps {
  title: string;
  description: string;
  image: string;
  path: string;
}

interface IPickerUsernameStepperProps {}

export const PickerUsernameStepper: FC<IPickerUsernameStepperProps> = props => {
  const [selectedType, setSelectedType] = useState<ISelectProps | {}>({});
  const router = useRouter();

  const handleAccountType = (item: ISelectProps) => {
    setSelectedType(item);
  };

  const handleRoute = (path: string) => router.push(path);
  return (
    <div className="w-full  flex justify-center flex-col items-center mx-auto">
      <Input placeholder="bllow.com/username" />
    </div>
  );
};
