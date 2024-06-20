import React from 'react';
import { useTranslation } from 'next-i18next';
import clsx from 'clsx';

import styles from './index.module.css';

export interface BottomBarProps {
  className?: string;
}

const BottomBar: React.FC<BottomBarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={clsx(styles.bottomBar, className)}>
      {/* Bottom navigation items */}
      {/* Example item */}
      {/* <div className={styles.navigationItem}>
          <span>{t('bottom_bar.home')}</span>
        </div> */}
      {/* Add more navigation items here */}
    </div>
  );
};

export default BottomBar;
