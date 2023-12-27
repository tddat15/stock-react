import { useParams } from 'react-router-dom';
import Conversation from '../features/conversation/story.tsx';
import UserLayout from '../layouts/user-layout/index.ts';

export default function ConversationPage() {
  const { id } = useParams();

  return (
    <UserLayout sidebar={undefined}>
      <Conversation id={id} />
    </UserLayout>
  );
}
