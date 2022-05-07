import Header from '%/components/Header'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'next-i18next'
import ButtonWithArrow from '%/components/button'

const Home: NextPage = () => {
  const { t } = useTranslation()
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />

      <main className={styles.main}>
        <div className={styles.topBlock}>
          <div className={styles.info}>
            <Typography variant='h1' className={styles.heading}>{t('pages.home.heading')}</Typography>
            <Typography variant='h2' className={styles.subheading}>{t('pages.home.subheading')}</Typography>
            <ButtonWithArrow className={styles.button}>{t('pages.home.read_article')}</ButtonWithArrow>
          </div>
          <video muted autoPlay loop src='https://ik.imagekit.io/hloth/thinking_emoji.webm' />
        </div>
      </main>
    </div>
  )
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },  
})

export default Home
