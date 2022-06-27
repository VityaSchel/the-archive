import React from 'react'
import PropTypes from 'prop-types'
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  BigPlayButton,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton
} from 'video-react'
import DownloadButton from './DownloadButton'

Video.propTypes = {
  src: PropTypes.string,
  thumbnail: PropTypes.string,
}

interface VideoProps {
  src: string
  thumbnail: string
}

export default function Video(props: VideoProps) {
  {
  // <Player
  //   aspectRatio='16:9'
  //   src={props.src}
  //   poster={props.thumbnail}
  // >

  //   <ControlBar>
  //     {/* <ReplayControl seconds={10} order={1.1} />
  //     <ForwardControl seconds={30} order={1.2} /> */}
  //     <BigPlayButton position="center" />
  //     <VolumeMenuButton />
  //     <CurrentTimeDisplay order={4.1} />
  //     <TimeDivider order={4.2} />
  //     <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
  //     <DownloadButton order={7} />
  //   </ControlBar>
  // </Player>
  }
  return (
    <video src={props.src} poster={props.thumbnail} controls />
  )
}