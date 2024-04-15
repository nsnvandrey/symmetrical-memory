import type { GetStaticPropsContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import TravelAppMobileInterface from '@components/pages/TravelAppMobileInterface'

export async function getStaticProps(context: GetStaticPropsContext) {
  const { locale = 'en' } = context
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'travel'])), // Include 'travel' namespace for translations
    },
    revalidate: 10, // Optionally, set revalidation time
  }
}

export default TravelAppMobileInterface
