import { useTranslation } from 'next-i18next'

import DefaultHeader from '@components/molecules/DefaultHeader'
import { Row } from '@components/atoms/Row'
import { Text } from '@components/atoms/Text'
import { Button } from '@components/atoms/Button'
import DefaultFooter from '@components/molecules/DefaultFooter'
import { DefaultPageProps } from '@interfaces/page'

import styles from './index.module.css'

export type Page404Props = DefaultPageProps & {
  className?: string
}

function Page404Page(props: Page404Props): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className={styles.page_container}>
      <DefaultHeader className={styles.default_header} />
      <div className={styles.container}>
        <div className={styles.inner}>
          <Row gutter={[30, 30]} justify="center" align="top" className={styles.row}>
            <Text textType="Text" className={styles.text_status}>{`404`}</Text>
          </Row>
          <Row gutter={[30, 28]} justify="center" align="top" className={styles.row}>
            <Text textType="Text" className={styles.text_title}>
              {t('404.title')}
            </Text>
          </Row>
          <Row gutter={[30, 30]} justify="center" align="top" className={styles.row}>
            <Text textType="Text" className={styles.text_title}>
              {t('404.description')}
            </Text>
          </Row>
          <Row gutter={[30, 30]} justify="center" align="top" className={styles.row}>
            <Button linkTo="/" buttonType="primary" className={styles.button}>
              {t('common.go_to_home')}
            </Button>
          </Row>
        </div>
      </div>
      <DefaultFooter className={styles.default_footer} />
    </div>
  )
}

export default Page404Page
