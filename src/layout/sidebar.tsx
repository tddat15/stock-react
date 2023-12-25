import { AccountInfo, Button, ConversationTitle } from '../components';
import React, { useEffect, useState } from 'react';
import {
  getListOfConversation,
  ListOfConversationResponse,
} from '../features/conversation/helpers/conversation.service.ts';
import { getAccessToken } from '../utils/sesstion.ts';

interface SidebarProps {
  onNewChat: () => void;
  onLogout: () => void;
}

const SidebarLayout: React.FC<SidebarProps> = ({ onNewChat, onLogout }) => {
  const [conversationTitles, setConversationTitles] = useState<string[]>([
    'Conversation1',
    'Conversation2',
    'Conversation3',
    'Conversation4',
    'Conversation5',
  ]);

  const [accountInfo] = useState({
    image: 'https://aiapp.org/_next/static/media/logo.4d4e99e2.svg',
    username: 'Dat Thai',
  });

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchConversationTitles = async () => {
      try {
        const accessToken = getAccessToken() as string;
        const response = await getListOfConversation({ accessToken });
        const data: ListOfConversationResponse[] = await response.json();
        setConversationTitles(data.map((x) => x.conversation.title));
      } catch (error) {
        console.error('Error fetching conversation titles:', error);
      }
    };

    fetchConversationTitles();
  }, []);

  const handleConversationClick = (accountId: string) => {
    // Implement the logic to call API with the account ID
    console.log('Clicked on conversation with account ID:', accountId);
  };

  return (
    <div className="bg-gray-800 text-white h-screen flex flex-col p-4 w" style={{ width: '400px' }}>
      <div className="flex justify-center items-center mb-4">
        <img src={accountInfo.image} alt="logo" className="w-12 h-12 rounded-full" />
        <h2 className="ml-4 text-xl font-bold">Fun Chat</h2>
      </div>

      <div className="mb-4">
        <Button
          onClick={onNewChat}
          className=" bg-gray-800 text-white hover:bg-gray-600 transition w-full"
        >
          New Chat
        </Button>
      </div>
      <ul className="flex-1 overflow-y-auto max-h-96">
        {conversationTitles.map((title, index) => (
          <ConversationTitle key={index} title={title} />
        ))}
      </ul>
      <div className="mt-auto flex items-center">
        <div className="mr-4">
          <AccountInfo {...accountInfo} />
        </div>
        <div className="ml-auto">
          <Button onClick={onLogout} className="ml-0 hover:bg-red-700 transition">
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
