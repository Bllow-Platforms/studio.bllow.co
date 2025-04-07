import { DefaultTypography } from '@/components/typography';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import PostCard from '@/modules/shared/post-card';
import SearchBar from '@/modules/shared/search-bar';
import ShopCard from '@/modules/shared/shop-card';
import VideoCard from '@/modules/shared/video-card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import React from 'react';

const AllTabs = () => {
  return (
    <div className="container mx-auto px-4">
      <SearchBar placeholder="Search in all post" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Let Column */}

        <div className="lg:col-span-7">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
            <DefaultTypography className="text-lg font-bold mb-4">
              Posts
            </DefaultTypography>
            <div className="space-y-6">
              {Array(5)
                .fill(null)
                .map((_, index) => (
                  <PostCard key={`post-${index}`} />
                ))}
            </div>
          </div>

          <div className="bg-white p-4 md:p-6 my-6 rounded-lg shadow-sm">
            <DefaultTypography className="text-lg font-bold mb-4">
              Videos
            </DefaultTypography>
            <Swiper
              spaceBetween={16}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
              }}
              className="w-full"
            >
              {Array(4)
                .fill(null)
                .map((_, index) => (
                  <SwiperSlide key={`video-${index}`}>
                    <VideoCard />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>

        {/* Right Column -p */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
            <DefaultTypography className="text-lg font-bold mb-4">
              Shop
            </DefaultTypography>
            <div className="mb-6">
              <Swiper
                spaceBetween={16}
                slidesPerView={2.3}
                breakpoints={{
                  640: { slidesPerView: 2.8 },
                }}
                className="w-full"
              >
                {Array(4)
                  .fill(null)
                  .map((_, index) => (
                    <SwiperSlide key={`video-${index}`}>
                      <ShopCard />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>

            <Button
              className="border w-full font-normal hover:bg-transparent hover:opacity-90 border-[#969696] rounded-full py-2 text-[#969696] bg-transparent"
              variant="outline"
            >
              View all shop items
            </Button>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
            <DefaultTypography className="text-lg font-bold mb-4">
              Become a member
            </DefaultTypography>

            <div>
              <div
                style={{
                  backgroundImage: `url(https://s3-alpha-sig.figma.com/img/aed2/4227/e7ecaa7d0ce4e456fdfe4f37d7696205?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=I4fvfbZKGfDxwb2xq~QclTBTmcBgNKGVOBjpz8hqGeUZeTLh3ua1BBeH7uZgcCO8brVsAr~7Rvmlk0Q4kPhp1bhKPDcAOzIkhf0WGc-tnzJZ1-KtIYPqmUdgCekbMbW0-TlqhUWo~kxbRlgACWDjqiRN3u~QD77fguD0YBY8QyGSRboidB5~PxL9toyguqQccWeWxYjXwPDWQEw7cOLjxqRpO5tJgGp04bDZKkMCaOdYvwjgQRsO4sCDJRecALFpt3sEIkf9MMzlFD-CQHl04hFBNW9P67KQeHTK0pi~ZvoFC1WOeSumJr4hZE6~BwAefelXeH0H7zQ8NE5REzHhJQ__)`,
                }}
                className="bg-cover rounded-t-lg bg-center w-full h-[200px] md:h-[250px]"
              ></div>
              <div className="py-4">
                <DefaultTypography className="text-2xl md:text-3xl font-medium">
                  Bronze Member
                </DefaultTypography>
                <DefaultTypography className="text-lg">
                  N10,000/Month
                </DefaultTypography>
                <ul className="list-disc my-4 ml-5 space-y-1">
                  <li>N10,000 monthly support</li>
                  <li>Support me on a monthly basis</li>
                  <li>Unlock exclusive posts and messages</li>
                </ul>
              </div>
            </div>

            <Button className="w-full">Join</Button>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
            <DefaultTypography className="text-lg font-bold mb-4">
              Support Fullstack
            </DefaultTypography>

            <div className="space-y-5 mb-6">
              <div className="bg-[#F3F2FF] flex items-center justify-between p-3 md:p-4 rounded-full overflow-x-auto">
                <span className="inline-flex items-center mr-2">💖 x</span>
                <div className="flex space-x-2 md:space-x-3">
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <button
                      key={num}
                      className="rounded-full flex-shrink-0 flex items-center justify-center text-xs hover:text-white hover:bg-background border w-8 h-8 md:w-10 md:h-10"
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              <Input placeholder="Name" className="w-full" />
              <Textarea
                className="w-full min-h-[100px] bg-transparent"
                placeholder="Say something nice"
              />
            </div>

            <Button className="w-full">Support $1</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTabs;
