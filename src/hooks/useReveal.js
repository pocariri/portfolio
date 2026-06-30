import { useEffect, useRef, useState } from 'react'

// 요소가 뷰포트에 들어오면 한 번 in-view 상태로 전환 (스크롤 등장 애니메이션용)
export function useReveal(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // IntersectionObserver 미지원 환경에서는 즉시 노출
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px', ...options },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return [ref, inView]
}
