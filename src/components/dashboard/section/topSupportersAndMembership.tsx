import { Card } from '@/components/ui/card';

import { DonationPanel } from '../view/donationPanel';
import { membersList } from '@/data/static/members';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const timeOptions = [
  { value: '7days', label: 'Last 7 days' },
  { value: '14days', label: 'Last 2 weeks' },
  { value: '30days', label: 'Last 30 days' },
  { value: '3months', label: 'Last 3 months' },
];

const TopSupportersAndMembership = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-4 gap-4">
      <Card className="p-6 rounded-3xl w-full lg:w-[34rem]">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-md font-semibold">Top Supporters</h2>
          <Select defaultValue="7days">
            <SelectTrigger className="w-[140px] text-gray-400 ring-0 rounded-full">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent className="">
              {timeOptions.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          {membersList.map((donation, index) => (
            <DonationPanel
              key={index}
              name={donation.name}
              donationLink={donation.donationLink}
              amount={`$${donation.amount}`}
            />
          ))}
        </div>
      </Card>

      <Card className="space-y-4 w-full lg:w-[50rem] rounded-3xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-md font-semibold">More Ways to Earn</h2>
          <Select defaultValue="7days">
            <SelectTrigger className="w-[140px] text-gray-400 ring-0 rounded-full">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              {timeOptions.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          {membersList.map((donation, index) => (
            <DonationPanel
              key={index}
              name={donation.name}
              donationLink={donation.donationLink}
              commodity={donation.commodity}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default TopSupportersAndMembership;
