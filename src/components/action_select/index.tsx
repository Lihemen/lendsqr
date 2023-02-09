import React, { useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

import './actionselect.scss';

type ActionSelectProps = {
  data: Option[];
  label: React.ReactNode;
  Icon?: () => JSX.Element;
  className?: string;
};

type Option = {
  label: string;
  function: () => void;
};

const ActionSelect = ({ data, label, className, Icon }: ActionSelectProps) => {
  const [options, setOptions] = useState<boolean>(false);

  return (
    <button className='relative flex items-center'>
      <span
        className='flex items-center justify-between gap-4 p-2 px-6 action_selecter'
        onClick={() => setOptions((s) => !s)}>
        {label}{' '}
        <MdOutlineKeyboardArrowDown
          className={`text-xl transition ${options && 'rotate-180'}`}
        />{' '}
      </span>
      <ul className={`select_list ${options && 'show'}`}>
        {data.map((option) => (
          <li
            key={option.label}
            onClick={() => {
              option.function();
              setOptions(false);
            }}
            className='flex items-center gap-2 whitespace-nowrap select_list_item'>
            {option.label}
          </li>
        ))}{' '}
      </ul>
    </button>
  );
};

export default ActionSelect;
