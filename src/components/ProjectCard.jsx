import { useEffect, useState } from 'react'

// 포트폴리오 카드 — 2초마다 다음 스크린샷으로 좌측 슬라이드되는 자동 캐러셀.
// 마지막 → 처음으로도 항상 왼쪽으로 흐르도록 첫 이미지를 끝에 복제하고,
// 복제본에 도달하면 트랜지션을 끈 채 0으로 되돌려 끊김 없이 반복한다.
export default function ProjectCard({ project }) {
  const images = project.images
  const n = images.length
  const slides = n > 1 ? [...images, images[0]] : images

  const [index, setIndex] = useState(0)
  const [animate, setAnimate] = useState(true)

  // 2초마다 다음 슬라이드
  useEffect(() => {
    if (n <= 1) return
    const id = setInterval(() => setIndex((i) => i + 1), 2000)
    return () => clearInterval(id)
  }, [n])

  // 트랜지션 없이 0으로 되돌린 직후, 다음 프레임에 트랜지션 재활성화
  useEffect(() => {
    if (animate) return
    const r = requestAnimationFrame(() => setAnimate(true))
    return () => cancelAnimationFrame(r)
  }, [animate])

  const handleTransitionEnd = (e) => {
    if (e.target !== e.currentTarget || e.propertyName !== 'transform') return
    if (index === n) {
      // 복제된 첫 이미지에 도달 → 점프 없이 실제 첫 이미지로 리셋
      setAnimate(false)
      setIndex(0)
    }
  }

  const activeDot = index % n

  return (
    <article className="card">
      <div className="card-thumb">
        <div
          className="slides"
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: animate ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((src, i) => (
            <div className="slide" key={i}>
              {/* 비율이 제각각인 스크린샷을 잘리지 않게: 흐린 배경 + 전체가 보이는 이미지 */}
              <div className="slide-bg" style={{ backgroundImage: `url("${src}")` }} />
              <img
                className="slide-img"
                src={src}
                alt={`${project.title} 스크린샷 ${(i % n) + 1}`}
                loading="lazy"
                draggable="false"
              />
            </div>
          ))}
        </div>

        {n > 1 && (
          <div className="slide-dots" aria-hidden="true">
            {images.map((_, i) => (
              <span key={i} className={`s-dot ${activeDot === i ? 'on' : ''}`} />
            ))}
          </div>
        )}
      </div>

      <div className="card-body">
        {project.category && <span className="card-cat">{project.category}</span>}
        <h4>{project.title}</h4>
        <p>{project.summary}</p>

        <div className="tech-row">
          {project.tech.map((t) => (
            <span key={t} className="tech-chip">
              {t}
            </span>
          ))}
        </div>

        <div className="card-actions">
          <a
            className="card-btn solid"
            href={project.github}
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </article>
  )
}
