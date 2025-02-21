import { FC, useEffect } from 'react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Building2 } from 'lucide-react';
import { BankServices } from '@/services/bank.service';
import { useQuery, useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ContinueButton } from '../components/continue-button';
import { useAuthStore } from '@/store/auth.store';
import { Label } from '@/components/ui/label';
import { BankDetailsPreviewCard } from '@/components/misc/bank-details-preview-card';

interface BankAccount {
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  bankCode?: string;
}

interface StepProps {
  onNext: () => void;
  note?: string;
}

export const FinancialSetupStepper: FC<StepProps> = ({ onNext, note }) => {
  const [accounts, setAccounts] = useState<BankAccount[]>([]);
  const [newAccount, setNewAccount] = useState({
    bankName: '',
    accountNumber: '',
    accountHolder: '',
    bankCode: '',
  });
  const updateProfile = useAuthStore(state => state.updateProfile);

  const { data: bankList, isLoading } = useQuery({
    queryKey: ['banks'],
    queryFn: () => BankServices.fetchBankList(),
  });

  console.log(bankList);

  const { mutateAsync: resolveBank, isPending: isResolving } = useMutation({
    mutationFn: async ({
      accountNumber,
      bankCode,
    }: {
      accountNumber: string;
      bankCode: string;
    }) => {
      const bankService = new BankServices();
      return bankService.resolveBank(accountNumber, bankCode);
    },
    onSuccess: response => {
      setNewAccount(prev => ({
        ...prev,
        accountHolder: response.data.account_name,
      }));
    },
    onError: error => {
      toast.error('Could not verify account number');
    },
  });

  const handleAccountNumberChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const accountNumber = e.target.value;
    setNewAccount(prev => ({ ...prev, accountNumber }));

    if (accountNumber.length === 10 && newAccount.bankCode) {
      try {
        await resolveBank({
          accountNumber,
          bankCode: newAccount.bankCode,
        });
      } catch (error) {}
    }
  };

  const handleAddAccount = () => {
    if (
      newAccount.bankName &&
      newAccount.accountNumber &&
      newAccount.accountHolder
    ) {
      setAccounts([...accounts, newAccount]);
      setNewAccount({
        bankName: '',
        accountNumber: '',
        accountHolder: '',
        bankCode: '',
      });
      updateProfile({ bankAccounts: [...accounts, newAccount] });
    }
  };

  const handleDeleteAccount = (index: number) => {
    const updatedAccounts = accounts.filter((_, i) => i !== index);
    setAccounts(updatedAccounts);
    updateProfile({ bankAccounts: updatedAccounts });
  };

  const handleContinue = () => {
    if (accounts.length > 0) {
      onNext();
    }
  };

  return (
    <div className="w-full max-w-[600px] mx-auto space-y-8">
      <div className="space-y-6">
        <h3 className="text-white/90 text-lg font-medium">ADD NEW BANK ACCOUNT</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  items-center">
          <div>
            <Label className="text-gray-400 mb-10">Bank Name</Label>
            <Select
              value={newAccount.bankName}
              onValueChange={bank => {
                const bankData = JSON.parse(bank);
                setNewAccount(prev => ({
                  ...prev,
                  bankName: bankData.name,
                  bankCode: bankData.code,
                }));
              }}
            >
              <SelectTrigger className="h-[48px] rounded-full bg-white/5">
                <SelectValue placeholder="Select Bank" />
              </SelectTrigger>
              <SelectContent>
                {bankList?.map((bank: any) => (
                  <SelectItem
                    key={bank.code}
                    value={JSON.stringify({ name: bank.name, code: bank.code })}
                  >
                    {bank?.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2">
            <Input
              placeholder="Account Number"
              value={newAccount.accountNumber}
              onChange={handleAccountNumberChange}
              maxLength={10}
              label="Account Number"
              className="bg-white/5"
            />
            <Button
              onClick={handleAddAccount}
              className="rounded-full px-8"
              disabled={isResolving || !newAccount.accountHolder}
            >
              Add
            </Button>
          </div>
        </div>

        {isResolving && (
          <p className="text-sm text-green-600">Verifying account...</p>
        )}
        {newAccount.accountHolder && (
          <p className="text-sm text-background font-semibold">
            Account Name: {newAccount?.accountHolder?.toUpperCase()}
          </p>
        )}
      </div>

      {accounts?.map((account, index) => (
        <BankDetailsPreviewCard
          key={index}
          bankName={account.bankName}
          accountNumber={account.accountNumber}
          accountName={account.accountHolder}
          onDelete={() => handleDeleteAccount(index)}
        />
      ))}

      <ContinueButton
        note={note}
        onContinue={handleContinue}
        disabled={accounts.length === 0}
      />
    </div>
  );
};
