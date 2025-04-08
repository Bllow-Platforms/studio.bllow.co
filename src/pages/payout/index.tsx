import { CreatorOverview } from '@/components/dashboard/creator-overview';
import { DashboardLayout } from '@/components/modules/layouts/dashboard-layout';

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <CreatorOverview />
    </DashboardLayout>
  );
};

export default DashboardPage;
