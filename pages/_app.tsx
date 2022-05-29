import '../styles/globals.css'
import 'video.js/dist/video-js.css'
import styles from '../styles/app.module.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material/styles'
import { store } from '%/components/store'
import { Provider as ReduxProvider } from 'react-redux'
import { appWithTranslation } from 'next-i18next'
import { CacheProvider } from '@emotion/react'
import createEmotionCache from '%/components/emotionCache'

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

const clientSideEmotionCache = createEmotionCache()

function TheArchive({ Component, pageProps, emotionCache = clientSideEmotionCache }: AppProps) {

  return (
    <ReduxProvider store={store}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <div className={styles.app}>
            <Component {...pageProps} />
          </div>
        </ThemeProvider>
      </CacheProvider>
    </ReduxProvider>
  )
}

export default appWithTranslation(TheArchive)
