import React, { useMemo } from 'react'; // Added useMemo import
import { useTranslation } from 'react-i18next'; // Correct import for useTranslation hook
import { SearchBar } from '@components/molecules/SearchBar';
import { CategoryCard } from '@components/molecules/CategoryCard';
import { BottomBar } from '@components/molecules/BottomBar';
import styles from './index.module.css';

const TravelAppMobileInterface = () => {
  const { t } = useTranslation();

  // Use useMemo for derived state
  const categories = useMemo(() => [
    { icon: '🏨', label: t('hotel'), backgroundColor: '#FFD93D' },
    { icon: '🚗', label: t('car_rental'), backgroundColor: '#FF8A65' },
    { icon: '👨‍🏫', label: t('tourguide'), backgroundColor: '#4ECDC4' },
    { icon: '🍲', label: t('culinary'), backgroundColor: '#FF6B6B' },
    { icon: '🗺️', label: t('destination'), backgroundColor: '#4D96FF' },
    { icon: '•••', label: t('more'), backgroundColor: '#C4C4C4' },
  ], [t]); // Add dependency array with t

  const bottomBarIcons = ['🏠', '🔍', '🔔', '👤'];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <SearchBar placeholder={t('find_things_to_do')} />
      </div>
      <div className={styles.discountBanner}>
        <div className={styles.discountText}>{t('get_discount_up_to')}</div>
        <div className={styles.discountPercentage}>{t('70_percent')}</div> {/* Use translation for discount percentage */}
        <div className={styles.dots}>....</div>
      </div>
      <div className={styles.categoryContainer}>
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            icon={category.icon}
            label={category.label}
            backgroundColor={category.backgroundColor}
          />
        ))}
      </div>
      <div className={styles.recommendedSection}>
        <div className={styles.recommendedLabel}>{t('recommended')}</div>
        <div className={styles.popularLabel}>{t('popular')}</div>
      </div>
      <div className={styles.destinationCards}>
        {/* Destination cards will be mapped here */}
      </div>
      <BottomBar icons={bottomBarIcons} />
    </div>
  );
};

export default TravelAppMobileInterface;
