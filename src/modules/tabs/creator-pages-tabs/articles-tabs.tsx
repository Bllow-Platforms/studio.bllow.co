import { DefaultTypography } from '@/components/typography';
import ArticleCard from '@/modules/shared/article-card';
import PaginationUI from '@/modules/shared/pagination-ui';
import SearchBar from '@/modules/shared/search-bar';
import React from 'react';

const ArticleTab = () => {
  return (
    <div className="container mx-auto px-4">
      <SearchBar placeholder="Search in all post" />
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
        <DefaultTypography className="text-lg font-bold mb-4">
          Article
        </DefaultTypography>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {new Array(8).fill(null).map((_, index) => (
            <ArticleCard key={index} />
          ))}
        </div>

        <div className="mt-6">
          <PaginationUI pageCount={4} />
        </div>
      </div>
    </div>
  );
};

export default ArticleTab;
