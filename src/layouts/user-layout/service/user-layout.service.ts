import { IUserLayoutStore, ISidebar } from './user-layout.interface';

type InitUserLayoutStore = Pick<IUserLayoutStore, 'initSidebar'> & {
  options: Partial<{ [key: string]: any }>;
};
type UpdateUserLayoutStore = Pick<IUserLayoutStore, 'updateSidebar'>;

export const loadInititalSidebar = (store: InitUserLayoutStore) => {
  const { sidebarId, isOpen } = store.options;
  store.initSidebar(sidebarId, isOpen);
};

export const openSidebar = (store: UpdateUserLayoutStore) => {
  updateSidebarState(store, { open: true });
};

export const closeSidebar = (store: UpdateUserLayoutStore) => {
  updateSidebarState(store, { open: false });
};

export const updateSidebarState = (store: UpdateUserLayoutStore, value: Partial<ISidebar>) => {
  store.updateSidebar(value);
};
