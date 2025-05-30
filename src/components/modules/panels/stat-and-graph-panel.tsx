import { FC } from 'react';
import { EarningsChart } from '@/components/modules/charts/earnings-chart';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Copy, QrCode, Share2, Twitter, Facebook } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface IStatAndGraphPanelProps {}
import Avatar from 'boring-avatars';
import { Card } from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import { CustomTab } from '@/components/ui/custom-tab';
import { DefaultTypography } from '@/components/modules/shared/typography';

const data = [
  { month: 'Jul', value: 0 },
  { month: 'Aug', value: 20000 },
  { month: 'Sep', value: 30000 },
  { month: 'Oct', value: 15000 },
  { month: 'Nov', value: 10000 },
  { month: 'Dec', value: 35000 },
];

const shareOptions = [
  { icon: Copy, label: 'Copy', onClick: (handleCopy: () => void) => handleCopy() },
  {
    icon: QrCode,
    label: 'Get my QR code',
    onClick: (ev: any, setIsShareOpen: (open: boolean) => void) =>
      setIsShareOpen(true),
  },
  { icon: Twitter, label: 'Tweet' },
  { icon: Facebook, label: 'Share' },
];

export const StatAndGraphPanel: FC<IStatAndGraphPanelProps> = props => {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('blow.create/obiabo');
  };

  const tabItems = [
    {
      value: '3months',
      label: '3 months',
      content: <EarningsChart data={data} />,
    },
    {
      value: '30days',
      label: '30 days',
      content: <EarningsChart data={data} />,
    },
    {
      value: '7days',
      label: '7 days',
      content: <EarningsChart data={data} />,
    },
    {
      value: '24hours',
      label: '24 hours',
      content: <div>No Data</div>,
    },
    {
      value: 'pageviews',
      label: 'Page Views',
      content: <div>No Data</div>,
    },
    {
      value: 'donations',
      label: 'Donations',
      content: <div>No Data</div>,
    },
  ];

  return (
    <>
      <div className="p-[30px] h-[510px] overflow-hidden">
        <div className="flex flex-col h-full ">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Avatar name="Obi" className="w-[60px] h-[60px] rounded-xl" square />
              <div>
                <h2 className="text-lg font-semibold">Hi, Obiabo</h2>
                <p className="text-muted-foreground text-sm">blow.create/obiabo</p>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="gap-2">
                  <Share2 className="h-4 w-4" />
                  Share page
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {shareOptions.map(option => (
                  <DropdownMenuItem
                    className="curosr-pointer"
                    key={option.label}
                    onClick={() => option.onClick?.(handleCopy, setIsShareOpen)}
                  >
                    <option.icon className="h-4 w-4 mr-2" />
                    {option.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="mb-6">
            <p className="text-gray-600 mb-2">Earnings</p>
            <h3 className="text-[1.9rem] font-semibold">₦192,983,087</h3>
          </div>

          <div className="flex-1">
            <CustomTab
              items={tabItems}
              defaultValue="7days"
              onChange={value => console.log(value)}
            />
          </div>
        </div>
      </div>

      <Dialog open={isShareOpen} onOpenChange={setIsShareOpen}>
        <DialogContent>
          {/* <DialogHeader>
            <DialogTitle>Share your page</DialogTitle>
          </DialogHeader> */}
          <div className="flex items-center flex-col gap-4">
            <DefaultTypography className="font-semibold">
              Download QR Code
            </DefaultTypography>

            <DefaultTypography className="text-sm">
              Generate a custom QR code for your page and give your supporters a
              quick and touch free checkout option
            </DefaultTypography>

            <div></div>

            <Button variant={'outline'}>Download</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
