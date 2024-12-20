import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import cx from 'classnames'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import Button from '@mui/material/Button'
import { MdLanguage } from 'react-icons/md'
import Typography from '@mui/material/Typography'
import LanguagesDialog from '%/components/Languages'
import { IconButton } from '@mui/material'
import { SiTorbrowser } from 'react-icons/si'

export default function Header(props) {
  const router = useRouter()
  const { t } = useTranslation('common')
  const [noScroll, setNoScroll] = React.useState(true)
  const [languagesDialogVisible, setLanguagesDialogVisible] = React.useState(false)

  useScrollPosition(({ currPos }) => {
    setNoScroll(currPos.y === 0)
  }, [setNoScroll])

  React.useEffect(() => {
    if(typeof window) {
      setNoScroll(window.scrollY === 0)
    }
  }, [])

  return (
    <>
      {props.placeholder && <div className={styles.backgroundPlaceholder} />}
      <AppBar position='fixed' className={cx(styles.header, { [styles.noScroll]: noScroll })}>
        <Toolbar className={styles.toolbar}>
          <Link href='/' locale={router.locale}>
            <a className={styles.logo}>
              <span className={styles.headline}>{t('header.headline')}</span>
              <span className={styles.bottomLine}>{t('header.bottom_line')}</span>
            </a>
          </Link>
          <span className={styles.divider} />
          <Item href='youtube'>{t('header.links.videos')}</Item>
          <Link href='http://archive.hlothadmob6vsssnjd7ovwyz4z2le4pbpbyfhqbuwooyq62ona3l4bid.onion'>
            <a className={styles.right}>
              <IconButton>
                <SiTorbrowser />
              </IconButton>
            </a>
          </Link>
          <Button 
            disableRipple
            onClick={() => setLanguagesDialogVisible(true)}
          >
            <MdLanguage />
            <Typography sx={{ textTransform: 'none', marginLeft: 1 }}>{t('header.languages.button')}</Typography>
          </Button>
          <LanguagesDialog visible={languagesDialogVisible} setOpen={setLanguagesDialogVisible} />
        </Toolbar>
      </AppBar>
    </>
  )  
}

Item.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.boolean
}
Header.defaultProps = {
  placeholder: true
}
interface ItemProps {
  href: Url
  children: React.ReactNode
  disabled?: boolean
}
function Item(props: ItemProps) {
  const router = useRouter()

  return (
    <Link href={'/' + props.href} locale={router.locale}>
      <a className={styles.link} disabled={props.disabled}>{props.children}</a>
    </Link>
  )
}