import React from 'react';
import './sidebar.scss';

import { NavLink } from 'react-router-dom';
import { HiUsers, HiOutlineUserGroup } from 'react-icons/hi';
import {
  FaBriefcase,
  FaRegHandshake,
  FaPiggyBank,
  FaUserCheck,
  FaUserTimes,
  FaCoins,
  FaScroll,
  FaUserCog,
  FaClipboardList,
} from 'react-icons/fa';
import {
  MdKeyboardArrowDown,
  MdOutlinePhonelinkRing,
  MdLogout,
} from 'react-icons/md';
import { IoHomeOutline } from 'react-icons/io5';
import { GiReceiveMoney, GiGalaxy, GiSettingsKnobs } from 'react-icons/gi';
import { AiOutlineBank, AiOutlineBarChart } from 'react-icons/ai';
import { HiOutlineCheckBadge } from 'react-icons/hi2';

import { transformWords } from '../../utils/formatter';
import { useAuthCtx } from '../../context/Auth';

type SidebarNavLinkProps = {
  to: string;
  icon: JSX.Element;
  close?: () => void;
};

const SidebarLink = ({ close, icon, to }: SidebarNavLinkProps) => {
  const makeUrl = (to: string) =>
    to
      .split(/[\s_/]/)
      .join('-')
      .toLowerCase();
  return (
    <NavLink
      to={makeUrl(to)}
      className={({ isActive }) =>
        `side_link flex items-center gap-4 ${
          isActive ? 'side_link_active' : undefined
        }`
      }
      end
      onClick={close}>
      {icon}
      <span className='capitalize'>
        {transformWords(to === '' ? 'dashboard' : to, 'upper').toLowerCase()}
      </span>
    </NavLink>
  );
};

const Sidebar = ({
  className,
  close,
}: {
  className?: string;
  close: () => void;
}) => {
  const { logout } = useAuthCtx();
  return (
    <aside className={`sidebar ${className}`}>
      <nav className='flex flex-col gap-7'>
        <li className='flex items-center gap-4 text-gray mb-2 cursor-pointer text-base'>
          <FaBriefcase size={20} />
          Switch Organization
          <MdKeyboardArrowDown size={20} />
        </li>

        <SidebarLink close={close} icon={<IoHomeOutline size={20} />} to='' />
        <div>
          <h4 className='sidebar_links_title'>Customers</h4>
          <ul className='flex flex-col py-4 gap-2'>
            <SidebarLink
              close={close}
              icon={<HiUsers size={20} />}
              to='users'
            />
            <SidebarLink
              close={close}
              icon={<HiOutlineUserGroup size={20} />}
              to='guarantors'
            />
            <SidebarLink
              close={close}
              icon={<FaRegHandshake size={20} />}
              to='decision-models'
            />
            <SidebarLink
              close={close}
              icon={<FaPiggyBank size={20} />}
              to='savings'
            />
            <SidebarLink
              close={close}
              icon={<GiReceiveMoney size={20} />}
              to='loan-requests'
            />
            <SidebarLink
              close={close}
              icon={<FaUserCheck size={20} />}
              to='whitelist'
            />
            <SidebarLink
              close={close}
              icon={<FaUserTimes size={20} />}
              to='karma'
            />
          </ul>
        </div>
        <div>
          <h4 className='sidebar_links_title'>Businesses</h4>
          <ul className='flex flex-col py-4 gap-2'>
            <SidebarLink
              close={close}
              icon={<FaBriefcase size={20} />}
              to='organization'
            />
            <SidebarLink
              close={close}
              icon={<GiReceiveMoney size={20} />}
              to='loan-products'
            />
            <SidebarLink
              close={close}
              icon={<AiOutlineBank size={20} />}
              to='savings-products'
            />
            <SidebarLink
              close={close}
              icon={<FaCoins size={20} />}
              to='fees-and-charges'
            />
            <SidebarLink
              close={close}
              icon={<MdOutlinePhonelinkRing size={20} />}
              to='transactions'
            />
            <SidebarLink
              close={close}
              icon={<GiGalaxy size={20} />}
              to='services'
            />
            <SidebarLink
              close={close}
              icon={<FaUserCog size={20} />}
              to='service account'
            />
            <SidebarLink
              close={close}
              icon={<FaScroll size={20} />}
              to='settlements'
            />
            <SidebarLink
              close={close}
              icon={<AiOutlineBarChart size={20} />}
              to='reports'
            />
          </ul>
        </div>
        <div>
          <h4 className='sidebar_links_title'>Settings</h4>
          <ul className='flex flex-col py-4 gap-2'>
            <SidebarLink
              close={close}
              icon={<GiSettingsKnobs size={20} />}
              to='preferences'
            />
            <SidebarLink
              close={close}
              icon={<HiOutlineCheckBadge size={20} />}
              to='fees-and-pricing'
            />
            <SidebarLink
              close={close}
              icon={<FaClipboardList size={20} />}
              to='audit logs'
            />
            <SidebarLink
              close={close}
              icon={<HiOutlineCheckBadge size={20} />}
              to='system-messages'
            />
          </ul>
        </div>
        <button
          className='logout gap-4 flex flex-col text-base text-dark-blue cursor-pointer'
          onClick={logout}>
          <p className='flex items-center gap-2 text-base'>
            <MdLogout />
            Logout
          </p>
          <span>v 1.2</span>
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
