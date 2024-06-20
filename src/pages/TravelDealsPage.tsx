import React from 'react';
import type { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import TravelDealsPageComponent from '@components/pages/TravelDealsPage';

export async function getStaticProps(context: GetStaticPropsContext) {
  const { locale = 'en' } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale, ['all'])),
    },
  };
}

export default TravelDealsPageComponent;