import { DashboardPageTitle } from '@/components/partials/dashboardPageTitle';
import SettingsView from '../views/settingsView';
import NotificationView from '../views/notificationViewPage';

const ViewSettingsPage = () => {
  const TABS = [
    {
      label: 'settings',
      value: 'settings',
      content: <SettingsView />,
    },
    {
      label: 'Notification',
      value: 'Notification',
      content: <NotificationView />,
    },
  ];
  return (
    <div className="lg:w-[750px]  mx-auto px-6">
      <DashboardPageTitle
        title="Trending creators this week"
        showTabs
        tabs={TABS}
      />
    </div>
  );
};

export default ViewSettingsPage;
