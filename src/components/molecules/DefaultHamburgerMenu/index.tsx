import { useTranslation } from 'next-i18next'

import { HamburgerMenu } from '@components/atoms/HamburgerMenu'
import { Text } from '@components/atoms/Text'
import { DefaultPageProps } from '@interfaces/page'

import styles from './index.module.css'

export type DefaultHamburgerMenuProps = DefaultPageProps & {
  className?: string
}

function DefaultHamburgerMenu(props: DefaultHamburgerMenuProps): JSX.Element {
  const { t } = useTranslation()

  return (
    <div className={props.className}>
      <div className={styles.container}>
        <HamburgerMenu
          drawerTitle={`[Title]`}
          iconProps={{ iconName: 'MdMenu' }}
          drawerProps={{ placement: 'right', width: 256, closable: true }}
          buttonProps={{ buttonType: 'primary' }}
          buttonStyle={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
        >
          <div className={styles.inner_container}>
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
        </HamburgerMenu>
      </div>
    </div>
  )
}

export default DefaultHamburgerMenu
