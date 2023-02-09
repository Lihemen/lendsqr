import React from 'react';
import { MdPeopleAlt } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { FaCoins } from 'react-icons/fa';
import { useQuery } from 'react-query';

import { commaFormatter, transformWords } from '../../../../utils/formatter';

import './userslist.scss';
import { Loader, Table } from '../../../../components';
import { get_all_users } from '../../../../queries';

const UsersList = () => {
  const { data, isError, isLoading } = useQuery(get_all_users());

  return (
    <main className='flex flex-col gap-8'>
      <h3 className='text-xl text-dark-blue font-semibold'>Users</h3>
      <div className='flex justify-between items-center gap-8'>
        <div className='flex flex-col flex-1 items-start justify-between bg-white p-7 gap-6 rounded'>
          <MdPeopleAlt size={40} color='#DF18FF' className='icon icon_pink' />
          <h5 className='font-normal uppercase'>Users</h5>
          <p className='text-2xl leading-4 font-bold text-dark-blue'>
            {commaFormatter(2453)}
          </p>
        </div>
        <div className='flex flex-col flex-1 items-start justify-between bg-white p-7 gap-6 rounded'>
          <IoIosPeople size={40} color='#5718FF' className='icon icon_purple' />
          <h5 className='font-normal uppercase'>Active Users</h5>
          <p className='text-2xl leading-4 font-bold text-dark-blue'>
            {commaFormatter(2453)}
          </p>
        </div>
        <div className='flex flex-col flex-1 items-start justify-between bg-white p-7 gap-6 rounded'>
          <IoDocumentTextOutline
            size={40}
            color='#F55F44'
            className='icon icon_orange'
          />
          <h5 className='font-normal uppercase'>Users with loans</h5>
          <p className='text-2xl leading-4 font-bold text-dark-blue'>
            {commaFormatter(2453)}
          </p>
        </div>
        <div className='flex flex-col flex-1 items-start justify-between bg-white p-7 gap-6 rounded'>
          <FaCoins size={40} color='#FF3366' className='icon icon_red' />
          <h5 className='font-normal uppercase'>Users with savings</h5>
          <p className='text-2xl leading-4 font-bold text-dark-blue'>
            {commaFormatter(2453)}
          </p>
        </div>
      </div>
      {isLoading && <Loader />}

      {isError && <>Error</>}

      {data && (
        <Table
          headers={[
            {
              accessor: 'orgName',
              name: 'organization',
              sortable: true,
              row: (val) => <>{transformWords(val, 'capital')} </>,
            },
            {
              accessor: 'profile.firstName',
              secondary_key: 'profile.lastName',
              name: 'username',
              sortable: true,
              row: (val, second) => (
                <>
                  {val} {second}
                </>
              ),
            },
            {
              accessor: 'email',
              name: 'email',
              sortable: true,
              row: (val) => <>{transformWords(val, 'lower')} </>,
            },
            {
              accessor: 'phoneNumber',
              name: 'phone number',
              sortable: true,
            },
            {
              accessor: 'createdAt',
              name: 'date joined',
              sortable: true,
            },
            {
              accessor: 'profile.bvn',
              name: 'status',
              sortable: true,
            },
          ]}
          rows={10}
          data={data}
        />
      )}
    </main>
  );
};

export default UsersList;
