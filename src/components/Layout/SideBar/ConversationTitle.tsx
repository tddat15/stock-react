import React from 'react';
import { Link, useParams } from 'react-router-dom';

interface ConversationTitleProps {
  id: string;
  title: string;
}

const ConversationTitle: React.FC<ConversationTitleProps> = ({ title, id }) => {
  const params = useParams();

  return (
    <Link
      to={`/chat/${id}`}
      className={`mb-2 flex items-center hover:bg-gray-600 p-2 rounded transition-all cursor-pointer
      ${params.id === id ? 'bg-gray-700' : ''}`}
    >
      <p className="truncate w-full">{title}</p>
    </Link>
  );
};

export default ConversationTitle;
