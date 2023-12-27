import React from 'react';
import { ISidebar, IUserLayoutStore } from './service';

const getInitialState = (sidebarId: string, isOpen: boolean = true): ISidebar => {
  return {
    open: isOpen,
    items: [],
  };
};

export const useUserLayoutStore = (): IUserLayoutStore => {
  const [sidebar, setSidebar] = React.useState({} as ISidebar);
  const [isLoading, setIsLoading] = React.useState(true);

  const initSidebar = (sidebarId: string | undefined, isOpen?: boolean) => {
    const initialState = getInitialState(sidebarId as string, isOpen as boolean);

    setSidebar(initialState);
    setIsLoading(false);
  };

  const updateSidebar = (value: Partial<ISidebar>) => {
    setSidebar((prev) => ({ ...prev, ...value }));
  };

  return {
    sidebar,
    isLoading,
    initSidebar,
    updateSidebar,
  };
};
