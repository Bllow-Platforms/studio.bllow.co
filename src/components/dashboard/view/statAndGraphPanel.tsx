import { FC } from 'react';
interface IStatAndGraphPanelProps {}
import Avatar from 'boring-avatars';
import { Card } from '@/components/ui/card';
import { Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CustomTab } from '@/components/ui/custom-tab';

export const StatAndGraphPanel: FC<IStatAndGraphPanelProps> = props => {
  const tabItems = [
    { value: '3months', label: '3 months' },
    { value: '30days', label: '30 days' },
    { value: '7days', label: '7 days' },
    { value: '24hours', label: '24 Hours' },
  ];

  return (
    <Card className="p-6 rounded-3xl h-full">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-4">
          <Avatar name="Obi" className="w-[60px] h-[60px] rounded-xl" square />
          <div>
            <h2 className="text-lg font-semibold">
              Hi, Creator Fullstack Mechanic
            </h2>
            <p className="text-muted-foreground text-sm">
              blow.create/fullstackmechanic
            </p>
          </div>
        </div>
        <Button className="gap-2 whitespace-nowrap">
          <Share2 className="h-4 w-4" />
          Share page
        </Button>
      </div>

      <div className="space-y-6">
        <div>
          <p className="text-back mb-3 lg:text-lg"> Earnings</p>
          <h3 className="text-3xl lg:text-[2.9rem] font-semibold text-dark100">
            ₦192,983,087
          </h3>
        </div>

        <div className="mt-4">
          <CustomTab
            items={tabItems}
            defaultValue="7days"
            onChange={value => console.log(value)}
          />
        </div>
      </div>
    </Card>
  );
};
