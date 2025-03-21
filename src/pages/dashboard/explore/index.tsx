import { CreatorOverview } from '@/components/dashboard/view/creatorOverview';
import { DashboardLayout } from '@/components/layouts/dashboardLayout';
import ExploreIndex from './components';

const DashboardPage = () => {
  return <div className='bg-[#FBFBFB]'>
     <DashboardLayout noBackground>
     <ExploreIndex/>
  </DashboardLayout>
  </div>;
};

export default DashboardPage;
