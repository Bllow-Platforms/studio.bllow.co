import { FC } from 'react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SelectLabel } from '@radix-ui/react-select';

interface StepProps {
  onNext: () => void;
  onBack: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  authState: any;
  updateAuthState: (key: string, value: any) => void;
}

export const MoreUserDetailStepper: FC<StepProps> = ({ updateAuthState }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    gender: '',
  });

  const handleChange = (key: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [key]: value,
    }));
    updateAuthState(key, value);
  };

  return (
    <div className="w-full max-w-[600px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Firstname"
          placeholder="e.g johndo"
          value={formData.firstName}
          onChange={e => handleChange('firstName', e.target.value)}
        />

        <Input
          label="Lastname"
          placeholder="e.g johndo"
          value={formData.lastName}
          onChange={e => handleChange('lastName', e.target.value)}
        />

        <Input
          label="Birthdate"
          placeholder="DD/MM/YYYY"
          type="date"
          value={formData.birthDate}
          onChange={e => handleChange('birthDate', e.target.value)}
          className="bg-white/5"
        />
        
        <div className="space-y-2">
          <label className="text-sm font-medium mb-2 text-gray-400">
            Gender
          </label>
          <Select
            value={formData.gender}
            onValueChange={value => handleChange('gender', value)}
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
        </div>
      </div>
    </div>
  );
};
