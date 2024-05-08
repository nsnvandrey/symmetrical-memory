import React from 'react';
import styles from './index.module.css'; // Assuming styles are already correct

export interface CategoryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: string;
  label: string;
  backgroundColor: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, label, backgroundColor, ...props }) => {
  return ( // Updated to match the provided HTML structure
    <div className={styles.categoryCard} style={{ backgroundColor }} {...props}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
};

export { CategoryCard };
