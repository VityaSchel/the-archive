import { configureStore } from '@reduxjs/toolkit'
import localization from './localization'

export const store = configureStore({
  reducer: {
    localization
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch