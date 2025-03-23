import { CreatorOverview } from '@/components/dashboard/view/creatorOverview';
import { DashboardLayout } from '@/components/layouts/dashboardLayout';
import ViewSettingsPage from './components';

const DashboardPage = () => {
  return (
    <DashboardLayout noBackground>
      <ViewSettingsPage />
    </DashboardLayout>
  );
};

export default DashboardPage;
