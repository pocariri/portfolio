import { useEffect, useState } from 'react'

// 일정 높이 이상 스크롤하면 나타나는 '맨 위로' 플로팅 버튼
export default function ScrollTopButton() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      className={`fab ${show ? 'show' : ''}`}
      onClick={toTop}
      aria-label="맨 위로 이동"
      title="맨 위로"
    >
      ↑
    </button>
  )
}
