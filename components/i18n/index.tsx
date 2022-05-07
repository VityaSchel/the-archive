import i18n from 'i18n-js'
import ruRU from './ru-RU.json'
import enUS from './en-US.json'

i18n.translations = { 
  'ru-RU': ruRU,
  'en-US': enUS 
}
i18n.fallbacks = 'en-US'

export default i18n

export function TranslationProvider() {
  
}