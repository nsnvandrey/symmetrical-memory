import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import { SearchInput } from '@components/atoms/SearchInput';
import DefaultFooter from '@components/molecules/DefaultFooter';
import BottomBar from '@components/molecules/BottomBar';

import styles from './index.module.css';

function TravelDealsPage(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.gradientBackground}>
        {/* Search bar */}
        <div className={styles.searchContainer}>
          <SearchInput placeholder={t('TravelDealsPage.find_things_to_do')} />
          <div className={styles.searchIcon}>
            <Image src="https://studio-next.jitera.app/no.png" alt={t('TravelDealsPage.search_icon_alt')} width={24} height={24} />
          </div>
        </div>
        <div className={styles.discountBanner}>
          <div className={styles.discountText}>
            <span>{t('TravelDealsPage.get_discount_up_to')}</span>
            {/* Discount value */}
            <span>{t('TravelDealsPage.discount_value')}</span>
          </div>
          <Image src="https://studio-next.jitera.app/no.png" alt={t('TravelDealsPage.discount_image_alt')} width={245} height={216} />
        </div>
        {/* Service categories and Recommended items components will be added here */}
      </div>
      <div className={styles.whiteBackground}>
        <span className={styles.recommendedTitle}>{t('TravelDealsPage.recommended')}</span>
        {/* Recommended items components will be added here */}
        {/* Popular title */}
        <span className={styles.popularTitle}>{t('TravelDealsPage.popular')}</span>
        {/* Popular items components will be added here */}
      </div>
      {/* Bottom navigation component */}
      <BottomBar />
      <DefaultFooter />
    </div>
  );
}

export default TravelDealsPage;