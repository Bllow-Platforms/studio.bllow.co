import { DefaultTypography } from '@/components/typography';
import SearchBar from '@/modules/shared/search-bar';
import VideoCard from '@/modules/shared/video-card';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const VideosTab = () => {
  return (
    <div className="container mx-auto px-4">
      <SearchBar placeholder="Search in all post" />
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
        <DefaultTypography className="text-lg font-bold mb-4">
          Videos
        </DefaultTypography>

        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            // 450:{slidesPerView:2.3},
            640: { slidesPerView: 3.5 },
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
  );
};

export default VideosTab;
