import { useField } from 'formik';
import { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { transformWords } from '../../../utils/formatter';
import FormLabel from '../label';
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
      {props.label && (
        <FormLabel
          label={props.label}
          htmlFor={props.label || props.name}
          requiredHint={props.required}
        />
      )}

      <div className='relative'>
        <div
          className='relative w-full space-y-4'
          onClick={() => setShowOpts((s) => !s)}>
          <input
            className={`block w-full py-4 border px-3 pr-6 cursor-pointer leading-5 rounded text-gray`}
            type='text'
            readOnly
            {...props}
            placeholder={props.placeholder}
            {...field}
          />
          <MdKeyboardArrowDown
            className={`select_arrow transition ${showOpts && 'rotate-180'}`}
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
              {transformWords(option.label, 'capital')}
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
