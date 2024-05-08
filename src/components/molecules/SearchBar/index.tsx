import React from 'react';
import { Input } from '@components/atoms/Input';
import { IconText } from '@components/atoms/IconText';
import styles from './index.module.css';

export interface SearchBarProps extends React.HTMLAttributes<HTMLDivElement> {
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, ...props }) => {
  return (
    <div className={styles.searchBar} {...props}>
      <IconText icon="🔍" text="" />
      <Input placeholder={placeholder} />
    </div>
  );
};

export { SearchBar };
