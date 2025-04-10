import { DashboardLayout } from '@/components/modules/layouts/dashboard-layout';
import { DashboardPageTitle } from '@/components/dashboard/dashboard-page-title';

import SettingsTab from '@/components/modules/tabs/settings-tabs/setting-tab';
import NotificationTab from '@/components/modules/tabs/settings-tabs/notification-tab';

const DashboardPage = () => {
  const TABS = [
    {
      label: 'settings',
      value: 'settings',
      content: <SettingsTab />,
    },
    {
      label: 'Notification',
      value: 'Notification',
      content: <NotificationTab />,
    },
  ];
  return (
    <DashboardLayout noBackground>
      <div className="lg:w-[750px]  mx-auto px-6">
        <DashboardPageTitle
          title="Trending creators this week"
          showTabs
          tabs={TABS}
        />
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
