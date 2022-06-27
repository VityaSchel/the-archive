import { useTranslation } from 'next-i18next'
import styles from './styles.module.scss'

export default function VideoFileNotFound(props) {
  const { t } = useTranslation()

  return (
    <div className={styles.videoFileNotFound}>
      <h3>{t('pages.youtube.pages.videos.video_file_not_found.heading')}</h3>
      <p>{t('pages.youtube.pages.videos.video_file_not_found.description')}</p>
      {props.note && (
        <div className={styles.note}>
          <p>{t('pages.youtube.pages.videos.video_file_not_found.note')}</p>
          <p className={styles.noteText}>{props.note}</p>
        </div>
      )}
    </div>
  )
}