import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import { Skeleton } from '@mui/material'
import { useTranslation } from 'next-i18next'
import Typography from '@mui/material/Typography'
import { pluralize } from '%/components/utils'
import { format, parse } from 'date-fns'
import { ru, en } from 'date-fns/locale'
import Link from 'next/link'
import cx from 'classnames'

Video.propTypes = {
  title: PropTypes.string.isRequired,
  views: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  date: PropTypes.string.isRequired,
  codeName: PropTypes.string.isRequired,
  horizontal: PropTypes.bool
}
interface VideoProps {
  title: string
  views: string | number | null,
  date: string
  codeName: string
  horizontal?: boolean
}
export default function Video(props: VideoProps) {
  const { t, i18n } = useTranslation()

  const translateDate = (date: string) => {
    const formatDate = (template: string) => {
      const uploadDate = parse(date, template, new Date(), { locale: ru })
      return format(uploadDate, template, { locale: i18n.language === 'ru' ? ru : en })
    }

    if (date.match(/^\d+ [а-я]+ \d+$/)) {
      return formatDate('dd MMMM yyyy')
    } else if(date.match(/^[а-я]+ \d+$/)) {
      return formatDate('MMMM yyyy')
    } else {
      return date
    }
  }
  
  return (
    <Link href={'youtube/' + props.codeName} locale={i18n.language}>
      <a className={cx(styles.video, { [styles.horizontal]: props.horizontal })}>
        <div className={styles.thumbnail}>
          <Skeleton variant='rectangular' className={styles.thumbnailSkeleton} />
          <img src={props.thumbnail} alt={t('')} />
        </div>
        <div className={styles.meta}>
          <Typography className={styles.title}>{props.title}</Typography>
          <Typography variant='caption' className={styles.metadata}>
            {props.views !== null && (
              <span>{props.views} {pluralize(props.views, t('pages.youtube.pages.videos.item.views'))}&nbsp;•&nbsp;</span>
            )}
            <span>{translateDate(props.date)}</span>
          </Typography>
        </div>
        {/* <div>{JSON.stringify(props.data)}</div> */}
      </a>
    </Link>
  )
}