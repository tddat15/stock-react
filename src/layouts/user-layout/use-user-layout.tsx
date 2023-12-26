import React from 'react';
import { IUserLayoutStore, closeSidebar, openSidebar, loadInititalSidebar } from './service';

/**
 * useUserLayout hook is controller api that help to communicate with store
 * @param {object} store - IUserLayoutStore
 * @return {object} new config object
 */
export const useUserLayout = (store: IUserLayoutStore) => {
  const loadSidebar = React.useCallback((sidebarId: string | undefined, isOpen?: boolean) => {
    loadInititalSidebar({
      initSidebar: store.initSidebar,
      options: {
        sidebarId,
        isOpen,
      },
    });
  }, []);

  const toggleSidebar = () => {
    !store.sidebar.open
      ? openSidebar({
          updateSidebar: store.updateSidebar,
        })
      : closeSidebar({
          updateSidebar: store.updateSidebar,
        });
  };

  return {
    open: store.sidebar.open,
    items: store.sidebar.items,
    isLoading: !Array.isArray(store.sidebar.items) || store.isLoading,
    loadSidebar,
    toggleSidebar,
  };
};
