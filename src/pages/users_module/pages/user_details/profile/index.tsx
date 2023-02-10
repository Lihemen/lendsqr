import { Tabs } from '@mantine/core';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { useUserCtx } from '../context';
import {
  General,
  BankInfo,
  Documents,
  Loans,
  Savings,
  SystemSettings,
} from '../tabs';

import avatar from '../../../../../assets/avatar.jpeg';

import '../user.scss';
import { commaFormatter } from '../../../../../utils/formatter';

const UserProfile = () => {
  const { user } = useUserCtx();
  return (
    <>
      <div className=' flex flex-col pb-10'>
        <div className='flex items-center bg-white p-8 w-full  '>
          <img
            src={user.profile.avatar}
            alt='image'
            className='profile_img'
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = avatar;
            }}
          />

          <div className='flex flex-col gap-2 px-8'>
            <h4 className='text-dark-blue text-lg font-semibold'>
              {user.profile.firstName} {user.profile.lastName}{' '}
            </h4>
            <p className='uppercase text-sm'>{user.accountNumber} </p>
          </div>
          <div className='flex flex-col gap-2 border-1 border-r border-l py-3 px-8 '>
            <p className='text-sm'>User's Tier</p>
            <p>
              <FaStar className='text-yellow' />{' '}
              <FaRegStar className='text-yellow' />{' '}
              <FaRegStar className='text-yellow' />{' '}
            </p>
          </div>
          <div className='flex flex-col gap-2 px-8'>
            <h4 className='text-dark-blue text-lg font-semibold'>
              &#8358;{user.accountBalance}
            </h4>
            <p className='uppercase text-sm'>9021044005/PROVIDUS BANK </p>
          </div>
        </div>

        <Tabs
          color='teal'
          defaultValue='general'
          styles={{
            tabsList: {
              border: 'none !important',
            },
          }}>
          <Tabs.List className='flex gap-10 px-8 bg-white'>
            <Tabs.Tab value='general' className='text-gray'>
              General
            </Tabs.Tab>
            <Tabs.Tab value='documents' className='text-gray'>
              Documents
            </Tabs.Tab>
            <Tabs.Tab value='bank' className='text-gray'>
              Bank Details
            </Tabs.Tab>
            <Tabs.Tab value='loans' className='text-gray'>
              Loans
            </Tabs.Tab>
            <Tabs.Tab value='savings' className='text-gray'>
              Savings
            </Tabs.Tab>
            <Tabs.Tab value='system' className='text-gray'>
              App and System
            </Tabs.Tab>
          </Tabs.List>
          <div className='bg-white p-8 rounded mt-8'>
            <Tabs.Panel value='general'>
              <General />{' '}
            </Tabs.Panel>
            <Tabs.Panel value='documents'>
              <Documents />{' '}
            </Tabs.Panel>
            <Tabs.Panel value='bank'>
              <BankInfo />{' '}
            </Tabs.Panel>
            <Tabs.Panel value='loans'>
              <Loans />{' '}
            </Tabs.Panel>
            <Tabs.Panel value='savings'>
              <Savings />{' '}
            </Tabs.Panel>
            <Tabs.Panel value='system'>
              <SystemSettings />{' '}
            </Tabs.Panel>
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default UserProfile;
