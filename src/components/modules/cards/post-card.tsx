import { DefaultTypography } from '@/components/modules/shared/typography';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { BookMarkedIcon, MessageCircle, ShareIcon } from 'lucide-react';
import React from 'react';

type Props = {
  name?: string;
  src?: string;
};

const PostCard = (props: Props) => {
  return (
    <div className={cn('w-full')}>
      <div className="flex items-center gap-2">
        <Avatar className="scale-110">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>{props?.name}</AvatarFallback>
        </Avatar>
        <div className="">
          <DefaultTypography variant="h4" className="text-lg font-bold">
            Ganiu Samuel
          </DefaultTypography>
          <DefaultTypography className="text-xs text-gray-600" variant="p">
            @fullstackmechanic
          </DefaultTypography>
        </div>
      </div>

      <div className="my-3 txet-sm">
        <p>
          Ryan Let’s discuss figma and it’s environs, how to successfully navigate
          the basics of figma and build solution driven products...
        </p>
      </div>
      <div
        style={{
          backgroundImage: `url(https://s3-alpha-sig.figma.com/img/aed2/4227/e7ecaa7d0ce4e456fdfe4f37d7696205?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=I4fvfbZKGfDxwb2xq~QclTBTmcBgNKGVOBjpz8hqGeUZeTLh3ua1BBeH7uZgcCO8brVsAr~7Rvmlk0Q4kPhp1bhKPDcAOzIkhf0WGc-tnzJZ1-KtIYPqmUdgCekbMbW0-TlqhUWo~kxbRlgACWDjqiRN3u~QD77fguD0YBY8QyGSRboidB5~PxL9toyguqQccWeWxYjXwPDWQEw7cOLjxqRpO5tJgGp04bDZKkMCaOdYvwjgQRsO4sCDJRecALFpt3sEIkf9MMzlFD-CQHl04hFBNW9P67KQeHTK0pi~ZvoFC1WOeSumJr4hZE6~BwAefelXeH0H7zQ8NE5REzHhJQ__)`,
        }}
        className="p-3 bg-cover bg-center h-[300px] rounded-lg"
      ></div>
      <div className="flex justify-between px-4 py-3 gap-4 text-xs items-center">
        <div className="">
          <span>😂😭10.49k</span>
        </div>
        <div className="flex items-center gap-1">
          <MessageCircle size={18} />
          <span>9.2k</span>
        </div>
        <div className="flex items-center gap-1">
          <ShareIcon size={18} />
          <span>9.2k</span>
        </div>
        <div className="flex items-center gap-1">
          <BookMarkedIcon size={18} />
          <span>4.7k</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
