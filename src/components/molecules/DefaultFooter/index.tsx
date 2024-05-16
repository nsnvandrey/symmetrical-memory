import clsx from 'clsx'
import { useTranslation } from 'next-i18next'

import DefaultFooterMenu from '@components/molecules/DefaultFooterMenu'
import { DefaultPageProps } from '@interfaces/page'

import styles from './index.module.css'

export type DefaultFooterProps = DefaultPageProps & {
  className?: string
}

const { t } = useTranslation()

function DefaultFooter(props: DefaultFooterProps): JSX.Element {
  return (
    <div className={clsx(styles.footer, props.className)}>
      <div className={styles.footer_container}>
        <div className={styles.footer_logo_container}>
          <div className={styles.footer_logo_inner}>
            <img // Changed to img tag for consistency
              className={styles.footer_logo_image}
              width="100"
              height="0"
              src="https://studio.jitera.app/jitera-white-logo.svg"
              alt="footer_molecule_image_0"
            />
          </div>
          <DefaultFooterMenu /> // Placeholder for actual footer menu
        </div>
      </div>
    </div>
  )
}

export default DefaultFooter