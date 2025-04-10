import { DashboardPageTitle } from '@/components/dashboard/dashboard-page-title';
import { DashboardLayout } from '@/components/modules/layouts/dashboard-layout';
import Image from 'next/image';

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto">
        <DashboardPageTitle title="Memberships" />
        <div className="my-5 bg-white rounded-xl shadow-sm mx-auto px-8">
          {/* Membership Banner */}
          <div className="p-12 mb-12">
            <div className="text-center mb-2">
              <h2 className="text-2xl font-bold">Enable membership</h2>
              <p className="text-gray-500 text-sm">HIGHLY RECOMMENDED</p>
            </div>
            <div className="flex justify-center mt-4">
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-full flex items-center">
                Enable Membership
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Earn Recurring Income Section */}
          <div className="flex flex-col p-12 md:flex-row gap-8 mb-16">
            <div className="md:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Earn recurring income</h2>
              <p className="text-gray-600 mb-4">
                Memberships are a great way to build recurring revenue, create
                engagement, and build deep and meaningful relationships with your
                fans. Start earning monthly/yearly upfront payments doing what you
                love!
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/memberships/earn.png"
                alt="Earn recurring income"
                width={500}
                height={300}
              />
            </div>
          </div>

          {/* Share Exclusives Section */}
          <div className="flex flex-col p-12 md:flex-row-reverse gap-8 mb-16">
            <div className="md:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Share exclusives</h2>
              <p className="text-gray-600 mb-4">
                Share exclusive posts, messages or other rewards with your members.
                Creators also turn on membership without rewards, only to accept
                monthly support.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/memberships/share.png"
                alt="Share exclusives"
                width={500}
                height={300}
              />
            </div>
          </div>

          {/* Sustainable Income Section */}
          <div className="bg-white rounded-xl shadow-sm p-12 mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">
                  Discover how to make a sustainable income with Memberships.
                </h2>
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full mt-4">
                  Watch Video
                </button>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/memberships/income.png"
                  alt="Sustainable income"
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
