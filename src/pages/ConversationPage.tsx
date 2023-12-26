import Conversation from '../features/conversation/story.tsx';
import UserLayout from '../layouts/user-layout/index.ts';

export default function ConversationPage() {
  return (
    <UserLayout sidebar={undefined}>
      <Conversation />
    </UserLayout>
  );
}
