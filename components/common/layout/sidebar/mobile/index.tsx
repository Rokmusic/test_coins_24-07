'use client';

import { Sidebar as SidebarUI } from 'primereact/sidebar';
import Sidebar from '..';
import { useEffect } from 'react';

interface Props {
  isWide: boolean;
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export default function SidebarMobile(props: Props) {
  const { setVisible, visible, isWide } = props;

  useEffect(() => {
    if (visible) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [visible]);

  return (
    <div>
      <SidebarUI
        showCloseIcon
        position='right'
        visible={visible}
        onHide={() => setVisible(false)}
      >
        <Sidebar />
      </SidebarUI>
    </div>
  );
}
