import React from 'react'
import styles from '%/styles/NotFound.module.scss'
import videos from '%/constants/videos.json'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '%/components/Header'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'

const PageNotFound: NextPage = () => {
  const { t } = useTranslation()

  return (
    <main className={styles.container}>
      <Head>
        <title>{t('pages.page_not_found.title')}</title>
      </Head>
      <Header placeholder={false} />
      <div className={styles.notFound}>
        <h1>{t('pages.page_not_found.title')}</h1>
        <p>{t('pages.page_not_found.description')}</p>
      </div>
    </main>
  )
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      videos,
      ...await serverSideTranslations(locale, ['common'])
    }
  }
}

export default PageNotFound