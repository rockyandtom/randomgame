import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = "" 
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn-primary transform hover:scale-105 active:scale-95 transition-transform ${className}`}
    >
      {children}
    </button>
  );
};

export default Button; 