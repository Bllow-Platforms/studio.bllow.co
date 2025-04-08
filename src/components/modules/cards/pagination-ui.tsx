import React from 'react';
import ReactPaginate from 'react-paginate';

type Props = {
  pageCount: number;
  onPageChange?: (selectedItem: { selected: number }) => void;
};

const PaginationUI = ({ pageCount, onPageChange }: Props) => {
  return (
    <div className="flex justify-center mt-4">
      <ReactPaginate
        breakLabel="..."
        nextLabel="❯"
        onPageChange={onPageChange}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="❮"
        renderOnZeroPageCount={null}
        containerClassName="flex items-center space-x-2"
        pageClassName="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-700"
        pageLinkClassName="w-full h-full flex items-center justify-center"
        activeClassName="border border-gray-400 bg-white text-black"
        previousClassName="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100"
        previousLinkClassName="w-full h-full flex items-center justify-center"
        nextClassName="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100"
        nextLinkClassName="w-full h-full flex items-center justify-center"
        breakClassName="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100"
        breakLinkClassName="w-full h-full flex items-center justify-center"
      />
    </div>
  );
};

export default PaginationUI;
