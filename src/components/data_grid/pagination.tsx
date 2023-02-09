import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import ReactPaginate from 'react-paginate';
import ActionSelect from '../action_select';

import './pagination.scss';

type PaginationProps = {
  setItemsOffset: React.Dispatch<React.SetStateAction<number>>;
  perPage: number;
  setPerPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  dataLength: number;
};

const Pagination = ({
  dataLength,
  setItemsOffset,
  currentPage,
  setPerPage,
  perPage,
}: PaginationProps) => {
  // Change the page
  const handlePageChange = (event: any) => {
    const newOffset = (event.selected * perPage) % dataLength;
    setItemsOffset(newOffset);
  };

  return (
    <div className='pagination gap-4 py-4'>
      <div className='flex items-center justify-between'>
        <p className='flex items-center gap-8'>
          Showing{' '}
          <ActionSelect
            data={[
              { label: '10', function: () => setPerPage(10) },
              { label: '50', function: () => setPerPage(50) },
              { label: '100', function: () => setPerPage(100) },
              { label: 'All', function: () => setPerPage(dataLength) },
            ]}
            label={perPage}
          />{' '}
          out of {dataLength}
        </p>
        <ReactPaginate
          breakLabel='...'
          previousLabel={
            <MdKeyboardArrowLeft className='text-2xl px-1 text-dark-blue  rounded cursor-pointer bg-dark-blue-light ' />
          }
          nextLabel={
            <MdKeyboardArrowRight className='text-2xl px-1 text-dark-blue rounded cursor-pointer bg-dark-blue-light ' />
          }
          onPageChange={handlePageChange}
          pageCount={currentPage}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          className='flex justify-end items-center gap-6'
        />
      </div>
    </div>
  );
};

export default Pagination;
