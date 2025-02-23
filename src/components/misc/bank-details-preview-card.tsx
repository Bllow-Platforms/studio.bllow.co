import { FC } from 'react';
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
    <div className="border-[1px] w-full  px-4  py-3 border-gray-200 rounded-2xl bg-white/5 hover:bg-white/10 transition-all">
      <div className="flex  items-center justify-between">
        <div className="flex items-center gap-2">
          <BankIcon />
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-700">{bankName}</p>
            <div className="flex flex-col gap-1 text-sm text-gray-500">
              <span className="text-[11px]">
                {accountNumber} - {accountName}
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={onDelete}
          className="bg-transparent rounded-full 
           shadow-lg
           py-[10px] text-xs w-[80px] border-[#C0C0C0] border-[1px] text-gray-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
