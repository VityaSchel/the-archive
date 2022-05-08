import plural from 'plural-ru'

export const pluralize = (number: string | number, str: string) => {
  if (typeof number === 'string') number = Number(number.replace(/^[^0-9]+/, ''))
  try {
    const translation = JSON.parse(str)
    if (Array.isArray(translation)) {
      return plural(number, translation[0], translation[1], translation[2])
    } else {
      return str
    }
  } catch (e) {
    return str
  }
}