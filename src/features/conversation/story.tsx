import { Box, TextField } from '@mui/material';
import Message from './components/message';
import { MessageProps } from './helpers/conversation.interface';
import React from 'react';
import { getConversationStory, postMessage } from './helpers/conversation.service.ts';

interface ConversationProps {
  id: string;
}

const Conversation: React.FC<ConversationProps> = ({ id }) => {
  const [loading, setLoading] = React.useState(null);
  const [data, setData] = React.useState<MessageProps[]>([]);
  const [inputText, setInputText] = React.useState('');
  const messagesEndRef = React.useRef();

  const handleSendMessage = async () => {
    if (!inputText) return;

    const content = inputText;

    setInputText('');
    const res = await postMessage(content, id);
    const newMessage = res.map((item) => item.message);
    setData([...data, ...newMessage]);
  };

  React.useEffect(() => {
    if (!id) return;
    //fetch data
    const fetch = async () => {
      setLoading(true);
      const messageList = await getConversationStory(id);
      setData(messageList.map((item) => item.message));
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };
    fetch();
  }, [id]);

  React.useEffect(() => {
    const scrollToBottom = () => {
      const node = messagesEndRef.current as HTMLElement | null;
      if (node) {
        node.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
        });
      }
    };

    scrollToBottom();
  }, [loading, data]);
  if (loading) return <>Loading</>;

  return (
    <>
      <div className="h-[80px] p-2 font-bold">Fun Chat</div>
      <div className="flex-1 h-[calc(100%-160px)] overflow-auto">
        {data.map((message: MessageProps) => {
          return <Message key={message.id} role={message.role} content={message.content} />;
        })}
        <div ref={messagesEndRef}></div>
      </div>
      <Box className="flex items-center mt-2 px-4">
        <TextField
          fullWidth
          id="fullWidth"
          placeholder="Aa"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target?.value);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault(); // Prevent form submission
              handleSendMessage();
            }
          }}
        />
      </Box>
    </>
  );
};

export default Conversation;
