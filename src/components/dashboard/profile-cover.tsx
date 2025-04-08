import { FC } from 'react';
import { MapPin } from 'lucide-react';

interface IUserProfilePanelProps {}

 const UserProfilePanel: FC<IUserProfilePanelProps> = props => {
  return (
    <div className="flex flex-col items-center max-w-[550px]  mx-auto text-center relative -top-11">
      <div className="w-[130px] h-[120px] rounded-[40px] bg-gray-200 mb-4 ring-8 ring-white/70" />
      <h1 className="text-xl font-semibold mb-1">Creator Fullstack Mechanic</h1>
      <p className="text-gray-500 text-sm mb-2">@fullstackmechanic</p>
      <p className="text-sm mb-4">
        Software Engineer | Product Designer | Motion Designer | Aspiring Ethical
        Hacker
      </p>

      <div className="flex flex-wrap items-center justify-center gap-6 text-muted-primary text-sm mb-4 ">
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          <span>Lagos, Nigeria</span>
        </div>
        <div className="flex items-center gap-1">
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>blow.fullstackmechan...</span>
        </div>
        <div className="flex items-center gap-1">
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3"
              y="4"
              width="18"
              height="18"
              rx="2"
              ry="2"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="16"
              y1="2"
              x2="16"
              y2="6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="8"
              y1="2"
              x2="8"
              y2="6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="3"
              y1="10"
              x2="21"
              y2="10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Joined January 2025</span>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="text-center flex gap-1 items-baseline">
          <p className="font-semibold text-xl">254M</p>
          <p className="text-muted-primary text-sm">Followers</p>
        </div>
        <div className="text-center flex gap-1 items-baseline">
          <p className="font-semibold text-xl">5k</p>
          <p className="text-muted-primary text-sm">Following</p>
        </div>
      </div>
    </div>
  );
};

export  default UserProfilePanel;