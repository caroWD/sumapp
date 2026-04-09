import React, { useState, useEffect } from 'react'
import ThemeProviderContext, {
  type Theme,
  type ThemeProviderState,
} from '@components/contexts/ThemeProviderContext'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

const ThemeProvider = ({
  children,
  defaultTheme = 'system',
  storageKey = 'ui-theme',
  ...props
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )

  useEffect(() => {
    const $root: HTMLElement = window.document.documentElement

    $root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme: Theme = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
        ? 'dark'
        : 'light'

      $root.classList.add(systemTheme)

      return
    }

    $root.classList.add(theme)
  }, [theme])

  const value: ThemeProviderState = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export default ThemeProvider
