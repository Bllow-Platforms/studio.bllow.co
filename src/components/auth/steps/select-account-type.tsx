import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { TUser } from '@/types/misc-types';
import { Button } from '@/components/ui/button';
import { ContinueButton } from '../continue-button';

interface ISelectProps {
  title: string;
  description: string;
  image: string;
  path: string;
  type: TUser;
}

const ACCOUNT_TYPE: ISelectProps[] = [
  {
    title: 'Creator',
    description: 'I want to receive donations, sell products and offer memberships',
    image: '/svgs/creator_type.svg',
    path: '/auth/creator',
    type: 'creator',
  },
  {
    title: 'Fan',
    description: 'I want to support and discover creators',
    image: '/svgs/fan_type.svg',
    path: '/auth/fan',
    type: 'fan',
  },
];

interface ISelectAccountTypeProps {
  onNext: () => void;
  updateAuthState: (key: string, value: any) => void;
  authState: {
    accountType?: string;
    [key: string]: any;
  };
  note?: string;
}

export const SelectAccountType: FC<ISelectAccountTypeProps> = ({
  onNext,
  updateAuthState,
  authState,
  note,
}) => {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState<ISelectProps | null>(
    authState.accountType
      ? ACCOUNT_TYPE.find(type => type.type === authState.accountType) || null
      : null
  );

  const handleAccountType = (item: ISelectProps) => {
    setSelectedType(item);
    updateAuthState('accountType', item.type);
  };

  const handleContinue = () => {
    if (selectedType) {
      const queryParams = new URLSearchParams(window.location.search);
      queryParams.set('type', selectedType.type);
      router.push(`${window.location.pathname}?${queryParams.toString()}`);
      onNext();
    }
  };

  return (
    <div className="w-full flex justify-center flex-col items-center mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-8 mt-8">
        {ACCOUNT_TYPE.map((item: ISelectProps, index) => {
          const { title, description, image } = item;
          const isSelected = selectedType?.title === title;
          return (
            <div
              key={index}
              onClick={() => handleAccountType(item)}
              className={`w-full flex lg:flex-col
                     lg:w-[300px] cursor-pointer border-2 rounded-[2em] items-center gap-4 lg:gap-0 p-[20px] transition-all duration-300 
                     ${isSelected ? 'border-primary border-2' : 'border-gray-300/30'}`}
            >
              <img src={image} width={150} alt="account type" />
              <div className="px-2">
                <h4
                  className={`text-lg font-semibold ${isSelected ? 'text-primary' : 'text-[#808080]'}`}
                >
                  {title}
                </h4>
                <p className="text-sm text-gray-400">{description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <ContinueButton
        note={note}
        onContinue={handleContinue}
        disabled={!selectedType}
      />
    </div>
  );
};
