import { Card } from '@/components/ui/card';
import Avatar from 'boring-avatars';
import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';
import { LineChart } from '@/components/ui/line-chart';
import { MembershipVector, StoreVector, SupportersVector } from '@/assets/svgs';
import { StatPanel } from './statPanel';
import { DonationPanel } from './donationPanel';
import { StatAndGraphPanel } from './statAndGraphPanel';
import AudienceAndGrowthSection from '../section/audienceAndGrowth';

interface DonationItem {
  avatar: string;
  name: string;
  amount: string;
  time: string;
  link: string;
}

export const CreatorOverview = () => {
  const recentDonations = [
    {
      name: 'Arlene McCoy',
      donationLink: 'blow.create/fullstack...',
      amount: 200,
      time: '30 Secs Ago',
    },
    {
      name: 'Jenny Wilson',
      donationLink: 'blow.create/fullstack...',
      amount: 200,
      time: '30 Secs Ago',
    },
    {
      name: 'Jerome Bell',
      donationLink: 'blow.create/fullstack...',
      amount: 200,
      time: '30 Secs Ago',
    },
    {
      name: 'Jenny Wilson',
      donationLink: 'blow.create/fullstack...',
      amount: 200,
      time: '30 Secs Ago',
    },
    {
      name: 'Jerome Bell',
      donationLink: 'blow.create/fullstack...',
      amount: 200,
      time: '30 Secs Ago',
    },
    {
      name: 'Arlene McCoy',
      donationLink: 'blow.create/fullstack...',
      amount: 200,
      time: '30 Secs Ago',
    },
  ];

  const STAT = [
    {
      title: 'Supporters',
      number: 35,
      icon: <SupportersVector />,
    },
    {
      title: 'Membership',
      number: 35,
      icon: <MembershipVector />,
    },
    {
      title: 'Shops',
      number: 35,
      icon: <StoreVector />,
    },
  ];

  return (
    <div className="w-full p-4 flex flex-col gap-5">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-4 justify-between">
          {STAT.map((items, index) => {
            return (
              <StatPanel
                key={index}
                title={items.title}
                number={items.number}
                icon={items.icon}
              />
            );
          })}
        </div>

        <div className="lg:col-span-6">
          <StatAndGraphPanel />
        </div>

        <div className="lg:col-span-4">
          <Card className="p-6 rounded-3xl h-full border-none bg-transparent">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold">Recent Donations</h3>
            </div>
            <div className="space-y-4">
              {recentDonations.map((donation, index) => (
                <DonationPanel
                  key={index}
                  name={donation.name}
                  donationLink={donation.donationLink}
                  amount={donation.amount}
                  time={donation.time}
                />
              ))}
            </div>
          </Card>
        </div>
      </div>

      <AudienceAndGrowthSection/>
    </div>
  );
};
