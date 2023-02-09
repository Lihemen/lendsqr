import React from 'react';
import spinner from '../../assets/spinner.gif';

const Loader = () => {
  return (
    <div className='flex p-10 items-center justify-center'>
      <img src={spinner} alt='Loading...' loading='eager' />
    </div>
  );
};

export default Loader;
