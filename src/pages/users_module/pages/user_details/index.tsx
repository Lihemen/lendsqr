import React from 'react';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { UserProvider } from './context';
import UserProfile from './profile';

import './user.scss';

const UserDetails = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col gap-6 text-gray'>
      <div className='flex items-center justify-between'>
        <button
          className='flex items-center gap-2 cursor-pointer text-gray'
          onClick={() => navigate('/users')}>
          <HiOutlineArrowNarrowLeft size={24} />
          Back to Users
        </button>

        <div className='flex items-center gap-6'>
          <button className='text-xs uppercase border-2 border border-red text-red p-3 px-4 rounded'>
            Blacklist User
          </button>
          <button className='text-xs uppercase border-2 border border-primary text-primary p-3 px-4 rounded'>
            Activate User
          </button>
        </div>
      </div>

      <UserProvider>
        <UserProfile />
      </UserProvider>
    </div>
  );
};

export default UserDetails;
