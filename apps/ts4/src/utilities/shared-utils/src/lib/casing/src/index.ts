const toCamelCase = (text: string) => {
  if (!text) return ''

  const pascal = toPascalCase(text)
  return pascal.charAt(0).toLowerCase() + pascal.slice(1)
}

const toKebabCase = (text: string) => {
  if (!text) return ''

  return text
    .trim()
    .replace(/[\s_-]+/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map(word => word.toLowerCase())
    .join('-')
}

const toPascalCase = (text: string) => {
  if (!text) return ''

  return text
    .trim()
    .replace(/[\s_-]+/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('')
}

export { toCamelCase, toKebabCase, toPascalCase }
