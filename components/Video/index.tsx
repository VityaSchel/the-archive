import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import { Skeleton } from '@mui/material'
import { useTranslation } from 'next-i18next'
import Typography from '@mui/material/Typography'
import { pluralize, translateDate } from '%/components/utils'
import Link from 'next/link'
import cx from 'classnames'
import Image from 'next/image'

Video.propTypes = {
  title: PropTypes.string.isRequired,
  views: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  date: PropTypes.string.isRequired,
  codeName: PropTypes.string.isRequired,
  horizontal: PropTypes.bool,
  thumbnail: PropTypes.string
}
interface VideoProps {
  title: string
  views: string | number | null,
  date: string
  codeName: string
  horizontal?: boolean
  thumbnail: string
}
export default function Video(props: VideoProps) {
  const { t, i18n } = useTranslation()
  
  return (
    <Link href={'/youtube/' + props.codeName} locale={i18n.language}>
      <a className={cx(styles.video, { [styles.horizontal]: props.horizontal })}>
        <div className={styles.thumbnail}>
          <Skeleton variant='rectangular' className={styles.thumbnailSkeleton} />
          {props.thumbnail && <Image src={props.thumbnail} alt={t('')} layout='fill' className={styles.thumbnailImage} />}
        </div>
        <div className={styles.meta}>
          <Typography className={styles.title}>{props.title}</Typography>
          <Typography variant='caption' className={styles.metadata}>
            {props.views !== null && (
              <span>{props.views} {pluralize(props.views, t('pages.youtube.pages.videos.item.views'))}&nbsp;•&nbsp;</span>
            )}
            <span>{translateDate(i18n.language, props.date)}</span>
          </Typography>
        </div>
        {/* <div>{JSON.stringify(props.data)}</div> */}
      </a>
    </Link>
  )
}