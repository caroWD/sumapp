import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatMoney = (value: number): string => {
  return value
    .toString()
    .split('')
    .reverse()
    .map((l, i) => ((i + 1) % 4 === 0 ? l + '.' : l))
    .reverse()
    .join('')
}

export const formatDate = (date: Date | undefined) => {
  if (!date) return ''

  return date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}
