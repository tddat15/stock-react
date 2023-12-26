import BodyContent, { BodyContentProps } from './BodyContent';
import Sidebar, { SideBarProps } from './SideBar';

interface LayoutComposition {
  BodyContent: React.FC<BodyContentProps>;
  Sidebar: React.FC<SideBarProps>;
}
interface Props {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<Props> & LayoutComposition = ({ children }) => {
  return <>{children}</>;
};

export default Layout;

Layout.BodyContent = BodyContent;
Layout.Sidebar = Sidebar;
