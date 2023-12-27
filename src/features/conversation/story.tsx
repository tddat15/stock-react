import { Box, TextField } from '@mui/material';
import Message from './components/message';
import { MessageProps } from './helpers/conversation.interface';
import { conversationStory } from './helpers/mockData';

export default function Conversation() {
  const data = conversationStory;
  return (
    <>
      <div className="h-[80px] p-2 font-bold">Fun Chat</div>
      <div className="flex-1 h-[calc(100%-160px)] overflow-auto">
        {data.map((message: MessageProps) => {
          return <Message host={message.host} text={message.text} />;
        })}
      </div>
      <Box className="mt-2 px-4 h-2">
        <TextField fullWidth id="fullWidth" placeholder="Aa" />
      </Box>
    </>
  );
}
