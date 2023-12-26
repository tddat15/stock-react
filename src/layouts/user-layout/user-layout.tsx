import React from 'react';
import { useUserLayoutStore } from './use-user-layout-store';
import { useUserLayout } from './use-user-layout';
import { IMenuItem } from './service';
import Layout from '../../components/Layout';
import { Conversations } from '../../features/conversation/helpers/conversation.interface';
import { getListOfConversation } from '../../features/conversation/helpers/conversation.service';

interface Props {
  children: React.ReactNode;
  sidebar: string | undefined;
}

const UserLayout: React.FC<Props> = ({ children, sidebar }) => {
  const [conversationTitles, setConversationTitles] = React.useState<string[]>([]);
  const [accountInfo] = React.useState({
    image: 'https://aiapp.org/_next/static/media/logo.4d4e99e2.svg',
    username: 'Dat Thai',
  });

  const store = useUserLayoutStore();
  const { isLoading, open, loadSidebar, toggleSidebar } = useUserLayout(store);

  const handleClick = (item: IMenuItem) => {};

  const handleToggleSideBar = () => {
    toggleSidebar();
  };

  const handleNotif = () => {
    console.log('handleNotif');
  };

  React.useEffect(() => {
    loadSidebar(sidebar, open);
  }, [sidebar, loadSidebar, open]);

  React.useEffect(() => {
    const fetchConversationTitles = async () => {
      try {
        const response: Conversations[] = await getListOfConversation();
        const conversationList = response.map((x) => x.title);
        setConversationTitles(conversationList);
      } catch (error) {
        console.error('Error fetching conversation titles:', error);
      }
    };

    fetchConversationTitles();
  }, []);

  if (isLoading) {
    return <p>loading</p>;
  }

  return (
    <Layout>
      <div className="flex">
        <Layout.Sidebar
          open={open}
          items={conversationTitles}
          user={accountInfo}
          onClick={handleClick}
          createConversation={() => {}}
        />
        <Layout.BodyContent className="">{children}</Layout.BodyContent>

        {/* <SidebarToggle toggleSideBar={handleToggleSideBar} />
          <ContentCreation />
          <NotificationIndicator onNotif={handleNotif} isOpen={canViewNotification} />
          <UserProfile user={user} onLogout={handleLogout} /> */}
        {/* <ConfirmationModal /> */}
      </div>
    </Layout>
  );
};

export default UserLayout;
