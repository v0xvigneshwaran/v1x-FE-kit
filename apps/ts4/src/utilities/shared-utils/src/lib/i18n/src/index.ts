const getLocale = (locale: string) => {
  return locale || 'en'
}

// wjdlz/NOTE: add flag emoji
const toI18nName = (data: string) => {
  const locale = getLocale(data)
  return new Intl.DisplayNames(undefined, { type: 'language' }).of(locale)
}

const toI18nDir = (data: string) => {
  const locale = getLocale(data)

  // @ts-ignore
  // prettier-ignore
  return new Intl.Locale(locale)?.textInfo?.direction
}

const toI18nDirLabel = (data: string) => {
  const locale = getLocale(data)
  return toI18nDir(locale) === 'rtl' ? 'Right to Left' : undefined
}

export { toI18nDir, toI18nDirLabel, toI18nName }
