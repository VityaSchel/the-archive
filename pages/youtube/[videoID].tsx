import React from 'react'
import PropTypes from 'prop-types'
import videos from '%/constants/videos.json'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import styles from '%/styles/VideoPage.module.scss'
import Header from '%/components/Header'
import Head from 'next/head'
import Video from '%/components/Video'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'next-i18next'
import { pluralize } from '%/components/utils'

YouTubeVideoPage.propTypes = {
  video: PropTypes.object.isRequired,
  nextVideos: PropTypes.arrayOf(PropTypes.object).isRequired
}
interface YouTubeVideoPageProps {
  video: typeof videos[number]
  nextVideos: typeof videos
}
function YouTubeVideoPage(props: YouTubeVideoPageProps) {
  const { t } = useTranslation()

  const likes = props.video.likes === '' ? null : props.video.likes
  const dislikes = props.video.dislikes === '' ? null : props.video.dislikes
  
  return (
    <main className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <div className={styles.innerContainer}>
        <div className={styles.video}>
          <div className={styles.player}>
            <Skeleton variant='rectangular' height='100%' />
          </div>
          <Typography component='h1' className={styles.title}>{props.video.name}</Typography>
          <div className={styles.info}>
            <Typography variant='caption' className={styles.caption}>
              <span>{props.video.views} {pluralize(props.video.views, t('pages.youtube.pages.videos.item.views'))}</span>
              <span>&nbsp;•&nbsp;</span>
              <span>{props.video.uploadDate}</span>
            </Typography>
            {(likes !== null || dislikes !== null) && <div className={styles.ratio}>
              <div className={styles.buttons}>
                <div>
                  <svg width="1em" height="1em" viewBox="0 0 24 24">
                    <path d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z" fill="currentColor" />
                  </svg>
                  {likes === null ? t('pages.youtube.pages.video.unknown') : likes}
                </div>
                <div>
                  <svg width="1em" height="1em" viewBox="0 0 24 24">
                    <path d="M20 3h-1v13h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM4 16h7l-1.122 3.368A2 2 0 0 0 11.775 22H12l5-5.438V3H6l-3.937 8.649l-.063.293V14a2 2 0 0 0 2 2z" fill="currentColor" />
                  </svg>
                  {dislikes === null ? t('pages.youtube.pages.video.unknown') : dislikes}
                </div>
              </div>
              <div className={styles.ratioBar}>
                <div
                  className={styles.filledRatioBar} 
                  style={{ width: likes / (likes + dislikes) * 100 + '%'  }} 
                />
              </div>
            </div>}
          </div>
          <hr />
        </div>
        <div className={styles.nextVideos}>
          <Typography variant='h6'>{t('pages.youtube.pages.video.next_videos')}</Typography>
          {props.nextVideos.map(video => (
            <Video 
              key={video.codeName}
              title={video.name}
              views={video.views === '' ? null : video.views}
              date={video.uploadDate}
              codeName={video.codeName}
              horizontal
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export const getStaticPaths = () => ({
  paths: ['en', 'ru']
    .map(locale => 
      videos.map(video => ({ params: { videoID: video.codeName }, locale }))
    )
    .reduce((prev, cur) => prev.concat(cur), []),
  fallback: false
})

export const getStaticProps = async ({ params, locale }: { params: { videoID: string }, locale: string }) => {
  const startIndex = videos.findIndex(video => video.codeName === params.videoID)
  let nextVideos = videos.slice(Math.max(0, startIndex-10), startIndex).reverse()
  if (nextVideos.length < 10) {
    nextVideos.push(...videos.slice(startIndex+1, Math.max(0, startIndex+9)))
  }
  return {
    props: {
      video: videos.find(video => video.codeName === params.videoID),
      nextVideos,
      ...await serverSideTranslations(locale, ['common'])
    }
  }
}

export default YouTubeVideoPage