import React from 'react';

interface FormActionProps {
  action?: 'submit'; // Assuming action can only be 'submit' or undefined
  text: string;
  type?: 'Button'; // Assuming type can only be 'Button' or undefined
  handleSubmit: (event: React.FormEvent<HTMLButtonElement>) => void;
}

export default function FormAction({
  type = 'Button',
  action = 'submit',
  text,
  handleSubmit,
}: FormActionProps) {
  if (type !== 'Button') return <></>;

  return (
    <>
      <button
        type={action}
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
        onClick={handleSubmit}
      >
        {text}
      </button>
    </>
  );
}
