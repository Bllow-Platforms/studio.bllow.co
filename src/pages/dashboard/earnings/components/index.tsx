import { DashboardPageTitle } from '@/components/partials/dashboardPageTitle';
import { Card } from '@/components/ui/card';
import { DEFAULT_CARD_RESTYLE } from '@/constants';

const ViewSettingsPage = () => {

  return (
    <div className="lg:w-[750px]  mx-auto px-6">
      <DashboardPageTitle
        title="Earnings"
        showTabs={false}
        
      />

      <Card className={DEFAULT_CARD_RESTYLE}>
        <div className="text-center">
          Commings soon
        </div>
      </Card>
    </div>
  );
};

export default ViewSettingsPage;
