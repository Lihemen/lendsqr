import React, { useState } from 'react';
import './userslist.scss';

import { Popover } from '@mantine/core';
import { MdPeopleAlt } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { FaCoins, FaUserCheck, FaUserTimes, FaRegEye } from 'react-icons/fa';
import { RxDotsVertical } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

import {
  commaFormatter,
  dateTimeFormatter,
  transformWords,
} from '../../../../utils/formatter';

import { Loader, Table } from '../../../../components';
import { Fade } from '../../../../motions';
import { useUsers } from '../../../../hooks';

const ActionComponent = ({ data }: { data: User }) => {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();
  return (
    <Popover
      position='left-start'
      opened={opened}
      styles={{
        dropdown: {
          right: '0% !important',
          left: 'unset !important',
          top: '90% !important',
          width: 'max-content',
          padding: '0rem !important',
          marginRight: '10px',
          border: 'none',
          zIndex: 9,
        },
      }}>
      <Popover.Target>
        <RxDotsVertical size={20} onClick={() => setOpened((s) => !s)} />
      </Popover.Target>
      <Popover.Dropdown>
        <div className='flex w-full flex-col gap-4 dropdown'>
          <button
            onClick={() => {
              navigate(data.id);
              setOpened(false);
            }}
            className='py-2 px-3 w-full flex items-center gap-4 text-left bg-white text-gray'>
            <FaRegEye />
            View Details
          </button>
          <button
            onClick={() => setOpened(false)}
            className='py-2 px-3 w-full flex items-center gap-4 text-left bg-white text-gray'>
            <FaUserTimes />
            Blacklist User
          </button>
          <button
            onClick={() => setOpened(false)}
            className='py-2 px-3 w-full flex items-center gap-4 text-left bg-white text-gray'>
            <FaUserCheck />
            Activate User
          </button>
        </div>
      </Popover.Dropdown>
    </Popover>
  );
};

const UsersList = () => {
  const status = ['active', 'pending', 'inactive', 'blacklisted'];
  const { data, isError, isLoading } = useUsers();

  return (
    <Fade className='flex flex-col gap-8 pb-10'>
      <h3 className='text-xl text-dark-blue font-semibold'>Users</h3>
      <div className='grid cols-1 cols-2-md cols-3-lg cols-4-xl justify-between items-center gap-8'>
        <div className='flex flex-col flex-1 items-start justify-between bg-white p-7 px-8 gap-6 rounded tile'>
          <MdPeopleAlt
            fontVariant='Bulk'
            size={40}
            color='#DF18FF'
            className='icon bg-pink-light'
          />
          <h5 className='font-normal uppercase'>Users</h5>
          <p className='text-2xl leading-4 font-bold text-dark-blue'>
            {commaFormatter(2453)}
          </p>
        </div>
        <div className='flex flex-col flex-1 items-start justify-between bg-white p-7 px-8 gap-6 rounded tile'>
          <IoIosPeople
            size={40}
            color='#5718FF'
            className='icon bg-purple-light'
          />
          <h5 className='font-normal uppercase'>Active Users</h5>
          <p className='text-2xl leading-4 font-bold text-dark-blue'>
            {commaFormatter(2453)}
          </p>
        </div>
        <div className='flex flex-col flex-1 items-start justify-between bg-white p-7 px-8 gap-6 rounded tile'>
          <IoDocumentTextOutline
            size={40}
            color='#F55F44'
            className='icon bg-orange-light'
          />
          <h5 className='font-normal uppercase'>Users with loans</h5>
          <p className='text-2xl leading-4 font-bold text-dark-blue'>
            {commaFormatter(2453)}
          </p>
        </div>
        <div className='flex flex-col flex-1 items-start justify-between bg-white p-7 px-8 gap-6 rounded tile'>
          <FaCoins size={40} color='#FF3366' className='icon bg-red-light' />
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
              searchType: 'select',
              row: (val) => <>{transformWords(val, 'capital')} </>,
            },
            {
              accessor: 'profile.firstName',
              secondary_key: 'profile.lastName',
              name: 'username',
              sortable: true,
              searchType: 'input',
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
              searchType: 'input',
              row: (val) => <span className='lower'>{val}</span>,
            },
            {
              accessor: 'phoneNumber',
              name: 'phone number',
              sortable: true,
              searchType: 'input',
            },
            {
              accessor: 'createdAt',
              name: 'date joined',
              sortable: true,
              searchType: 'date',
              row: (val) => <>{dateTimeFormatter(val)} </>,
            },
            {
              accessor: 'status',
              name: 'status',
              sortable: true,
              searchType: 'select',
              row: (val) => (
                <span
                  className={`${
                    val === 'active'
                      ? 'text-green bg-green-light text-sm rounded-md px-4'
                      : val === 'inactive'
                      ? 'text-gray bg-gray-light text-sm rounded-md px-4'
                      : val === 'blacklisted'
                      ? 'text-red bg-red-light text-sm rounded-md px-4'
                      : 'text-yellow bg-yellow-light text-sm rounded-md px-4'
                  } capitalize p-2`}>
                  {val}{' '}
                </span>
              ),
            },
          ]}
          rows={10}
          data={data.map((el, index) => ({ ...el, status: status[index % 4] }))}
          ActionComponent={ActionComponent}
        />
      )}
    </Fade>
  );
};

export default UsersList;
