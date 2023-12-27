import { ROLE_TYPE } from '../helpers/conversation.interface.ts';

interface Props {
  role: ROLE_TYPE;
  content: string;
}

const Message: React.FC<Props> = ({ role, content }) => {
  if (!content) return <></>;

  return (
    <div className={`relative p-2 w-full flex ${role === ROLE_TYPE.USER ? 'justify-end' : ''} `}>
      <p className="relative p-2 w-fit max-w-[45%] bg-gray-100 rounded-lg">{content}</p>
    </div>
  );
};

export default Message;
