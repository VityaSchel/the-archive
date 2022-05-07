import * as React from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Grow from '@mui/material/Grow'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import ListItemText from '@mui/material/ListItemText'
import { TransitionProps } from '@mui/material/transitions'
import ruFlag from '%/public/flags/ru.png'
import enFlag from '%/public/flags/en.png'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>,
) {
  return <Grow ref={ref} {...props} />
})

LanguagesDialog.propTypes = {
  visible: PropTypes.bool,
  setOpen: PropTypes.func
}
interface LanguagesDialogProps {
  visible: boolean
  setOpen: Function
}
export default function LanguagesDialog(props: LanguagesDialogProps) {
  const { t } = useTranslation()
  const router = useRouter()

  const handleClose = () => {
    props.setOpen(false)
  }
  
  const setLanguage = (lang: string) => () => {
    router.push(router.pathname, undefined, { locale: lang })
    handleClose()
  }

  return (
    <Dialog
      open={props.visible}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <DialogTitle>{t('header.languages.choose_language')}</DialogTitle>
      <List sx={{ pt: 0 }}>
        <ListItem button onClick={setLanguage('en')}>
          <ListItemAvatar>
            <Avatar sx={{ padding: 1 }}>
              <Image src={enFlag} width={100} height={100} alt='En' />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={t('header.languages.english')} />
        </ListItem>
        <ListItem button onClick={setLanguage('ru')}>
          <ListItemAvatar>
            <Avatar sx={{ padding: 1 }}>
              <Image src={ruFlag} width={100} height={100} alt='Ru' />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={t('header.languages.russian')} />
        </ListItem>
      </List>
    </Dialog>
  )
}