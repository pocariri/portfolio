import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'

const LINKS = [
  { id: 'home', label: '홈' },
  { id: 'about', label: '자기소개' },
  { id: 'portfolio', label: '포트폴리오' },
  { id: 'contact', label: '연락처' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  // 스크롤 시: 그림자 토글 + 현재 섹션(active) 계산
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)

      // 뷰포트 35% 지점을 기준선으로, 그 선을 지난 마지막 섹션을 active로
      const line = window.innerHeight * 0.35
      let current = LINKS[0].id
      for (const l of LINKS) {
        const el = document.getElementById(l.id)
        if (el && el.getBoundingClientRect().top - line <= 0) current = l.id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#home" className="nav-brand" onClick={() => setOpen(false)}>
        portfolio<span className="gradient-text">.</span>
      </a>

      <div className="nav-right">
        <nav className={`nav-menu ${open ? 'open' : ''}`} aria-label="주요 메뉴">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`nav-link ${active === l.id ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              <span className="nav-label" data-text={l.label}>
                <span className="nav-label-txt">{l.label}</span>
              </span>
            </a>
          ))}
        </nav>

        <ThemeToggle />

        <button
          className={`nav-burger ${open ? 'open' : ''}`}
          aria-label="메뉴 열기/닫기"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
