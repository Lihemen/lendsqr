import React from 'react';
import './label.scss';

const FormLabel = ({
  htmlFor,
  label,
  requiredHint,
}: {
  htmlFor: string;
  label: string;
  requiredHint: boolean | undefined;
}) => {
  return (
    <label htmlFor={htmlFor} className='form__label capitalize'>
      {label} {requiredHint && <span className='text-red-400'>*</span>}
    </label>
  );
};

export default FormLabel;
