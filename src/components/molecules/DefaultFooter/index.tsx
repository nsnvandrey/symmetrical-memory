import Image from 'next/image'
import clsx from 'clsx'
import { useTranslation } from 'next-i18next'

import DefaultFooterMenu from '@components/molecules/DefaultFooterMenu'
import { DefaultPageProps } from '@interfaces/page'

import styles from './index.module.css'

export type DefaultFooterProps = DefaultPageProps & {
  className?: string
}

function DefaultFooter(props: DefaultFooterProps): JSX.Element {
  const { t } = useTranslation();
  return (
    <div className={clsx(styles.footer, props.className)}>
      <div className={styles.footer_container}>
        <div className={styles.footer_logo_container}>
          <div className={styles.footer_logo_inner}>
            <Image
              className={styles.footer_logo_image}
              width={100}
              height="0"
              src="https://studio.jitera.app/jitera-white-logo.svg"
              alt={t('default_footer.logo_alt')}
            />
          </div>
          <DefaultFooterMenu />
        </div>
      </div>
    </div>
  )
}

export default DefaultFooter