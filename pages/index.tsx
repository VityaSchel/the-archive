import PropTypes from 'prop-types'
import Header from '%/components/Header'
import type { NextPage } from 'next'
import Head from '%/components/Head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'next-i18next'
import ButtonWithArrow from '%/components/Button'
import Button from '@mui/material/Button'
import { Card } from '@mui/material'
import { format } from 'date-fns'
import { ru, enUS } from 'date-fns/locale'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const { t } = useTranslation()

  return (
    <main className={styles.main}>
      <Head 
        title={t('pages.home.title')}
      />
      <Header />

      <TopBlock />
      <div className={styles.cards}>
        <PageCard
          translationCode='youtube'
          img='https://ik.imagekit.io/hloth/the-archive-static/youtube.png?tr=n-landing_thumb'
          lastUpdate={new Date('2024-11-24')}
        />
      </div>
    </main>
  )
}

function TopBlock() {
  const { t } = useTranslation()

  return (
    <div className={styles.topBlock}>
      <div className={styles.info}>
        <Typography variant='h1' className={styles.heading}>{t('pages.home.heading')}</Typography>
        <Typography variant='h2' className={styles.subheading}>{t('pages.home.subheading')}</Typography>
        <ButtonWithArrow className={styles.button} variant='contained' disabled>
          {t('pages.home.read_article')}
        </ButtonWithArrow>
      </div>
      <div className={styles.video}>
        <video muted autoPlay loop src='https://ik.imagekit.io/hloth/the-archive-static/thinking_emoji.webm' />
      </div>
    </div>
  )
}

PageCard.propTypes = {
  translationCode: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  lastUpdate: PropTypes.instanceOf(Date)
}
interface PageCardProps {
  translationCode: string
  img: string
  lastUpdate?: Date
}
function PageCard(props: PageCardProps) {
  const { t, i18n } = useTranslation()
  const router = useRouter()

  return (
    <Card className={styles.pageCard}>
      <div className={styles.content}>
        <Typography variant='h3' className={styles.title}>{t('pages.home.cards.' + props.translationCode + '.title')}</Typography>
        <Typography variant='h4' className={styles.description}>{t('pages.home.cards.' + props.translationCode + '.description')}</Typography>
        {props.lastUpdate && (
          <Typography variant='caption' className={styles.lastUpdate}>{t('pages.home.cards.last_update')}: {
            format(props.lastUpdate, 'd MMMM yyyy', { locale: i18n.language === 'ru' ? ru : enUS })
          }</Typography>
        )}
        {props.lastUpdate ? (
          <ButtonWithArrow 
            className={styles.button} 
            variant='contained' 
            onClick={() => router.push(props.translationCode, undefined, { locale: i18n.language })}
          >
            {t('pages.home.cards.' + props.translationCode + '.button')}
          </ButtonWithArrow>
        ) : (
          <Button className={styles.button} variant='contained' disabled>
            {t('pages.home.cards.' + props.translationCode + '.button')}
          </Button>
        )}
      </div>
      <div className={styles.image}>
        <Image
          src={props.img}
          alt={t('pages.home.cards.' + props.translationCode + '.image_alt')}
          // height={200}
          layout='fill'
          objectFit='contain'
          objectPosition='right'
        />
      </div>
    </Card>
  )
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },  
})

export default Home
