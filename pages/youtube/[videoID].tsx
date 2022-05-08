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

YouTubeVideoPage.propTypes = {
  video: PropTypes.object.isRequired,
  nextVideos: PropTypes.arrayOf(PropTypes.object).isRequired
}
interface YouTubeVideoPageProps {
  video: typeof videos[number]
  nextVideos: typeof videos
}
function YouTubeVideoPage(props: YouTubeVideoPageProps) {
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
        </div>
        <div className={styles.nextVideos}>
          <Typography variant='h6'>Следующие видео</Typography>
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