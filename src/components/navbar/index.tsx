import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { RiArrowDownSFill } from 'react-icons/ri';
import { FaSearch } from 'react-icons/fa';

import './navbar.scss';

import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.jpeg';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import Sidebar from '../sidebar';

const Navbar = () => {
  const [search, setSearch] = useState<string>('');
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <nav className='navbar flex items-center bg-white text-gray'>
        <img src={logo} alt='lendsqr' />
        <div className='search_flex'>
          <div className='flex items-center justify-between pr-10'>
            <div className='relative search'>
              <input
                type='text'
                value={search}
                onChange={(e) => setSearch(e.currentTarget.value)}
                onBlur={(e) => setSearch(e.currentTarget.value)}
                className='w-full p-3 pr-10 rounded text-gray'
                placeholder='Search for anything'
              />
              <button className='search_button p-3 px-5 bg-primary text-white'>
                <FaSearch role='button' />
              </button>
            </div>
            <div className='flex items-center gap-8 profile'>
              <NavLink to='/docs' className='underline md-display-none'>
                Docs
              </NavLink>
              <MdOutlineNotificationsNone
                size={32}
                className='text-gray cursor-pointer'
              />
              <div className='flex items-center gap-2 cursor-pointer md-display-none'>
                <img src={avatar} alt='' className='w-10 h-10 rounded-full' />
                <p>Hemense</p>
                <RiArrowDownSFill size={20} />
              </div>

              <button
                className='menu_btn'
                onClick={() => setShowSidebar((s) => !s)}>
                <HiOutlineMenuAlt3 size={28} className='text-dark-blue' />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Sidebar
        className={showSidebar ? 'show' : undefined}
        close={() => setShowSidebar(false)}
      />
    </>
  );
};

export default Navbar;
