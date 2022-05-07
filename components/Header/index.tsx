import styles from './styles.module.scss'
import Paper from '@mui/material/Paper'
import Link from 'next/link'

export default function Header(props) {
  return (
    <header >
      <Paper className={styles.header}>
        <Link href='/'>
          <div>
            <span className={styles.headline}>The Archive</span>
            <span className={styles.headline}>by hloth</span>
          </div>
        </Link>
      </Paper>
    </header>
  )  
}