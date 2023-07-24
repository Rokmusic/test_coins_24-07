import React from 'react';

import styles from './with-sidebar.module.css';

import Sidebar from '@/components/common/layout/sidebar';

const WithSidebar = <T extends Record<string, unknown>>(Component: React.FC<T>) => {
  // TODO refactor
  // eslint-disable-next-line react/display-name
  return (props: T) => (
    <div className={`container ${styles.withSidebar}`}>
      <div className={styles.componentContainer}>
        <Component {...props} />
      </div>
      <div className={styles.sidebarContainer}>
        <Sidebar />
      </div>
    </div>
  );
};

export default WithSidebar;
