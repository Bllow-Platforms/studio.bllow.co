import { FC } from 'react';
interface IStatAndGraphPanelProps {}
import Avatar from 'boring-avatars';
import { Card } from '@/components/ui/card';
import { Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LineChart } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const StatAndGraphPanel: FC<IStatAndGraphPanelProps> = props => {
  return (
    <Card className="p-6 rounded-3xl">
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

        <Tabs defaultValue="3months" className="w-full">
          <TabsList className="grid bg-transparent w-full grid-cols-2 lg:grid-cols-6 gap-2">
            {[
              { value: '3months', label: '3 months' },
              { value: '30days', label: '30 days' },
              { value: '7days', label: '7 days', className: 'text-primary' },
              { value: '24hours', label: '24 hours' },
              { value: 'pageviews', label: 'Page Views' },
              { value: 'donations', label: 'Donations' },
            ].map(tab => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className={`${tab.className}  bg-transparent `}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="3months">
            <div className="h-[300px] w-full">
              <LineChart
                data={[
                  { x: 'Jul', y: 0 },
                  { x: 'Aug', y: 20000 },
                  { x: 'Sep', y: 30000 },
                  { x: 'Oct', y: 15000 },
                  { x: 'Nov', y: 10000 },
                  { x: 'Dec', y: 35000 },
                ]}
              />
            </div>
          </TabsContent>
          <TabsContent value="30days"></TabsContent>
          <TabsContent value="7days"></TabsContent>
          <TabsContent value="24hours"></TabsContent>
          <TabsContent value="pageviews"></TabsContent>
          <TabsContent value="donations"></TabsContent>
        </Tabs>
      </div>
    </Card>
  );
};
