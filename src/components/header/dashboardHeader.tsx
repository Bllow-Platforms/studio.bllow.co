import { FC, useState } from 'react';
import { SecondaryLogo } from '../../../public/svgs/logo';
import Avatar from 'boring-avatars';
import { DashboardNotificationIcon, DashboardSettingsIcon } from '@/assets/svgs';
import { Menu, Eye, LayoutGrid, User, UserPlus, Zap, LogOut } from 'lucide-react';
import { DashboardNav } from '@/components/dashboard/nav/dashboardNav';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from 'next/link';

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
        <div className="flex items-center gap-[10px]">
          <div className="bg-white w-[34px] h-[34px] rounded-[50px] p-[10px] flex items-center justify-center">
            <DashboardNotificationIcon />
          </div>
          <div className="bg-white w-[34px] h-[34px] rounded-[50px] p-[10px] flex items-center justify-center">
            <DashboardSettingsIcon />
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="cursor-pointer">
              <Avatar name="Alice Paul" width={40} />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            {/* <DropdownMenuItem asChild>
              <Link href="/dashboard/view-page" className="flex items-center gap-2">
                <Eye className="w-4 h-4" /> View My Page
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/dashboard" className="flex items-center gap-2">
                <LayoutGrid className="w-4 h-4" /> Dashboard
              </Link>
            </DropdownMenuItem> */}
            {/* <DropdownMenuItem asChild>
              <Link href="/dashboard/account" className="flex items-center gap-2">
                <User className="w-4 h-4" /> My Account
              </Link>
            </DropdownMenuItem> */}
            <DropdownMenuItem asChild>
              <Link href="/dashboard/refer" className="flex items-center gap-2">
                <UserPlus className="w-4 h-4" /> Refer a creator
              </Link>
            </DropdownMenuItem>
            {/* <DropdownMenuItem asChild>
              <Link href="/dashboard/whats-new" className="flex items-center gap-2">
                <Zap className="w-4 h-4" /> 
                <div className="flex items-center gap-2">
                  What's New
                  <span className="bg-primary text-white text-xs px-1.5 py-0.5 rounded">NEW</span>
                </div>
              </Link>
            </DropdownMenuItem> */}
            <DropdownMenuItem className="text-red-600 focus:text-red-600 focus:bg-red-100">
              <div className="flex items-center gap-2">
                <LogOut className="w-4 h-4" /> Log Out
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
