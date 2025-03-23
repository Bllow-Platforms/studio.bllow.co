import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { DEFAULT_CARD_RESTYLE } from '@/constants';
import { Switch } from '@/components/ui/switch';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const SettingsView = () => {
  return (
    <div className="space-y-6">
      <Card className={DEFAULT_CARD_RESTYLE}>
        <div className="space-y-2">
          <h3 className="font-semibold text-black">Payment currency</h3>
          <p className="text-sm text-muted-gray100 mt-2">
            Your supporters will pay in this currency.
          </p>
          <Select defaultValue="usd">
            <SelectTrigger className="w-full rounded-full border-gray-200">
              <SelectValue placeholder="United States Dollar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="usd">United States Dollar</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <hr className="my-6 border-gray-200" />

        {/* Localized Pricing */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-black text-md">
                Localized pricing
              </h3>
              <p className="text-sm text-muted-gray100 mt-2">
                Enable localized pricing so your supporters can pay in their local
                currency.
              </p>
              <button className="text-sm text-primary flex items-center mt-1">
                View supported currencies ▼
              </button>
            </div>
            <Switch />
          </div>
        </div>

        <hr className="my-6 border-gray-200" />


        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-black">Cover credit card fee</h3>
            <p className="text-sm text-muted-gray100 mt-2">
              If turned off, your fans will incur the credit card fee associated
              with payment.
            </p>
          </div>
          <Switch />
        </div>

        <hr className="my-6 border-gray-200" />

        
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-black">
              Mark as NSFW (mandatory for 18+ content
            </h3>
            <p className="text-sm text-muted-gray100 mt-2">
              Indicate that your page is not suitable for children.
              <br />
              Regardless, pornography is not allowed on the platform.{' '}
              <span className="text-primary">Learn more</span>
            </p>
          </div>
          <Switch />
        </div>

        <hr className="my-6 border-gray-200" />

        {/* Google Analytics */}
        <div className="space-y-2">
          <h3 className="font-semibold text-black">Google Analytics</h3>
          <p className="text-sm text-muted-gray100 mt-2">
            Add your Google Analytics tracking code to send page visitor data to
            account.
          </p>
          <Input
            placeholder="UA-XXXXXXXX-Y or G-XXXXXXXXX"
            className="rounded-full border-gray-200"
          />
        </div>

        <hr className="my-6 border-gray-200" />

       
        <div className="space-y-2">
          <h3 className="font-semibold text-black">My Page Link</h3>
          <div className="relative">
            <Input
              value="bllow.com/username"
              readOnly
              className="rounded-full border-gray-200 pr-20"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400/50  text-sm flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copy
            </button>
          </div>
        </div>

        <Button className="w-full bg-primary text-white rounded-full py-6 mt-6"
          disabled>
          Save Changes
        </Button>
      </Card>

     
      <Card className={DEFAULT_CARD_RESTYLE}>
        <h3 className="font-semibold">My Page Info</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Page URL</Label>
            <Input placeholder="Enter your page URL" />
          </div>
          <div className="space-y-2">
            <Label>Page Title</Label>
            <Input placeholder="Enter your page title" />
          </div>
          <div className="space-y-2">
            <Label>Description</Label>
            <Input placeholder="Enter your page description" />
          </div>
          <Button className="w-full bg-primary text-white" disabled>Save Changes</Button>
        </div>
      </Card>


      <Card
        className={`${DEFAULT_CARD_RESTYLE} border-[1px] border-red-400 bg-red-100/40`}
      >
        <div className="space-y-2">
          <h3 className="font-semibold text-black">Disable account</h3>
          <p className="text-sm text-gray-500 w-full lg:max-w-xl mb-2">
            Your account will be temporarily deactivated and will not be accessible.
            You will be logged out in the process , and the page will be
            re-activated when you login again.
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="destructive"
              className="bg-red-500 w-full hover:bg-red-600"
            >
              Delete
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Delete Account</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete your account? This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex gap-2 mt-4">
              <Button variant="outline" className="flex-1">
                Cancel
              </Button>
              <Button 
                variant="destructive" 
                className="flex-1 bg-red-500 hover:bg-red-600"
                onClick={() => {
                  // Handle delete account logic here
                  console.log('Account deleted');
                }}
              >
                Yes, Delete Account
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Card>
    </div>
  );
};

export default SettingsView;
