import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight, Store, Users, FileText } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { DashboardEarnRouteIcon } from "@/assets/svgs/misc";
import { DashboardGravityIcon, DashboardSolarLockIcon, DashboardSolarShopIcon } from "@/assets/svgs/dashboardIcons";

const data = [
  { month: 'Jan', followers: 3200, supporters: 2500 },
  { month: 'Feb', followers: 3300, supporters: 2600 },
  // ... add more months
  { month: 'Dec', followers: 5000, supporters: 3500 },
];

const earningMethods = [
  {
    title: "Membership",
    description: "Monthly membership for your loyal fans and supporters",
    icon: <DashboardSolarLockIcon/>
  },
  {
    title: "Shop",
    description: "Introducing Shop, the creative way to sell",
    icon: <DashboardSolarShopIcon/>,
  },
  {
    title: "Exclusive Posts",
    description: "Publish best content exclusively for your supporters and members",
    icon: <DashboardGravityIcon/>,
  },
];

const AudienceAndGrowthSection = () => {
  return (
    <div className="flex flex-col lg:flex-row  gap-6">
      <Card className="p-6 rounded-3xl w-full lg:w-[70rem]">
        <h2 className="text-lg font-semibold mb-4">Audience Growth</h2>
        <Tabs defaultValue="3months" className="w-full">
          <TabsList>
            <TabsTrigger value="3months">3 months</TabsTrigger>
            <TabsTrigger value="30days">30 days</TabsTrigger>
            <TabsTrigger value="7days">7 days</TabsTrigger>
            <TabsTrigger value="24hours">24 Hours</TabsTrigger>
          </TabsList>
          <TabsContent value="3months">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <XAxis dataKey="month" stroke="#888888" />
                  <YAxis stroke="#888888" />
                  <Line
                    type="monotone"
                    dataKey="followers"
                    stroke="#8884d8"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="supporters"
                    stroke="#000000"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </Card>

      <div className="space-y-4 w-full lg:w-[34.6rem]">
        <h2 className="text-lg font-semibold">More Ways to Earn</h2>
        {earningMethods.map((method, index) => (
          <Card key={index} className="p-4 rounded-3xl">
            <div className="flex items-center justify-between">
              <div className="flex flex-col  gap-4">
                <div className="flex items-center gap-2">
                 {method.icon}
                 <h3 className="font-medium text-primary">{method.title}</h3>
                </div>
                <div>
                 
                  <p className="text-xs text-muted-foreground">
                    {method.description}
                  </p>
                </div>
              </div>
              <DashboardEarnRouteIcon/>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AudienceAndGrowthSection;