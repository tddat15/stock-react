import React from 'react';
import { useUserLayoutStore } from './use-user-layout-store';
import { useUserLayout } from './use-user-layout';
import { IMenuItem } from './service';
import Layout from '../../components/Layout';
import { Conversations } from '../../features/conversation/helpers/conversation.interface';
import {
  createNewConversation,
  getListOfConversation,
} from '../../features/conversation/helpers/sideBar.service';
import { getUserData } from '../../features/conversation/helpers/sideBar.service.ts';
import {
  CreateConversationResponse,
  SideBarResponse,
} from '../../features/conversation/helpers/sideBar.interface.ts';
import { useNavigate } from 'react-router-dom';
import { onLogout } from '../../features/authentication/helpers/authentication.service.ts';
import { removeCookieToken } from '../../utils/sesstion.ts';

interface Props {
  children: React.ReactNode;
  sidebar: string | undefined;
}

const UserLayout: React.FC<Props> = ({ children, sidebar }) => {
  const navigate = useNavigate();
  const [conversationTitles, setConversationTitles] = React.useState<string[]>([]);
  const [accountInfo, setAccountInfo] = React.useState({
    image: '',
    username: 'Full name',
  });
  const [currentConversationId, setCurrentConversationid] = React.useState(conversationTitles[0]);

  const store = useUserLayoutStore();
  const { isLoading, open, loadSidebar, toggleSidebar } = useUserLayout(store);

  const handleClick = (item: IMenuItem) => {};

  // const handleToggleSideBar = () => {
  //   toggleSidebar();
  // };

  // const handleNotif = () => {
  //   console.log('handleNotif');
  // };

  const handleLogout = async () => {
    try {
      await onLogout();
      removeCookieToken();
      navigate('/');
    } catch (err) {
      console.log('Logout Failed!');
    }
  };

  const fetchUserProfile = async () => {
    try {
      const userProfile: SideBarResponse = await getUserData();

      setAccountInfo({
        image: userProfile.user.image || 'https://aiapp.org/_next/static/media/logo.4d4e99e2.svg',
        username: userProfile.user.username,
      });
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const createConversation = async () => {
    try {
      const newChat: CreateConversationResponse = await createNewConversation();
      setCurrentConversationid(newChat.conversation.id);
    } catch (err) {
      console.log('Create new Conversation Failed');
    }
  };

  React.useEffect(() => {
    loadSidebar(sidebar, open);
  }, [sidebar, loadSidebar, open]);

  React.useEffect(() => {
    const fetchConversationTitles = async () => {
      try {
        const response: Conversations[] = await getListOfConversation();
        const conversationList = response.map((x) => x.conversation.title);
        setConversationTitles(conversationList);
      } catch (error) {
        console.error('Error fetching conversation titles:', error);
      }
    };

    fetchConversationTitles();
    fetchUserProfile();
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
          createConversation={createConversation}
          handleLogout={handleLogout}
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
