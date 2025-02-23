import { FC } from 'react';
import { DashboardHeader } from '../header/dashboardHeader';
interface IDashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: FC<IDashboardLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen overflow-auto bg-gradient-to-b from-white to-[#CDC9FF]">
      <div className="lg:w-[90%] px-4 mx-auto">
        <DashboardHeader />
        <div className="my-5">{children}</div>
      </div>
    </div>
  );
};
