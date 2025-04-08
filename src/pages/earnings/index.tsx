import { DashboardPageTitle } from '@/components/dashboard/dashboard-page-title';
import { DashboardLayout } from '@/components/modules/layouts/dashboard-layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { DEFAULT_CARD_RESTYLE } from '@/constants';
import { Settings } from 'lucide-react';

const DashboardPage = () => {
  return (
    <DashboardLayout noBackground>
      <div className="lg:w-[750px]  mx-auto px-6">
        <DashboardPageTitle title="Earnings" showTabs={false} />

        <Card
          className={`${DEFAULT_CARD_RESTYLE} flex items-center justify-between py-8 `}
        >
          <div>
            <h3 className="text-muted-gray100 text-sm font-semibold">
              OUTSTANDING BALANCE
            </h3>
            <h3 className="text-black font-semibold text-2xl">$0</h3>
          </div>

          <div className="items-center flex  gap-2">
            <Button className="bg-black">Withdraw</Button>

            <div className="w-fit cursor-pointer h-fit rounded-full p-2 border-[1px] border-black">
              <Settings />
            </div>
          </div>
        </Card>

        <Card className={DEFAULT_CARD_RESTYLE}>
          <h3 className="text-md font-semibold">Payout history</h3>

          <div className="space-y-4 text-center">
            <h2 className="text-7xl ">📦</h2>
            <p className="mt-2 text-md text-muted-gray100">No Histories yet</p>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
