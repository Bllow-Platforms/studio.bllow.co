import { DashboardLayout } from '@/components/modules/layouts/dashboard-layout';
import ExploreTab from '@/components/modules/tabs/explore-tabs/explore-tab';
import FollowingTab from '@/components/modules/tabs/explore-tabs/following-tab';
import { CustomTab } from '@/components/ui/custom-tab';

const DashboardPage = () => {
  const TABITEMS = [
    {
      label: 'Explore',
      value: 'Explore',
      content: <ExploreTab />,
    },
    {
      label: 'Following',
      value: 'Following',
      content: <FollowingTab />,
    },
  ];

  return (
    <div className="bg-[#FBFBFB]">
      <DashboardLayout noBackground>
        <div className=" lg:w-[900px] mx-auto">
          <CustomTab items={TABITEMS} />
        </div>
      </DashboardLayout>
    </div>
  );
};

export default DashboardPage;
