import { FC } from 'react';
import { EarningsChart } from '@/components/charts/earningsChart';


interface IStatAndGraphPanelProps {}
import Avatar from 'boring-avatars';
import { Card } from '@/components/ui/card';
import { Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CustomTab } from '@/components/ui/custom-tab';


const data = [
  { month: 'Jul', value: 0 },
  { month: 'Aug', value: 20000 },
  { month: 'Sep', value: 30000 },
  { month: 'Oct', value: 15000 },
  { month: 'Nov', value: 10000 },
  { month: 'Dec', value: 35000 },
];

export const StatAndGraphPanel: FC<IStatAndGraphPanelProps> = props => {
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
    <Card className="p-6 rounded-3xl h-full max-h-[508px] overflow-hidden">
      <div className="flex flex-col h-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 gap-4">
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

        <div className="flex flex-col flex-1 overflow-hidden">
          <div className="mb-6">
            <p className="text-back mb-3 lg:text-lg">Earnings</p>
            <h3 className="text-3xl lg:text-[2.9rem] font-semibold text-dark100">
              ₦192,983,087
            </h3>
          </div>

          <div className="flex-1 overflow-hidden">
            <CustomTab
              items={tabItems}
              defaultValue="7days"
              onChange={value => console.log(value)}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};


