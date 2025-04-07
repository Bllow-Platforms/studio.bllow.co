import { DefaultTypography } from '@/components/typography';
import PaginationUI from '@/modules/shared/pagination-ui';
import PostCard from '@/modules/shared/post-card';
import SearchBar from '@/modules/shared/search-bar';
import React from 'react';

const PostsTab = () => {
  return (
    <div className="container mx-auto px-4">
      <SearchBar placeholder="Search in all post" />
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
        <DefaultTypography className="text-lg font-bold mb-4">
          Posts
        </DefaultTypography>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
          {new Array(8).fill(null).map((_, index) => (
            <PostCard key={index} />
          ))}
        </div>

        <div className="">
          <PaginationUI pageCount={4} />
        </div>
      </div>
    </div>
  );
};

export default PostsTab;
