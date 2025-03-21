import { DashboardLayout } from '@/components/layouts/dashboardLayout';
import IndexViewPage from './component';

const DashboardPage = () => {
  return (
    <DashboardLayout isThickGradient>
      <div className="bg-white h-screen mt-[8em] px-4">
        <IndexViewPage />
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
