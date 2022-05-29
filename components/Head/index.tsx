import Head from 'next/head'

export default function CustomHead(props) {
  return (
    <Head>
      <link href="//vjs.zencdn.net/6.1.0/video-js.css" rel="stylesheet" />
      {props.children}
    </Head>
  )
}