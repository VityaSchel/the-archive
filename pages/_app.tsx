import '../styles/globals.css'
import styles from '../styles/app.module.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { store } from '%/components/store'
import { Provider as ReduxProvider } from 'react-redux'
import { appWithTranslation } from 'next-i18next'

export const theme = createTheme({
  palette: {
    mode: 'dark'
  },
  components: {
    MuiTypography: {
      defaultProps: {
        'sx': {
          color: 'text.primary'
        }
      },
    },
  },
})

function TheArchive({ Component, pageProps }: AppProps) {
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

export default appWithTranslation(TheArchive)
