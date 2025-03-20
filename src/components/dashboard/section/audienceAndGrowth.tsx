import { Card } from '@/components/ui/card';
import { CustomTab } from '@/components/ui/custom-tab';
import { DashboardEarnRouteIcon } from '@/assets/svgs/misc';
import {
  DashboardGravityIcon,
  DashboardSolarLockIcon,
  DashboardSolarShopIcon,
} from '@/assets/svgs/dashboardIcons';
import { AudienceGrowthChart } from '@/components/charts/audienceGrowthChart';

const data = [
  { month: 'Jan', followers: 3100, supporters: 2600 },
  { month: 'Feb', followers: 3300, supporters: 2700 },
  { month: 'Mar', followers: 3400, supporters: 2600 },
  { month: 'Apr', followers: 3800, supporters: 3000 },
  { month: 'May', followers: 4200, supporters: 3100 },
  { month: 'Jun', followers: 4300, supporters: 3200 },
  { month: 'Jul', followers: 4800, supporters: 3300 },
  { month: 'Aug', followers: 4600, supporters: 3200 },
  { month: 'Sep', followers: 4500, supporters: 3300 },
  { month: 'Oct', followers: 4900, supporters: 3400 },
  { month: 'Nov', followers: 5100, supporters: 3300 },
  { month: 'Dec', followers: 5500, supporters: 3600 },
];

const tabItems = [
  { 
    value: '3months', 
    label: '3 months',
    content: <AudienceGrowthChart data={data.slice(-3)} />
  },
  { 
    value: '30days', 
    label: '30 days',
    content: <AudienceGrowthChart data={data.slice(-1)} />
  },
  { 
    value: '7days', 
    label: '7 days',
    content: <AudienceGrowthChart data={data.slice(-1)} />
  },
  { 
    value: '24hours', 
    label: '24 hours',
    content: <AudienceGrowthChart data={data.slice(-1)} />
  },
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

const AudienceAndGrowthSection = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
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
