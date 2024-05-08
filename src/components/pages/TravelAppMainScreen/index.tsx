import React, { useMemo } from 'react';
import { useTranslation } from 'next-i18next'; // Updated import for i18n
import { SearchBar } from '@components/molecules/SearchBar';
import { CategoryCard } from '@components/molecules/CategoryCard';
import { BottomBar } from '@components/molecules/BottomBar';
import styles from './index.module.css';

const TravelAppMainScreen = () => {
  const { t } = useTranslation();

  // Translation keys updated to match the provided translation file
  const categories = useMemo(() => [
    { icon: '🏨', label: t('common.menu.hotel'), backgroundColor: '#FFFFFF' },
    { icon: '🚗', label: t('common.menu.car_rental'), backgroundColor: '#FFFFFF' },
    { icon: '👨‍🏫', label: t('common.menu.tourguide'), backgroundColor: '#FFFFFF' },
    { icon: '🍲', label: t('common.menu.culinary'), backgroundColor: '#FFFFFF' },
    { icon: '🗺️', label: t('common.menu.destination'), backgroundColor: '#FFFFFF' },
    { icon: '•••', label: t('common.menu.more'), backgroundColor: '#FFFFFF' },
  ], [t]); // Dependencies array updated to include 't'

  const bottomBarIcons = ['🏠', '🔍', '👤'];

  return (
    <div className={styles.pageContainer}>
      <SearchBar placeholder={t('find_things_to_do')} className={styles.header} />
      <div className={styles.discountBanner}>
        <span className={styles.discountText}>{t('get_discount_up_to')}</span>
        <span className={styles.discountPercentage}>{t('common.menu.70_percent')}</span>
        {/* Carousel dots SVG here */}
      </div>
      <div className={styles.navigationMenu}>
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            icon={category.icon}
            label={category.label}
            backgroundColor={category.backgroundColor} // Note: Inline styles should be avoided, consider using CSS classes
          />
        ))}
      </div>
      <section className={styles.recommendedTours}>
        <div className={styles.tourLabels}>
          <span className={styles.recommendedLabel}>{t('recommended')}</span> {/* Missing translation keys for 'recommended' */}
          <span className={styles.popularLabel}>{t('popular')}</span> {/* Missing translation keys for 'popular' */}
        </div>
        <div className={styles.tourCards}> {/* Tour cards should be implemented as a separate component */}
          {/* Tour cards will be mapped here */}
        </div>
      </section>
      <BottomBar icons={bottomBarIcons} className={styles.bottomBar} />
    </div>
  );
};

export default TravelAppMainScreen;
