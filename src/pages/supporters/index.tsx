import { DashboardPageTitle } from '@/components/dashboard/dashboard-page-title';
import { DashboardLayout } from '@/components/modules/layouts/dashboard-layout';
import OneTimeTab from '@/components/modules/tabs/supporters-tabs/one-time-tab';
import SupportersSettingsTab from '@/components/modules/tabs/supporters-tabs/supporters-settings-tab';

const DashboardPage = () => {
  const TABS = [
    { label: 'One time', value: 'one-time', content: <OneTimeTab /> },
    { label: 'Settings', value: 'settings', content: <SupportersSettingsTab /> },
  ];
  return (
    <DashboardLayout>
      <div className="container mx-auto">
        <DashboardPageTitle title="Supporters" showTabs tabs={TABS} />
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
