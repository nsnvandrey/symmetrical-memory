import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import styles from './index.module.css';

export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch, ...rest }) => {
  const { t } = useTranslation();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && onSearch) {
      onSearch((event.target as HTMLInputElement).value);
    }
  };

  return (
    <div className={styles.searchInputContainer}>
      <input
        {...rest}
        className={styles.searchInput}
        onKeyDown={handleKeyDown}
        placeholder={t('search_input.placeholder')}
      />
      <div className={styles.searchIcon}>
        <Image src="https://studio-next.jitera.app/no.png" alt={t('search_input.icon_alt')} width={20} height={20} />
      </div>
    </div>
  );
};

export default SearchInput;
import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import styles from './index.module.css';

export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch, ...rest }) => {
  const { t } = useTranslation();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && onSearch) {
      onSearch((event.target as HTMLInputElement).value);
    }
  };

  return (
    <div className={styles.searchInputContainer}>
      <input
        {...rest}
        className={styles.searchInput}
        onKeyDown={handleKeyDown}
        placeholder={t('search_input.placeholder')}
      />
      <div className={styles.searchIcon}>
        <Image src="https://studio-next.jitera.app/no.png" alt={t('search_input.icon_alt')} width={20} height={20} />
      </div>
    </div>
  );
};

export default SearchInput;