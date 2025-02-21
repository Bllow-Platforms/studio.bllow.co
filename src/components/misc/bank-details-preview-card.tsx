import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { BankIcon } from '@/assets/svgs';

interface IBankDetailsPreviewCardProps {
  bankName: string;
  accountNumber: string;
  accountName: string;
  onDelete?: () => void;
}

export const BankDetailsPreviewCard: FC<IBankDetailsPreviewCardProps> = ({
  bankName,
  accountNumber,
  accountName,
  onDelete,
}) => {
  return (
    <div className="border-[1px] w-full lg:w-[400px] p-6 border-gray-200 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <BankIcon />
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-700">{accountName}</p>
            <div className="flex flex-col gap-1 text-sm text-gray-500">
              <span>{bankName}</span>
              <span>{accountNumber}</span>
            </div>
          </div>
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={onDelete}
          className="bg-transparent w-[80px] border-gray-500 border-[1px] text-gray-600"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
