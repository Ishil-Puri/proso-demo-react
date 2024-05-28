import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { 
  to: string;
  onClick?: () => void;
};

export const Button: React.FC<Props> = ({ to, onClick, ...props }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    navigate(to);
  };

  return (
    <button {...props} className='btn' onClick={handleClick}>
      {props.children}
    </button>
  );
};