import React from 'react';

interface ConversationTitleProps {
  title: string;
}

const ConversationTitle: React.FC<ConversationTitleProps> = ({ title }) => {
  return (
    <li className="mb-2 flex items-center hover:bg-gray-600 p-2 rounded transition-all">
      <span>{title}</span>
    </li>
  );
};

export default ConversationTitle;
