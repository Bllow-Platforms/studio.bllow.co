import { CreatorOverview } from '@/components/dashboard/view/creatorOverview';
import { DashboardLayout } from '@/components/layouts/dashboardLayout';

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <CreatorOverview />
    </DashboardLayout>
  );
};

export default DashboardPage;
