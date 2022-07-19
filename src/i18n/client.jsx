import { useTranslation } from 'react-i18next'

export const Locale = ({ path }) => {
  const { t } = useTranslation()
  return t(path)
}

export const changeLanguage = (lang) => {
  const { i18n } = useTranslation()
  return i18n.changeLanguage(lang || i18n.language)
}
