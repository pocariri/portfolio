import { useEffect, useRef } from 'react'

// 커서를 따라다니는 점 + 잔상(ring) 효과.
// ring은 점을 한 박자 늦게 따라와 자연스러운 트레일을 만든다.
// 터치 기기 / 모션 최소화 선호 환경에서는 비활성화.
export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return

    const dot = dotRef.current
    const ring = ringRef.current
    document.body.classList.add('has-custom-cursor')

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let raf

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`
    }

    // ring을 lerp(선형 보간)로 지연 추적 → 잔상감
    const tick = () => {
      ringX += (mouseX - ringX) * 0.16
      ringY += (mouseY - ringY) * 0.16
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    // 인터랙티브 요소 위에서 ring 확대
    const interactive = 'a, button, .card, input, textarea, [data-cursor="hover"]'
    const onOver = (e) => {
      if (e.target.closest(interactive)) ring.classList.add('is-hover')
    }
    const onOut = (e) => {
      if (e.target.closest(interactive)) ring.classList.remove('is-hover')
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
