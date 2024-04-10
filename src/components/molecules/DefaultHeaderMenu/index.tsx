import clsx from 'clsx'
import { useTranslation } from 'next-i18next'

import { Text } from '@components/atoms/Text'
import { DefaultPageProps } from '@interfaces/page'

import styles from './index.module.css'

export type DefaultHeaderMenuProps = DefaultPageProps & {
  className?: string
}

function DefaultHeaderMenu(props: DefaultHeaderMenuProps): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className={clsx(styles.header_menu_wrapper, props.className)}>
      <div className={styles.header_menu_container}>
        <Text href="/" textType="Link" className={styles.header_menu_item}>
          {t('common.menu.home')}
        </Text>
        <Text href="/" textType="Link" className={styles.header_menu_item}>
          {t('common.menu.news')}
        </Text>
        <Text href="/" textType="Link" className={styles.header_menu_item}>
          {t('common.menu.contact_us')}
        </Text>
        <Text href="/" textType="Link" className={styles.header_menu_item}>
          {t('common.menu.about')}
        </Text>
      </div>
    </div>
  )
}

export default DefaultHeaderMenu
