import '../styles/globals.css'
import styles from '../styles/app.module.scss'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { store } from '%/components/store'
import { Provider as ReduxProvider } from 'react-redux'
import { Provider as TranslationProvider } from '%/components/i18n'

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
})

function TheArchive({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <div className={styles.app}>
          <Header />
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </ReduxProvider>
  )
}

export default TheArchive
