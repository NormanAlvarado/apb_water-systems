import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import enTranslations from './locales/en.json'
import esTranslations from './locales/es.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      caches: ['localStorage']
    },
    resources: {
      en: {
        translation: enTranslations
      },
      es: {
        translation: esTranslations
      }
    },
    interpolation: {
      escapeValue: false
    },
    ns: ['translation'],
    defaultNS: 'translation'
  })

export default i18n
