import React from 'react'
import plural from 'plural-ru'
import Link from 'next/link'
import { format, parse } from 'date-fns'
import { ru, en } from 'date-fns/locale'

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

export function linkify(text: string): Array<string | React.ReactNode> {
  const regex = /https:\/\/[^ \n]+/g
  const matches = Array.from(text.matchAll(regex), m => m[0])
  const textFragments: string[] = text.split(regex)
  return textFragments.reduce<Array<any>>((prev, cur, i, arr) => 
    i !== arr.length - 1 
      ? prev.concat(cur, 
        <Link href={matches[i]}>
          <a style={{ color: 'rgb(62, 166, 255)' }}>{matches[i]}</a>
        </Link>)
      : prev.concat(cur),
  [])
}

export function formatText(text: string) {
  return linkify(
    text
  ).map(m => {
    if (typeof m === 'string') {
      return m.split('\n').reduce((prev, cur, i, arr) =>
        i !== arr.length - 1
          ? prev.concat(cur, <br></br>)
          : prev.concat(cur),
      [])
    } else {
      return [m]
    }
  }).reduce((prev, cur) => prev.concat(cur), [])
}

export function translateDate(language: string, date: string) {
  const formatDate = (template: string, intlOptions: object) => {
    const uploadDate = parse(date, template, new Date(), { locale: ru })
    // return format(uploadDate, template, { locale: i18n.language === 'ru' ? ru : en })
    return Intl.DateTimeFormat(language, intlOptions).format(uploadDate)
  }

  if (date.match(/^\d+ [а-я]+ \d+$/)) {
    return formatDate('dd MMMM yyyy', { year: 'numeric', month: 'long', day: 'numeric' })
  } else if (date.match(/^[а-я]+ \d+$/)) {
    return formatDate('MMMM yyyy', { year: 'numeric', month: 'long' })
  } else {
    return date
  }
}

export function getThumbnailURL(filename: string) {
  return `https://ik.imagekit.io/hloth/the-archive-static/thumbnails/${filename.replace(/(\.mp4|\.m4v)$/, '')}.png`
}