import React from 'react'
import styles from '%/styles/YouTube.module.scss'
import videos from '%/constants/videos.json'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '%/components/Header'
import type { NextPage } from 'next'
import Head from 'next/head'
import clone from 'just-clone'
import Video from '%/components/Video'

const YouTubeVideos: NextPage = () => {
  const fi = item => videos.findIndex(vid => vid.codeName === item.codeName)
  const sortDateDesc = (a: typeof videos[number], b: typeof videos[number]) => fi(a) > fi(b) ? 1 : -1
  const sortDateAsc = (a: typeof videos[number], b: typeof videos[number]) => fi(a) < fi(b) ? 1 : -1
  const sortViewsDesc = (a: typeof videos[number], b: typeof videos[number]) => {}
  const [sortFunc, setSortFunc] = React.useState(() => sortDateDesc)

  return (
    <main className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <div className={styles.videos}>
        {clone(videos).sort(sortFunc).map(video => (
          <Video 
            key={video.codeName}
            title={video.name}
            views={video.views === '' ? null : video.views}
            date={video.uploadDate}
            codeName={video.codeName}
          />
        ))}
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

export default YouTubeVideos