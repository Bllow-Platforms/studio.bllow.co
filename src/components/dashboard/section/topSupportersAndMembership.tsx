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
import { DonationPanel } from '../view/donationPanel';
import { membersList } from '@/data/static/members';
const data = [
  { month: 'Jan', followers: 3200, supporters: 2500 },
  { month: 'Feb', followers: 3300, supporters: 2600 },
  { month: 'Dec', followers: 5000, supporters: 3500 },
];

interface SupporterItem {
  name: string;
  link: string;
  amount?: string;
  membership?: string;
}

const TopSupportersAndMembership = () => {
  const supporters: SupporterItem[] = [
    {
      name: 'Arlene McCoy',
      link: 'blow.create/fullstack...',
      amount: '₦10,000',
    },
    {
      name: 'Jenny Wilson',
      link: 'blow.create/fullstack...',
      amount: '₦4,000',
    },
    {
      name: 'Jerome Bell',
      link: 'blow.create/fullstack...',
      amount: '₦2671',
    },
    {
      name: 'Jerome Bell',
      link: 'blow.create/fullstack...',
      amount: '₦2123',
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row  gap-6">
      <Card className="p-6 rounded-3xl w-full lg:w-[34rem]">
        <h2 className="text-lg font-semibold mb-4">Top Supporters</h2>

        <div className="space-y-3">
          {membersList.map((donation, index) => (
            <DonationPanel
              key={index}
              name={donation.name}
              donationLink={donation.donationLink}
              amount={`$${donation.amount}`}
            />
          ))}
        </div>
      </Card>

      <Card className="space-y-4 w-full lg:w-[50rem] rounded-3xl p-6">
        <h2 className="text-lg font-semibold">More Ways to Earn</h2>

        <div className="space-y-3">
          {membersList.map((donation, index) => (
            <DonationPanel
              key={index}
              name={donation.name}
              donationLink={donation.donationLink}
              commodity={donation.commodity}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default TopSupportersAndMembership;
