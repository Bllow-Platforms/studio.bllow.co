import { FC } from 'react';
import Avatar from 'boring-avatars';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DefaultTypography } from '@/components/typography';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';

interface IDonationPanelProps {
  name: string;
  donationLink: string;
  amount: number;
  time: string;
}

export const DonationPanel: FC<IDonationPanelProps> = ({
  name,
  time,
  donationLink,
  amount,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Avatar name="Obi" className="w-[60px] h-[60px] rounded-2xl" square />
        <div>
          <DefaultTypography variant="h4" className="font-semibold text-md">
            {name}
          </DefaultTypography>
          <p className="text-xs text-muted-foreground">{donationLink}</p>
        </div>
      </div>
      <p className="font-semibold text-primary text-sm">{amount}</p>
      <p className=" text-muted-foreground text-xs">{time}</p>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <MoreHorizontal className="h-4 w-4 cursor-pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>View Details</DropdownMenuItem>
          <DropdownMenuItem>Copy Link</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
