import React from 'react';
import clsx from 'clsx';
import styles from './index.module.css';

export interface IconTextProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: string;
  text: string;
  className?: string;
}

const IconText: React.FC<IconTextProps> = ({ icon, text, className, ...props }) => {
  return (
    <div className={clsx(styles.iconText, className)} {...props}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export { IconText };
