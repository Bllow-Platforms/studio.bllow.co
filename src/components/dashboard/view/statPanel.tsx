import { FC, ReactNode } from 'react';
import { SupportersVector } from '@/assets/svgs';
import { Card } from '@/components/ui/card';
import { DefaultTypography } from '@/components/typography';
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
    <Card className="h-[183px] rounded-3xl p-4">
      <div className="space-y-2">
        <div className="border-[1px] w-fit h-fit rounded-xl p-2">{icon}</div>
        <DefaultTypography className="text-gray-500 text-sm">
          {title}
        </DefaultTypography>
      </div>
      <div className="flex items-center justify-between mt-4">
        <h2 className="font-semibold text-3xl">{number}</h2>

        <span
          className="rounded-3xl bg-green-100 px-2  h-[27px] flex items-center
          border-[1px] border-green-500 text-green-500"
        >
          <TiArrowUp />
          <h4 className=" font-semibold text-sm flex"> % {inflatedBy}</h4>
        </span>
      </div>
    </Card>
  );
};
