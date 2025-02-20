import { FC } from 'react';
import { HeroContainer } from '../layouts/container';
import { DefaultTypography } from '../typography';
import { Button } from '../ui/button';
import { NotificationCard } from './notification-card';
import { Header } from '../header/header';

interface IndexHeroProps {}

export const IndexHero: FC<IndexHeroProps> = props => {
  return (
    <div>
      <Header isAuthenticated={false} />
      <HeroContainer className="relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-4 min-h-screen pt-20 lg:pt-0">
          <div className="w-full space-y-6 text-center lg:text-left z-10">
            <DefaultTypography
              variant="h1"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[120px] 2xl:text-[155px] leading-tight lg:leading-[100px] 2xl:leading-[135px] font-extrabold text-white"
            >
              Support your creative work
            </DefaultTypography>

            <div className="w-full lg:w-[450px] mx-auto lg:mx-0">
              <DefaultTypography
                variant="p"
                className="text-lg md:text-xl text-white/90 mb-8"
              >
                ...accept support. Start a membership. Setup a shop. It's easier
                than you think.
              </DefaultTypography>
            </div>

            <Button className="bg-white text-background font-semibold px-8 py-6 text-lg">
              Join the waitlist
            </Button>

            <DefaultTypography variant="p" className="text-sm text-white/70">
              it won't take you a minute
            </DefaultTypography>
          </div>

          <div className="absolute right-0 top-0 h-full w-full lg:w-1/2 opacity-20 lg:opacity-100 pointer-events-none">
            <NotificationCard
              icon="🎁"
              text="x 1,020,002"
              user="Xing"
              time="today at 09:24am"
              className="hidden sm:block top-[18%] right-[25%]"
            />
            <NotificationCard
              icon="❤️"
              text="12 New Subscribers"
              user="Xing"
              time="today at 09:24am"
              className="hidden sm:block top-[225.8px] right-[15%] transform rotate-[-9.90deg]"
            />
            <NotificationCard
              icon="⭐"
              text="Member Rated Product"
              user="Xing"
              time="today at 09:24am"
              className="top-[40%] right-[30%] transform rotate-[10.21deg]"
            />
            <NotificationCard
              icon="❤️"
              text="12 New Subscribers"
              user="Xing"
              time="today at 09:24am"
              className="hidden sm:block top-[55%] right-[10%] transform rotate-[300px]"
            />
            <NotificationCard
              icon="🎁"
              text="x 1,020,002"
              user="Xing"
              time="today at 09:24am"
              className="top-[65%] right-[35%] transform -rotate-6"
            />
            <NotificationCard
              icon="🛒"
              text="User Checked Out"
              user="Xing"
              time="today at 09:24am"
              className="hidden sm:block top-[75%] right-[15%] transform rotate-[14deg]"
            />
          </div>
        </div>
      </HeroContainer>
    </div>
  );
};
