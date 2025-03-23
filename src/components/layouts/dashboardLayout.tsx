import { FC } from 'react';
import { DashboardHeader } from '../header/dashboardHeader';

interface IDashboardLayoutProps {
  children: React.ReactNode;
  isThickGradient?: boolean;
  noBackground?: boolean;
}

export const DashboardLayout: FC<IDashboardLayoutProps> = ({
  children,
  isThickGradient = false,
  noBackground = false,
}) => {
  const backgroundStyle = noBackground
    ? {
        className: 'bg-[#FBFBFB]',
      }
    : isThickGradient
      ? {
          background:
            'linear-gradient(to right, rgba(99, 85, 255, 0.1), rgb(255, 255, 255), rgba(255, 59, 48, 0.5))',
        }
      : { className: 'bg-gradient-to-b from-white to-[#CDC9FF]' };

  return (
    <div
      className={`h-screen overflow-auto ${!isThickGradient ? backgroundStyle.className : ''}`}
      style={isThickGradient ? backgroundStyle : {}}
    >
      <div className="">
        <DashboardHeader />
        <div className="my-5">{children}</div>
      </div>
    </div>
  );
};
