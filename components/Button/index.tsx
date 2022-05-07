import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import { Button } from '@mui/material'
import React from 'react'
import cx from 'classnames'

ButtonWithArrow.propTypes = {
  children: PropTypes.node
}
interface ButtonWithArrowProps {
  className?: string
  children: React.ReactNode
}
export default function ButtonWithArrow({ className, ...props }: ButtonWithArrowProps) {
  return (
    <Button className={cx([styles.button, className])} {...props}>
      {props.children}
      <svg height="14" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.0607 13.0607C24.6464 12.4749 24.6464 11.5251 24.0607 10.9393L14.5147 1.3934C13.9289 0.807613 12.9792 0.807613 12.3934 1.3934C11.8076 1.97919 11.8076 2.92893 12.3934 3.51472L20.8787 12L12.3934 20.4853C11.8076 21.0711 11.8076 22.0208 12.3934 22.6066C12.9792 23.1924 13.9289 23.1924 14.5147 22.6066L24.0607 13.0607ZM22 13.5L23 13.5L23 10.5L22 10.5L22 13.5Z" fill='currentColor' />
        <line x1="22.5" y1="12" x2="1.5" y2="12" stroke='currentColor' strokeWidth="3" strokeLinecap="round" />
      </svg>
    </Button>
  )
}