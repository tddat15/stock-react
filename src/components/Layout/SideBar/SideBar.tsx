import { Button } from '@mui/material';
import ConversationTitle from './ConversationTitle';
import AccountInfo from './AccountInfor';

interface Props {
  items: string[];
  className?: string;
  open: boolean;
  user: {
    username: string;
    image: string;
  };
  createConversation: () => void;
  onClick: (item: any) => void;
}

const SideBar: React.FC<Props> = ({ items, user, createConversation }) => {
  return (
    <div>
      <div className="bg-gray-800 text-white h-screen flex flex-col p-4" style={{ width: '400px' }}>
        <div className="flex justify-center items-center mb-4">
          <img
            src={'https://aiapp.org/_next/static/media/logo.4d4e99e2.svg'}
            alt="logo"
            className="w-12 h-12 rounded-full"
          />
          <h2 className="ml-4 text-xl font-bold">Fun Chat</h2>
        </div>

        <div className="mb-4">
          <Button
            onClick={createConversation}
            className=" bg-gray-800 text-white hover:bg-gray-600 transition w-full"
          >
            New Chat
          </Button>
        </div>
        <ul className="flex-1 overflow-y-auto h-full">
          {items.map((title, index) => (
            <ConversationTitle key={index} title={title} />
          ))}
        </ul>
        <div className="flex items-center">
          <div className="mr-4">
            <AccountInfo {...user} />
          </div>
          <div className="">
            <Button className="ml-0 hover:bg-red-700 transition">Logout</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
export type { Props as SideBarProps };
