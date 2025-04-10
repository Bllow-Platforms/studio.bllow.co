import { SupportersVector, MembershipVector, StoreVector } from '@/assets/svgs';
import AudienceAndGrowthSection from '@/components/dashboard/audience-and-growth';
import TopSupportersAndMembership from '@/components/dashboard/top-supporters-and-membership';
import { DashboardLayout } from '@/components/modules/layouts/dashboard-layout';
import { DonationPanel } from '@/components/modules/panels/donation-panel';
import { StatAndGraphPanel } from '@/components/modules/panels/stat-and-graph-panel';
import { StatPanel } from '@/components/modules/panels/stat-panel';
import { Card } from '@/components/ui/card';

const DashboardPage = () => {
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
      inflatedby: 20,
    },
    {
      title: 'Membership',
      number: 35,
      icon: <MembershipVector />,
      inflatedby: 10,
    },
    {
      title: 'Shops',
      number: 35,
      icon: <StoreVector />,
      inflatedby: 50,
    },
  ];

  return (
    <DashboardLayout>
      <div className=" container w-full min-h-screen bg-[#F8F7FF]/2 p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex flex-col gap-4 w-full lg:w-[174px]">
            <StatPanel
              title={STAT[0].title}
              number={78}
              icon={STAT[0].icon}
              inflatedBy={25}
            />
            <StatPanel
              title={STAT[1].title}
              number={80}
              icon={STAT[1].icon}
              inflatedBy={25}
            />
            <StatPanel
              title={STAT[2].title}
              number={3000}
              icon={STAT[2].icon}
              inflatedBy={25}
            />
          </div>

          <div className="w-full lg:w-[607px]">
            <Card className=" rounded-[30px] border-[0.5px] h-[510px]">
              <StatAndGraphPanel />
            </Card>
          </div>

          <div className="w-full ">
            <Card className=" rounded-[30px] bg-transparent border-0 p-6 shadow-none">
              <h3 className="font-semibold mb-6">Recent Donations</h3>
              <div className="space-y-4 overflow-y-auto max-h-[450px]">
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

        <div className="mt-">
          <AudienceAndGrowthSection />
          <TopSupportersAndMembership />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
