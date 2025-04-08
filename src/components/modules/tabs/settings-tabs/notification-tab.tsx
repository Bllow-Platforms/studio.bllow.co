import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';
import { DEFAULT_CARD_RESTYLE } from '@/constants';

const LIMIT_OPTIONS = [
  { value: 'unlimited', label: 'Unlimited' },
  { value: '5-per-day', label: '5 per day' },
  { value: '10-per-day', label: '10 per day' },
];

const NOTIFICATION_OPTIONS = [
  {
    id: 'new-supporter',
    label: 'When I get a new supporter',
    defaultChecked: true,
  },
  {
    id: 'comment',
    label: 'When a supporter comments on my page',
    defaultChecked: false,
  },
];

const NotificationTab = () => {
  const [selectedLimit, setSelectedLimit] = useState<string>('unlimited');

  return (
    <Card className={DEFAULT_CARD_RESTYLE}>
      <div className="space-y-4 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-sm text-muted-gray100">
            GENERAL NOTIFICATIONS
          </h2>
          <div className="flex items-center gap-2">
            <h6 className="text-sm text-muted-gray100">Enable All</h6>
            <Switch />
          </div>
        </div>

        <div className="space-y-3">
          {NOTIFICATION_OPTIONS.map(option => (
            <div key={option.id} className="flex items-center gap-2">
              <Checkbox
                id={option.id}
                defaultChecked={option.defaultChecked}
                className="border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <label
                htmlFor={option.id}
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>

        <hr />
      </div>

      <div className="space-y-4 flex gap-2 flex-col">
        <h3 className="font-semibold text-sm text-muted-gray100">
          LIMIT EMAIL NOTIFICATION
        </h3>
        <div className="flex gap-4">
          {LIMIT_OPTIONS.map(option => (
            <button
              key={option.value}
              onClick={() => setSelectedLimit(option.value)}
              className={`flex items-center gap-2 px-4 py-3 rounded-full transition-colors ${
                selectedLimit === option.value
                  ? 'border-primary border-[1px] text-black font-semibold '
                  : 'border border-gray-200 text-gray-500'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full border-2 ${
                  selectedLimit === option.value
                    ? 'border-white bg-black flex  items-center justify-center'
                    : 'border-gray-300'
                }`}
              >
                {selectedLimit === option.value && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
              <span className="text-sm">{option.label}</span>
            </button>
          ))}
        </div>

        <Button className="w-full bg-[#6355FF] py-[24px] text-white hover:bg-[#6355FF]/90">
          Save Changes
        </Button>
      </div>
    </Card>
  );
};

export default NotificationTab;
