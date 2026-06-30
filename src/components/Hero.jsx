import { profile, tagline } from '../data'

// 히어로 전체에 넓게 흩어 놓을 부유 요소 (기술 스택 + 기하 도형)
// React: 좌측 중앙 / Swift: 우측 상단 / Spring Boot: 우측 하단
const FLOATS = [
  { kind: 'pill', label: 'React', pos: { top: '42%', left: '6%' }, dur: 6, delay: 0 },
  { kind: 'pill', label: 'Swift', pos: { top: '15%', right: '7%' }, dur: 6.3, delay: 0.4 },
  { kind: 'pill', label: 'Spring Boot', pos: { bottom: '20%', right: '7%' }, dur: 6.8, delay: 0.8 },
  { kind: 'ring', pos: { top: '16%', left: '12%' }, dur: 5.5, delay: 0.3 },
  { kind: 'square', pos: { bottom: '18%', left: '14%' }, dur: 5, delay: 1.2 },
  { kind: 'plus', pos: { bottom: '9%', left: '50%' }, center: true, dur: 4.8, delay: 0.6 },
]

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* blob 배경 + dot-grid 텍스처 */}
      <div className="hero-bg" aria-hidden="true">
        <span className="hero-blob b1" />
        <span className="hero-blob b2" />
        <span className="hero-blob b3" />
        <div className="hero-texture" />
      </div>

      {/* 부유 요소 (크게·넓게·또렷한 움직임) — 외곽(위치) + 내부(애니메이션) 분리 */}
      <div className="hero-floats" aria-hidden="true">
        {FLOATS.map((f, i) => (
          <span key={i} className={`hf ${f.center ? 'hf-center' : ''}`} style={f.pos}>
            <span
              className={`hf-el hf-${f.kind}`}
              style={{ '--dur': `${f.dur}s`, '--delay': `${f.delay}s` }}
            >
              {f.kind === 'pill' ? f.label : f.kind === 'plus' ? '+' : null}
            </span>
          </span>
        ))}
      </div>

      {/* 사진 없이 중앙 정렬된 텍스트 히어로 */}
      <div className="hero-inner">
        <span className="hero-badge">
          <span className="dot" />
          프론트엔드 · 백엔드 · 모바일을 두루 다루는 개발자
        </span>

        <h1 className="hero-title">
          안녕하세요,
          <br />
          <span className="name">{profile.name}</span>입니다
        </h1>

        <p className="hero-tagline">{tagline}</p>

        <div className="hero-cta">
          <a href="#portfolio" className="btn btn-primary">
            포트폴리오 보기 →
          </a>
          <a href="#about" className="btn btn-ghost">
            저는 이런 사람이에요
          </a>
        </div>
      </div>

      <a href="#about" className="hero-scroll" aria-label="아래로 스크롤">
        <span className="mouse" />
        SCROLL
      </a>
    </section>
  )
}
