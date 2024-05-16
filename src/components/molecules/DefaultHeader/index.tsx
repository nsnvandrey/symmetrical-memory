import Image from 'next/image'
import clsx from 'clsx'
import { useTranslation } from 'next-i18next' // Added import for useTranslation

import DefaultHeaderMenu from '@components/molecules/DefaultHeaderMenu'
import DefaultHamburgerMenu from '@components/molecules/DefaultHamburgerMenu'
import { DefaultPageProps } from '@interfaces/page'

import styles from './index.module.css'

export type DefaultHeaderProps = DefaultPageProps & {
  className?: string
}

const { t } = useTranslation() // Initialized useTranslation hook

function DefaultHeader(props: DefaultHeaderProps): JSX.Element {
  return (
    <div className={clsx(styles.header, props.className)}>
      <div className={styles.header_container}>
        <div className={styles.header_imgage_container}>
          <Image
            className={styles.header_image} // Placeholder for actual header image
            width="100"
            height="0"
            src="https://studio.jitera.app/jitera-white-logo.svg"
            alt="header_image_0"
          />
        </div>
        <div className={styles.header_desktop}>
          <DefaultHeaderMenu /> // Placeholder for actual header menu
        </div>
        <div className={styles.header_mobile}>
          <DefaultHamburgerMenu />
        </div>
      </div>
    </div>
  )
}

export default DefaultHeader