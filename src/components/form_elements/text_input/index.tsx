import { useState } from 'react';
import { useField } from 'formik';

import './input.scss';

import FormLabel from '../label';

interface FormInputInterface {
  id: string;
  name: string;
  label?: string;
  type: 'text' | 'email' | 'password' | 'tel' | 'search' | 'number';
  placeholder?: string;
  autocomplete?: string;
  autoFocus?: boolean;
  required?: boolean;
  pattern?: string;
}

const FormInput = ({ label, ...props }: FormInputInterface) => {
  const [field, meta] = useField(props);
  const [type, setType] = useState(props.type);

  const toggleVisibility = () => {
    if (type === 'password') {
      return setType('text');
    } else {
      return setType('password');
    }
  };

  return (
    <div className=' flex flex-col w-full'>
      {label && (
        <FormLabel
          requiredHint={props.required}
          label={label}
          htmlFor={props.id || props.name}
        />
      )}

      <div className='relative w-full'>
        <input
          type={type}
          id={props.id || props.name}
          pattern={props.pattern}
          placeholder={props.placeholder}
          autoComplete={props.autocomplete}
          autoFocus={props.autoFocus}
          className='form_input py-4 px-3 pr-8'
          {...field}
        />
        {props.type === 'password' && (
          <span className='password__visibility' onClick={toggleVisibility}>
            {type === 'password' ? 'show' : 'hide'}{' '}
          </span>
        )}
      </div>
      {meta.error && meta.touched && (
        <span className='form_error'>{meta.error} </span>
      )}
    </div>
  );
};

export default FormInput;
