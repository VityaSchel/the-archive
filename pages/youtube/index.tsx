import styles from '%/styles/YouTube.module.scss'
import videos from '%/constants/videos.json'

export default function YouTubeVideos(props) {
  return (
    <div className={styles.videos}>
      {videos.map(video => (
        <Video 
          key={video.codeName}
          data={video}
        />
      ))}
    </div>
  )
}

function Video(props) {
  return (
    <div className={styles.video}>
      {/* <img src={props.thumbnail} alt={t('')} /> */}
      {JSON.stringify(props.data)}
    </div>
  )
}

export const getStaticProps = () => {
  return {
    props: {
      videos
    }
  }
}
