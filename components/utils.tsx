import React from 'react'
import plural from 'plural-ru'
import Link from 'next/link'

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