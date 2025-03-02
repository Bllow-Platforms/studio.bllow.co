import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowUpRight, Store, Users, FileText } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { DashboardEarnRouteIcon } from '@/assets/svgs/misc';
import {
  DashboardGravityIcon,
  DashboardSolarLockIcon,
  DashboardSolarShopIcon,
} from '@/assets/svgs/dashboardIcons';
import { CustomTab } from '@/components/ui/custom-tab';

const data = [
  { month: 'Jan', followers: 3200, supporters: 2500 },
  { month: 'Feb', followers: 3300, supporters: 2600 },
  // ... add more months
  { month: 'Dec', followers: 5000, supporters: 3500 },
];

const earningMethods = [
  {
    title: 'Membership',
    description: 'Monthly membership for your loyal fans and supporters',
    icon: <DashboardSolarLockIcon />,
  },
  {
    title: 'Shop',
    description: 'Introducing Shop, the creative way to sell',
    icon: <DashboardSolarShopIcon />,
  },
  {
    title: 'Exclusive Posts',
    description: 'Publish best content exclusively for your supporters and members',
    icon: <DashboardGravityIcon />,
  },
];

const tabItems = [
  { value: '3months', label: '3 months' },
  { value: '30days', label: '30 days' },
  { value: '7days', label: '7 days' },
  { value: '24hours', label: '24 Hours' },
];

const AudienceAndGrowthSection = () => {
  return (
    <div className="flex flex-col lg:flex-row  gap-6">
      <Card className="p-6 rounded-3xl w-full lg:w-[70rem]">
        <h2 className="text-lg font-semibold mb-4">Audience Growth</h2>
        <CustomTab
          items={tabItems}
          defaultValue="7days"
          onChange={value => console.log(value)}
        />
      </Card>

      <div className="space-y-4 w-full lg:w-[34.6rem]">
        <h2 className="text-lg font-semibold">More Ways to Earn</h2>
        {earningMethods.map((method, index) => (
          <Card key={index} className="p-4 rounded-3xl">
            <div className="flex items-center justify-between">
              <div className="flex flex-col  gap-4">
                <div className="flex items-center  gap-2">
                  {method.icon}
                  <h3 className="font-medium text-primary">{method.title}</h3>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">
                    {method.description}
                  </p>
                </div>
              </div>
              <DashboardEarnRouteIcon />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AudienceAndGrowthSection;
