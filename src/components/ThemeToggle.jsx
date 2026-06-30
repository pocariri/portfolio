import { useEffect, useState } from 'react'

// 라이트모드 기본 + 다크모드 토글. 선택은 localStorage에 저장.
function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'
  const saved = localStorage.getItem('theme')
  if (saved === 'light' || saved === 'dark') return saved
  return 'light' // PRD: 라이트모드 기본
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={theme === 'light' ? '다크모드로 전환' : '라이트모드로 전환'}
      title={theme === 'light' ? '다크모드' : '라이트모드'}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}
