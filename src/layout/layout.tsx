import SidebarLayout from './sidebar.tsx';

export default function Layout() {
  const handleNewChat = () => {
    console.log('New chat clicked');
  };

  const handleLogout = () => {
    console.log('Logout clicked');
  };
  return (
    <>
      <SidebarLayout onNewChat={handleNewChat} onLogout={handleLogout} />
    </>
  );
}
