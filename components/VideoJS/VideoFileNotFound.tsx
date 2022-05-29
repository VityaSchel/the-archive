import { useTranslation } from 'next-i18next'
import styles from './styles.module.scss'

export default function VideoFileNotFound() {
  const { t } = useTranslation()

  return (
    <div className={styles.videoFileNotFound}>
      <h3>{t('pages.youtube.pages.videos.video_file_not_found.heading')}</h3>
      <p>{t('pages.youtube.pages.videos.video_file_not_found.description')}</p>
    </div>
  )
}