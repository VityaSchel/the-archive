import React from 'react'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'

interface HeadProps {
  children?: React.ReactNode,
  title: string
  description?: string
  banner?: {
    src: string
    width: number
    height: number
  }
}

export default function CustomHead(props: HeadProps) {
  const { t } = useTranslation('common')
  
  return (
    <Head>
      {/* <link href="//vjs.zencdn.net/6.1.0/video-js.css" rel="stylesheet" /> */}
      <meta name="description" content={props.description ?? t('head.description')} />
      {props.children}
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#121212" />
      <meta name="apple-mobile-web-app-title" content="The Archive by hloth" />
      <meta name="application-name" content="The Archive by hloth" />
      <meta name="msapplication-TileColor" content="#121212" />
      <meta name="theme-color" content="#121212" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      <meta property="og:title" content={props.title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={props.description} />
      {props.banner && (<>
        <meta property="og:image" content={props.banner.src} />
        <meta property="og:image:width" content={String(props.banner.width)} />
        <meta property="og:image:height" content={String(props.banner.height)} />
      </>)}
      {props.children}
    </Head>
  )
}