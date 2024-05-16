import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import styles from './index.module.css';

const TravelDealsPage = () => {
  const { t } = useTranslation('TravelDealsPage');

  return (
    <div className={styles.pageContainer}>
      <div className={styles.backgroundColor}>
        <div className={styles.searchContainer}>
          <div className={styles.searchInputContainer}>
            <Image src="https://studio-next.jitera.app/no.png" alt={t('search')} className={styles.searchIcon} />
            <span className={styles.searchText}>{t('find_things_to_do')}</span>
          </div>
          <div className={styles.magnifyingGlassContainer}>
            <Image src="https://studio-next.jitera.app/no.png" alt={t('magnifying_glass')} className={styles.searchIcon} />
          </div>
        </div>
        <div className={styles.discountCard}>
          <div className={styles.discountCardContent}>
            <span className={styles.discountText}>{t('get_discount_up_to')}</span>
            <span className={styles.discountPercentage}>70%</span>
          </div>
          <Image src="https://studio-next.jitera.app/no.png" alt={t('happy_couple')} className={styles.happyCoupleImage} />
        </div>
        <div className={styles.categoryButtonsContainer}>
          {/* Repeated category button block */}
          <div className={styles.categoryButtonBlock}>
            <div className={styles.categoryButton}>
              <Image src="https://studio-next.jitera.app/no.png" alt={t('hotel')} className={styles.categoryIcon} />
            </div>
            <span className={styles.categoryText}>{t('hotel')}</span>
          </div>
          {/* ... other category buttons ... */}
        </div>
        <div className={styles.tabsContainer}>
          <span className={styles.tabTitle}>{t('recommended')}</span>
          {/* ... Recommended and Popular content ... */}
        </div>
        <div className={styles.bottomNavigationBar}>
          {/* Repeated navigation button block */}
          <div className={styles.navigationButtonBlock}>
            <Image src="https://studio-next.jitera.app/no.png" alt={t('home')} className={styles.navigationIcon} />
            <span className={styles.navigationText}>{t('home')}</span>
          </div>
          {/* ... other navigation buttons ... */}
        </div>
      </div>
    </div>
  );
};

export default TravelDealsPage;