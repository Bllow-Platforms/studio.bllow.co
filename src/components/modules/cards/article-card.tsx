import React from 'react';

const ArticleCard = () => {
  return (
    <div className="w-full rounded-xl overflow-hidden">
      {/* Image */}
      <img
        src="https://s3-alpha-sig.figma.com/img/9713/10cc/8ba64cd400dece9ac357e4515aee8ea7?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mzOVyZgPH2rbNT48yv5DAMsCBXW4ShdQbB9cmHxiFnYg9x61oQkZVILWLKZcvcQooppKVRCwJY5XJp6rGadcrl3PLUhYmkMleUnTz0YpYxl79h3A2Eb5PbMz-E2YTh0cGn8U~SM9aARrPH2ZmMyoXV1kl6X1HtBtIbMnUv8I0IvpKzNV-x-NQP~hZsFGhWiffFavNaYstr6Wc55xYJLnRYgxdj0EM9bX85nGaR9hreviS9xPphvlMw2fsXey74m6EjxizojVlFGsge~8q8wroPUlA~Lt2lRVNZfpJM~tfprQ1SfTfYv~FahngvBPi-qom65EIgSwFA-Et8~8gMAunA__"
        alt="Blog cover"
        className="w-full h-40 object-cover rounded-xl"
      />

      <div className="pt-3">
        <p className="text-sm text-gray-800 leading-snug line-clamp-2">
          Ryan Let’s discuss figma and it’s environs, how to successfully navigate
          the basics of figma and build s...
        </p>

        <div className="flex justify-between text-xs text-gray-400 pt-2">
          <span>Mar 22, 2025</span>
          <span>2,045 Read</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
