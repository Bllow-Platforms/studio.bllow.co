import { FC } from 'react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Building2, Trash2 } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface BankAccount {
  bankName: string;
  accountNumber: string;
  accountHolder: string;
}

interface StepProps {
  onNext: () => void;
  onBack: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  authState: any;
  updateAuthState: (key: string, value: any) => void;
}

export const FinancialSetupStepper: FC<StepProps> = ({ updateAuthState }) => {
  const [accounts, setAccounts] = useState<BankAccount[]>([]);
  const [newAccount, setNewAccount] = useState({
    bankName: '',
    accountNumber: '',
    accountHolder: '',
  });

  const banks = ['Zenith Bank', 'Kuda Microfinance Bank', 'GTBank', 'First Bank'];

  const handleAddAccount = () => {
    if (newAccount.bankName && newAccount.accountNumber) {
      setAccounts([...accounts, newAccount]);
      setNewAccount({ bankName: '', accountNumber: '', accountHolder: '' });
      updateAuthState('bankAccounts', [...accounts, newAccount]);
    }
  };

  const handleDeleteAccount = (index: number) => {
    const updatedAccounts = accounts.filter((_, i) => i !== index);
    setAccounts(updatedAccounts);
    updateAuthState('bankAccounts', updatedAccounts);
  };

  return (
    <div className="w-full max-w-[600px] mx-auto space-y-8">
      <div className="space-y-6">
        <h3 className="text-white/90 text-lg font-medium">YOUR ACCOUNT NAME</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
          <Select
            value={newAccount.bankName}
            onValueChange={value =>
              setNewAccount({ ...newAccount, bankName: value })
            }
          >
            <SelectTrigger className="h-[48px] rounded-full bg-white/5">
              <SelectValue placeholder="Select Bank" />
            </SelectTrigger>
            <SelectContent>
              {banks.map(bank => (
                <SelectItem key={bank} value={bank}>
                  {bank}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="flex gap-2">
            <Input
              placeholder="Account Number"
              value={newAccount.accountNumber}
              onChange={e =>
                setNewAccount({ ...newAccount, accountNumber: e.target.value })
              }
              className="bg-white/5"
            />
            <Button onClick={handleAddAccount} className="rounded-full px-8">
              Add
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-white/90 font-medium">Card Details</h3>
        {accounts.map((account, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10"
          >
            <div className="flex items-center gap-3">
              <Building2 className="text-white/60" />
              <div>
                <p className="text-white font-medium">{account.bankName}</p>
                <p className="text-sm text-white/60">{account.accountNumber}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleDeleteAccount(index)}
              className="text-red-400 hover:text-red-500 hover:bg-red-500/10"
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
