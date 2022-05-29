import React from 'react'
import { useCallback, useEffect, useState } from 'react'
import videojs from 'video.js'
import "video.js/dist/video-js.css"

const Player = (props) => {
  const videoRef = React.useRef()

  useEffect(() => {
    if (!videoRef.current) return
    const player = videojs(videoRef.current, props)
    return () => {
      player.dispose()
    }
  }, [videoRef, props])

  return (
    <>
      <h1>The implementation below is using react functions</h1>
      <div data-vjs-player>
        <video ref={videoRef} className="video-js" playsInline />
      </div>
    </>
  )
}

export default Player