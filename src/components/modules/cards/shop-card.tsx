import React from 'react';

type Props = {};

const ShopCard = (props: Props) => {
  return (
    <div className="max-w-[200px] w-full">
      <div
        style={{
          backgroundImage: `url(https://s3-alpha-sig.figma.com/img/aed2/4227/e7ecaa7d0ce4e456fdfe4f37d7696205?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=I4fvfbZKGfDxwb2xq~QclTBTmcBgNKGVOBjpz8hqGeUZeTLh3ua1BBeH7uZgcCO8brVsAr~7Rvmlk0Q4kPhp1bhKPDcAOzIkhf0WGc-tnzJZ1-KtIYPqmUdgCekbMbW0-TlqhUWo~kxbRlgACWDjqiRN3u~QD77fguD0YBY8QyGSRboidB5~PxL9toyguqQccWeWxYjXwPDWQEw7cOLjxqRpO5tJgGp04bDZKkMCaOdYvwjgQRsO4sCDJRecALFpt3sEIkf9MMzlFD-CQHl04hFBNW9P67KQeHTK0pi~ZvoFC1WOeSumJr4hZE6~BwAefelXeH0H7zQ8NE5REzHhJQ__)`,
        }}
        className="bg-cover rounded-t-lg bg-center h-[250px]"
      ></div>
      <p className="opacity-65">Lego Blocks Pack</p>
      <p className="font-bold">N10,000</p>
    </div>
  );
};

export default ShopCard;
