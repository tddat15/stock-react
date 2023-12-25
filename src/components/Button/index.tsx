import React from 'react';

interface NewButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const NewButton: React.FC<NewButtonProps> = ({ onClick, children, className }) => {
  return (
    <button className={`text-white px-4 py-2 rounded mr-4 ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default NewButton;
