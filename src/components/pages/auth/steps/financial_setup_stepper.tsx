import { FC } from 'react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
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
import { BankDetailsPreviewCard } from '@/components/misc/bank-details-preview-card';
import { BankServices } from '@/services/bank.service';

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

  const { data: bankList, isPending } = useQuery({
    queryKey: ['banks'],
    queryFn: () => BankServices.fetchBankList(),
  });

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

    if (accountNumber.length === 10 && newAccount?.bankCode) {
      try {
        await resolveBank({
          accountNumber,
          bankCode: newAccount?.bankCode,
        });
      } catch (error) {}
    }
  };

  const handleAddAccount = () => {
    if (
      newAccount?.bankName &&
      newAccount?.accountNumber &&
      newAccount?.accountHolder
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

  const { mutateAsync: addBank, isPending: isAddingBank } = useMutation({
    mutationFn: async (data: IAddBankProps) => {
      return BankServices.addBank(data);
    },
    onSuccess: () => {
      toast.success('Bank accounts added successfully');
      onNext();
    },
    onError: error => {
      toast.error('Failed to add bank accounts');
    },
  });

  const handleContinue = async () => {
    if (accounts.length === 0) {
      toast.error('Please add a bank account');
      return;
    }

    try {
      const account = accounts[0];
      await addBank({
        bankName: account?.bankName,
        bankCode: account?.bankCode || '',
        accountName: account?.accountHolder,
        accountNumber: account?.accountNumber,
      });
    } catch (error) {
      console.error('Error adding bank:', error);
      toast.error('Failed to add bank account');
    }
  };

  const [searchQuery, setSearchQuery] = useState('');

  const filteredBanks = bankList?.filter((bank: any) =>
    bank.name.toLowerCase().includes(searchQuery?.toLowerCase())
  );

  return (
    <div className="w-full max-w-[600px] mx-auto space-y-8">
      <div className="space-y-6">
        <h3 className="text-white/90 text-lg font-medium">ADD NEW BANK ACCOUNT</h3>

        <div className=" flex gap-4  items-center">
          <div className="w-full">
            <label className="text-gray-400 text-sm font-500  mb-[20px]">
              Bank Name
            </label>
            <div className="mt-2">
              <Select
                value={
                  newAccount?.bankName
                    ? JSON.stringify({
                        name: newAccount.bankName,
                        code: newAccount.bankCode,
                      })
                    : ''
                }
                onValueChange={bank => {
                  const bankData = JSON.parse(bank);
                  setNewAccount(prev => ({
                    ...prev,
                    bankName: bankData?.name,
                    bankCode: bankData?.code,
                  }));
                }}
              >
                <SelectTrigger className="h-[48px] rounded-full bg-white/5">
                  <SelectValue placeholder="Select Bank" />
                </SelectTrigger>
                <SelectContent>
                  <div className="px-3 py-2">
                    <Input
                      placeholder="Search banks..."
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      className="bg-white/5 mb-2"
                    />
                  </div>
                  {filteredBanks?.map((bank: any) => (
                    <SelectItem
                      key={bank?.code}
                      value={JSON.stringify({ name: bank.name, code: bank.code })}
                    >
                      {bank?.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="w-full">
            <Input
              placeholder="Account Number"
              value={newAccount?.accountNumber}
              onChange={handleAccountNumberChange}
              maxLength={10}
              label="Account Number"
              className="bg-white/5"
            />
          </div>

          <div className="hidden lg:block">
            <Button
              onClick={handleAddAccount}
              className="rounded-full px-8 lg:mt-6"
              disabled={isResolving || !newAccount?.accountHolder}
            >
              Add
            </Button>
          </div>
        </div>

        <div className="block lg:hidden">
          <Button
            onClick={handleAddAccount}
            className="rounded-full px-8 lg:mt-6"
            disabled={isResolving || !newAccount?.accountHolder}
          >
            Add
          </Button>
        </div>

        {isResolving && (
          <p className="text-sm text-green-600">Verifying account?...</p>
        )}
        {newAccount?.accountHolder && (
          <p className="text-sm text-background font-semibold">
            Account Name: {newAccount?.accountHolder?.toUpperCase()}
          </p>
        )}
      </div>

      <div>
        {accounts.length >= 1 && (
          <h3 className="text-gray-400 text-sm mb-2 font-semibold">Accounts</h3>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {accounts?.map((account, index) => (
            <BankDetailsPreviewCard
              key={index}
              bankName={account?.bankName}
              accountNumber={account?.accountNumber}
              accountName={account?.accountHolder}
              onDelete={() => handleDeleteAccount(index)}
            />
          ))}
        </div>
      </div>

      <ContinueButton
        note={note}
        onContinue={handleContinue}
        loading={isAddingBank}
        disabled={accounts.length === 0 || isAddingBank}
      />
    </div>
  );
};
