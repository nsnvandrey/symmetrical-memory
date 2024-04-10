import { useTranslation } from 'next-i18next'

import { Text } from '@components/atoms/Text'
import { DefaultPageProps } from '@interfaces/page'

import styles from './index.module.css'

export type DefaultFooterMenuProps = DefaultPageProps & {
  className?: string
}

function DefaultFooterMenu(props: DefaultFooterMenuProps): JSX.Element {
  const { t } = useTranslation()

  return (
    <div className={props.className}>
      <div className={styles.footer_menu}>
        <Text href="/" textType="Link" className={styles.footer_menu_item}>
          {t('common.menu.home')}
        </Text>
        <Text href="/" textType="Link" className={styles.footer_menu_item}>
          {t('common.menu.news')}
        </Text>
        <Text href="/" textType="Link" className={styles.footer_menu_item}>
          {t('common.menu.contact_us')}
        </Text>
        <Text href="/" textType="Link" className={styles.footer_menu_item}>
          {t('common.menu.about')}
        </Text>
      </div>
    </div>
  )
}

export default DefaultFooterMenu
