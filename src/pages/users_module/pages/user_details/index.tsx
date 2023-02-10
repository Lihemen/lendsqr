import React from 'react';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

import './user.scss';

const UserDetails = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col gap-6 text-gray'>
      <button
        className='flex items-center gap-2 cursor-pointer text-gray'
        onClick={() => navigate('/users')}>
        <HiOutlineArrowNarrowLeft size={24} />
        Back to Users
      </button>

      <div className='bg-white p-8 rounded flex flex-col gap-8'>
        <div className='flex items-center '>
          <img src='' alt='image' className='profile_img' />

          <div className='flex flex-col gap-2'>
            <h4 className='text-dark-blue'>Grace</h4>
            <p className='uppercase text-sm'>adipisicing </p>
          </div>
          <div className='flex flex-col gap-2 '>
            <p className='text-sm'>User's Tier</p> <span>Star</span>
          </div>
        </div>
      </div>
      <div className='bg-white p-8 rounded'></div>
    </div>
  );
};

export default UserDetails;
