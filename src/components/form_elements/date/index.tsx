import React, { useState } from 'react';
import { useField } from 'formik';
import { Calendar as MantineCalendar } from '@mantine/dates';
import { BiCalendar } from 'react-icons/bi';

import FormLabel from '../label';

import './date.scss';
import { dateFormatter } from '../../../utils/formatter';

type FormDateProps = {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
};

const FormDateInput = (props: FormDateProps) => {
  const [field, meta, helpers] = useField(props);
  const [date, setDate] = useState<Date | null>(null);
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  const { setValue } = helpers;

  return (
    <div className='relative'>
      <FormLabel
        htmlFor={props.id || props.name}
        label={props.label}
        requiredHint={props.required}
      />
      <div className='relative' onClick={() => setShowCalendar((s) => !s)}>
        <input
          type='text'
          id={props.id}
          readOnly
          className='date_input block w-full py-4 px-3 pr-8 cursor-pointer'
          placeholder={props.placeholder}
          {...field}
        />
        <div
          className={`calendar ${showCalendar && 'show'}`}
          onClick={(e) => e.stopPropagation()}>
          <MantineCalendar
            size='sm'
            value={date}
            onChange={(value) => {
              setDate(value);
              setValue(dateFormatter(value ?? ''));
              setShowCalendar(false);
            }}
          />
        </div>
        <BiCalendar size={20} className='calendar_icon' />
      </div>
      {meta.error && meta.touched && (
        <span className='block text-red pt-2'>{meta.error} </span>
      )}
    </div>
  );
};

export default FormDateInput;
