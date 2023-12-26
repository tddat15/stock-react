import React from 'react';

interface AccountInfoProps {
  image: string;
  username: string;
}

const AccountInfo: React.FC<AccountInfoProps> = ({ image, username }) => {
  return (
    <div className="mt-auto flex items-center">
      <img src={image} alt={username} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <p className="text-white font-bold text-lg">{username}</p>
      </div>
    </div>
  );
};

export default AccountInfo;
