import {
  BookMarkedIcon,
  EllipsisVertical,
  Heart,
  MessageCircleReply,
  Share2,
} from 'lucide-react';
import React from 'react';

type Props = {};

const VideoCard = (props: Props) => {
  return (
    <div className="w-[400px] rounded-md h-[650px] bg-[#ddd] px-6 py-8">
      <div className="flex justify-between">
        <div className="flex flex-col text-center">
          <span>👀</span>
          <span>109k</span>
        </div>

        <div className="flex flex-col text-xs text-center gap-8">
          <button>
            <EllipsisVertical />
          </button>
          <button>
            <BookMarkedIcon />
            <span className="my-1 inline-block">6k</span>
          </button>
          <button>
            <Share2 />
            <span className="my-1 inline-block">20k</span>
          </button>
          <button>
            <MessageCircleReply />
            <span className="my-1 inline-block">235k</span>
          </button>
          <button>
            <Heart />
            <span className="my-1 inline-block">109k</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
