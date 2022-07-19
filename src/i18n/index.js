import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import locales from './locales'

i18n.use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: locales,
    fallbackLng: 'en-US',
    defaultNS: 'locales'
  }).then(r => r)

export default i18n
