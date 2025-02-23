import { FC } from 'react';
import { SecondaryLogo } from '../../../public/svgs/logo';
import Avatar from 'boring-avatars';
import { DashboardSettingsIcon } from '@/assets/svgs';
import DASHBOARDNAVDATA from '@/data/dashboardNavData';

interface IDashboardHeaderProps {}

export const DashboardHeader: FC<IDashboardHeaderProps> = props => {
  return (
    <div className="flex  items-center justify-between  py-4">
      <div>
        <SecondaryLogo />
      </div>

      {/* <div className="flex items-center gap-10">
        {DASHBOARDNAVDATA.map((data, index) => {
          return <div>{data.icon}</div>;
        })}
      </div> */}

      <div className=" flex items-center gap-2">
        <DashboardSettingsIcon />
        <Avatar name="Alice Paul" width={40} cursor={'pointer'} />
      </div>
    </div>
  );
};
