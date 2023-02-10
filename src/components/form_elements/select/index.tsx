import { useField } from 'formik';
import { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import './select.scss';

type SelectProps = {
  data: Array<Option>;
  label: string;
  id: string;
  name: string;
  placeholder: string;
  required?: boolean;
};

interface Option {
  value: string;
  label: string;
}

const FormSelect = (props: SelectProps) => {
  const [field, meta, helpers] = useField(props);
  const [showOpts, setShowOpts] = useState<boolean>(false);
  const { setValue } = helpers;

  return (
    <div className=''>
      <label
        htmlFor={props.name || props.id}
        className='block text-base capitalize'
        onClick={() => setShowOpts((s) => !s)}>
        {props.label}{' '}
        {props.required && <span className='text-red-400'>*</span>}
      </label>
      <div className='relative'>
        <div
          className='relative w-full space-y-4'
          onClick={() => setShowOpts((s) => !s)}>
          <input
            className={`block w-full py-4 border px-3 pr-6 cursor-pointer`}
            type='text'
            readOnly
            {...props}
            placeholder={props.placeholder}
            {...field}
          />
          <MdKeyboardArrowDown
            className={`select_arrow ${showOpts && 'show'}`}
          />
        </div>
        <ul className={`select_list ${showOpts && 'show'}`}>
          {props.data.map((option) => (
            <li
              key={option.label}
              onClick={() => {
                setValue(option.value);
                setShowOpts(false);
              }}
              className='flex items-center gap-2 whitespace-nowrap select_list_item'>
              {option.label}
            </li>
          ))}{' '}
        </ul>
      </div>
      {meta.error && meta.touched && (
        <span className='block text-red pt-2'>{meta.error} </span>
      )}
    </div>
  );
};

export default FormSelect;
