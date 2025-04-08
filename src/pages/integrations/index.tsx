import { DashboardPageTitle } from '@/components/dashboard/dashboard-page-title';
import { DashboardLayout } from '@/components/modules/layouts/dashboard-layout';
import { Button } from '@/components/ui/button';
import { INTEGRATIONS } from '@/constants/integrations';

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto">
        <DashboardPageTitle
          info="Here’s an ongoing list of integrations to help you earn more supporters and to better connect with them."
          title="App Integrations"
        />

        <div className="flex my-10 flex-col gap-6">
          {INTEGRATIONS.map((integration, index) => {
            return (
              <div
                className="flex p-4 justify-between items-center bg-white rounded-lg"
                key={index}
              >
                <div className="flex flex-wrap items-center gap-4">
                  <div
                    className="rounded-xl flex justify-center items-center w-24 h-24"
                    style={{
                      backgroundColor: integration.color,
                    }}
                  >
                    <img
                      src={integration.image}
                      className="w-1/2"
                      alt={integration.name}
                    />
                  </div>
                  <div className="">
                    <div className="text-lg font-semibold">{integration.name}</div>
                    <div className="text-md">{integration.info}</div>
                  </div>
                </div>
                <div className="">
                  <Button>Continue</Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
