import '../styles/globals.css'
import styles from '../styles/app.module.scss'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { store } from '%/components/store'
import { Provider as ReduxProvider } from 'react-redux'
import { appWithTranslation } from 'next-i18next'
import i18nextConfig from '../next-i18next.config'
import { useHMR } from '%/components/i18n/usehmr'

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
})

function TheArchive({ Component, pageProps }: AppProps) {
  useHMR()

  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <div className={styles.app}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </ReduxProvider>
  )
}

export default appWithTranslation(TheArchive, i18nextConfig)
