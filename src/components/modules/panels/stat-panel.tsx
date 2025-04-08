import { FC, ReactNode } from 'react';
import { SupportersVector } from '@/assets/svgs';
import { Card } from '@/components/ui/card';
import { DefaultTypography } from '@/components/modules/shared/typography';
import { TiArrowUp } from 'react-icons/ti';

interface IStatPanelProps {
  title?: string;
  number?: number;
  icon: ReactNode;
  inflatedBy?: number;
}

export const StatPanel: FC<IStatPanelProps> = ({
  title,
  number,
  icon,
  inflatedBy,
}) => {
  return (
    <Card className="lg:w-[180px] h-[163px] rounded-[30px] p-5 border-[0.5px]">
      <div className="flex flex-col gap-2.5">
        <div className="w-[35px] h-[33px] rounded-[10px] p-2.5 border-[1px] flex items-center justify-center">
          {icon}
        </div>
        <DefaultTypography className="text-gray-500 text-sm">
          {title}
        </DefaultTypography>
      </div>
      <div className="flex items-center justify-between mt-2.5">
        <h2 className="font-semibold text-2xl lg:text-3xl">{number}</h2>

        <span className="w-[50px] h-[27px] rounded-[100px] p-[5px] border-[0.5px] flex items-center gap-[1px] bg-green-100 border-green-500 text-green-500">
          <TiArrowUp className="h-4 w-4" />
          <h4 className="font-semibold text-sm">%{inflatedBy}</h4>
        </span>
      </div>
    </Card>
  );
};
