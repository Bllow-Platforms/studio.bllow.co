import { FC, useState } from 'react';
import { SecondaryLogo } from '../../../public/svgs/logo';
import Avatar from 'boring-avatars';
import { DashboardNotificationIcon, DashboardSettingsIcon } from '@/assets/svgs';
import { Menu } from 'lucide-react';
import { DashboardNav } from '@/components/dashboard/nav/dashboardNav';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface IDashboardHeaderProps {}

export const DashboardHeader: FC<IDashboardHeaderProps> = props => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" container mx-auto flex items-center justify-between py-4 px-4">
      <div className="flex items-center gap-4 ">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Menu className="h-6 w-6 block md:hidden cursor-pointer" />
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] p-0">
            <div className="flex flex-col py-6 px-4 mt-[2em]">
              <DashboardNav
                className="flex-col !bg-transparent !shadow-none !p-0 gap-2"
                isMobile
              />
            </div>
          </SheetContent>
        </Sheet>
        <SecondaryLogo />
      </div>

      <div className="hidden md:block">
        <DashboardNav className="mx-auto" />
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center  gap-[10px]">
          <div className="bg-white w-[34px] h-[34px] rounded-[50px] p-[10px] flex items-center justify-center">
            <DashboardNotificationIcon />
          </div>
          <div className="bg-white w-[34px] h-[34px] rounded-[50px] p-[10px] flex items-center justify-center">
            <DashboardSettingsIcon />
          </div>
        </div>
        <Avatar name="Alice Paul" width={40} cursor={'pointer'} />
      </div>
    </div>
  );
};
