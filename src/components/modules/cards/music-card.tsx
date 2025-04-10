import React from 'react';
import { Play } from 'lucide-react';

const MusicCard = () => {
  // max-w-xs
  return (
    <div className="w-full rounded-xl overflow-hidden shadow-md">
      <div className="relative">
        <img
          src="https://s3-alpha-sig.figma.com/img/b243/78cd/02c2c74a11d6e492eea72cea4d296d64?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jIKpapI77neX4rqvBlC7fqTrzeLYMvgxK803SABwvjrRmajQBrXh5hb4jES0Cz4Y~bJIlN9y6P72-F867~3UaaUZUYVYSEyyG5h9Q4PzTLc7C9MqFX85UXKa4beEpdtIZtK3SycgksxqwaodAIhO8fBCx6Q8h~lo8e5ICIbFwG2ftPxu~9hVWCh8ZrYGw-Ncur400IbxcQgKu8E9FWw81GD3C~LgsYLuiSvCwLrQ0KEGPd4dh0XRncWPMB5d4zPArys8fEitrppfcfJIqvXv7i~s4fiU60JqtvSGzW7Yemgi4G3NRjeoTOFRjQ~qysWNnbmH-TnKwaGs-ZV8XzTlxg__"
          alt="Cover"
          className="w-full h-60 object-cover rounded-t-xl"
        />

        {/* Tag */}
        <span className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
          #audiobook
        </span>

        {/* Play Button */}
        <button className="absolute bottom-2 right-2 bg-white/80 rounded-full p-2">
          <Play className="w-4 h-4 text-black" />
        </button>

        {/* Duration */}
        <span className="absolute bottom-2 left-2 text-white text-sm font-medium">
          2:20
        </span>
      </div>

      {/* Text Content */}
      <div className="p-3">
        <h3 className="font-semibold text-base">The Angel</h3>
        <p className="text-sm text-gray-600 truncate">
          Brat and it’s completely different Brat...
        </p>
      </div>
    </div>
  );
};

export default MusicCard;
