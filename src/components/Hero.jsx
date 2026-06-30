import { profile, tagline } from '../data'
import {
  SiSwift,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiSpringboot,
  SiMysql,
} from 'react-icons/si'
// Java 로고는 Simple Icons(react-icons/si)에서 상표 문제로 제거되어, Devicons 세트에서 가져온다.
import { DiJava } from 'react-icons/di'

// 떠다니는 기술 스택 8개 — 히어로의 빈 공간(상·하·좌우 가장자리)에 고르게 분포.
// 중앙 텍스트는 z-index상 위에 있어 가독성을 해치지 않고, 아이콘은 텍스트 뒤·가장자리로 흩어진다.
// color : 브랜드 컬러를 연보라·연분홍 무드에 맞춰 살짝 톤다운한 값.
// tier  : core(항상) / md(태블릿까지) / lg(데스크탑만) — 화면이 좁을수록 개수를 줄인다.
// move  : a(아래로 드리프트) / b(위로 드리프트) — 위치에 맞춰 화면 밖으로 잘 나가지 않게.
const TECHS = [
  { label: 'Swift', Icon: SiSwift, color: '#E2664A', pos: { top: '12%', left: '9%' }, tier: 'core', move: 'a', dur: 9, delay: 0 },
  { label: 'TypeScript', Icon: SiTypescript, color: '#3E7DC4', pos: { top: '13%', right: '9%' }, tier: 'core', move: 'a', dur: 10.5, delay: 0.8 },
  { label: 'React Native', Icon: SiReact, color: '#4F9BD4', pos: { bottom: '15%', left: '10%' }, tier: 'core', move: 'b', dur: 11, delay: 0.4 },
  { label: 'Java', Icon: DiJava, color: '#5C86A0', pos: { bottom: '16%', right: '10%' }, tier: 'core', move: 'b', dur: 9.6, delay: 1.1 },
  { label: 'React', Icon: SiReact, color: '#4FB3D0', pos: { top: '40%', left: '4%' }, tier: 'md', move: 'b', dur: 10, delay: 0.6 },
  { label: 'JavaScript', Icon: SiJavascript, color: '#CBAB17', pos: { top: '42%', right: '4%' }, tier: 'md', move: 'a', dur: 10.8, delay: 1.4 },
  { label: 'Spring Boot', Icon: SiSpringboot, color: '#67A640', pos: { top: '7%', left: '50%' }, center: true, tier: 'lg', move: 'a', dur: 12, delay: 0.3 },
  { label: 'MySQL', Icon: SiMysql, color: '#4E7FA3', pos: { bottom: '11%', left: '40%' }, tier: 'lg', move: 'b', dur: 11.5, delay: 0.9 },
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
        {TECHS.map((t, i) => {
          const Icon = t.Icon
          return (
            <span
              key={i}
              className={`hf hf-${t.tier} ${t.center ? 'hf-center' : ''}`}
              style={t.pos}
            >
              <span
                className={`hf-el hf-pill hf-move-${t.move}`}
                style={{ '--dur': `${t.dur}s`, '--delay': `${t.delay}s` }}
              >
                <span className="hf-ico" style={{ color: t.color }}>
                  <Icon />
                </span>
                <span className="hf-label">{t.label}</span>
              </span>
            </span>
          )
        })}
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
