export interface IMenuItem {
  active?: boolean;
  icon?: string;
  id?: string;
  label?: string;
}

export interface ISidebar {
  open: boolean;
  items: IMenuItem[];
}

export interface IUserLayoutStore {
  sidebar: ISidebar;
  isLoading: boolean;
  initSidebar: (sidebarId: string | undefined, isOpen?: boolean) => void;
  updateSidebar: (item: Partial<ISidebar>) => void;
}
