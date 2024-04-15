import React from 'react';
import styles from './index.module.css';

export interface BottomBarProps extends React.HTMLAttributes<HTMLDivElement> {
  icons: string[];
}

const BottomBar: React.FC<BottomBarProps> = ({ icons, ...props }) => {
  return (
    <div className={styles.bottomBar} {...props}>
      {icons.map((icon, index) => (
        <span key={index} className={styles.icon}>{icon}</span>
      ))}
    </div>
  );
};

export { BottomBar };
