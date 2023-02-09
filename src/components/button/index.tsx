import React from 'react';
import './button.scss';

import spinner from '../../assets/spinner.gif';

interface MyButtonProps {
  label: React.ReactNode;
  type: 'submit' | 'button' | 'reset' | undefined;
  variant: 'filled' | 'outline';
  loading?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button = ({ label, loading, type, onClick, ...props }: MyButtonProps) => {
  return (
    <button
      className={`${props.className} button ${props.variant}  ${
        loading ? 'py-2' : 'py-4'
      }`}
      type={type}
      disabled={loading}
      onClick={onClick}>
      {loading ? <img src={spinner} alt='Loading...' /> : label}
    </button>
  );
};

export default Button;
