import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type locale = 'ru-RU' | 'en-US'

export interface LocalizationState {
  locale: locale | string | null
}

const initialState: LocalizationState = {
  locale: null
}

export const localizationSlice = createSlice({
  name: 'localization',
  initialState,
  reducers: {
    setLocale: (state, action: PayloadAction<{ locale: locale }>) => {
      state.locale = action.payload.locale
    },
    setEnvironmentalLocale: (state) => {
      state.locale = window.navigator.language
    }
  }
})

export const { setLocale, setEnvironmentalLocale } = localizationSlice.actions

export default localizationSlice.reducer