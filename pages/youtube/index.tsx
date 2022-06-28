import React from 'react'
import styles from '%/styles/YouTube.module.scss'
import videos from '%/constants/videos.json'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '%/components/Header'
import type { NextPage } from 'next'
import Head from '%/components/Head'
import clone from 'just-clone'
import Video from '%/components/Video'
import { useTranslation } from 'next-i18next'
import { getThumbnailURL } from '%/components/utils'
import { MenuItem, Select } from '@mui/material'

type Vid = typeof videos[number]

const YouTubeVideos: NextPage = () => {
  const { t } = useTranslation('common')
  const fi = (item: Vid) => videos.findIndex(vid => vid.codeName === item.codeName)
  const v = (item: Vid) => typeof item.views === 'number' ? item.views : Number(item.views.replace(' ', '').replace(/^[^0-9]/, ''))
  const sortDateDesc = (a: Vid, b: Vid) => fi(a) > fi(b) ? 1 : -1
  const sortDateAsc = (a: Vid, b: Vid) => fi(a) < fi(b) ? 1 : -1
  const sortViewsDesc = (a: Vid, b: Vid) => v(b) - v(a)
  const funcs = { 'datedesc': sortDateDesc, 'dateasc': sortDateAsc, 'viewsdesc': sortViewsDesc }
  const [sortFunc, setSortFunc] = React.useState(() => sortDateDesc)
  const [sortFuncID, setSortFuncID] = React.useState('datedesc')

  return (
    <main className={styles.container}>
      <Head 
        title={t('pages.youtube.pages.videos.title')}
      />
      <Header 
        placeholder={false}
      />
      <div className={styles.select}>
        <Select
          value={sortFuncID}
          onChange={event => {
            setSortFuncID(event.target.value)
            setSortFunc(() => funcs[event.target.value])
          }}
        >
          <MenuItem value={'datedesc'}>{t('pages.youtube.pages.videos.sort_functions.date_desc')}</MenuItem>
          <MenuItem value={'dateasc'}>{t('pages.youtube.pages.videos.sort_functions.date_asc')}</MenuItem>
          <MenuItem value={'viewsdesc'}>{t('pages.youtube.pages.videos.sort_functions.views_desc')}</MenuItem>
        </Select>
      </div>
      <div className={styles.videos}>
        {clone(videos).sort(sortFunc).map(video => (
          <Video 
            key={video.codeName}
            title={video.name}
            views={video.views === '' ? null : video.views}
            date={video.uploadDate}
            codeName={video.codeName}
            drafts={video.draftPlaylist}
            thumbnail={getThumbnailURL(video.thumbnail, video.filename)}
            lost={video.lost}
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