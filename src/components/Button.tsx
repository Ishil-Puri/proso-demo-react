import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { to: string; };

export const Button: React.FC<Props> = ({ to, ...props }) => {
    const navigate = useNavigate();
    const handleClick = () => navigate(to);

    return (
        <button {...props} className='btn' onClick={handleClick}>
            {props.children}
        </button>
    );
};
