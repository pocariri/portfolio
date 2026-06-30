import { profile, swot, interests, careerPath } from '../data'
import Reveal from './Reveal'

// 소제목용 라인 아이콘 — 연보라·연분홍 톤을 해치지 않게 currentColor 기반
const ICONS = {
  // SWOT — 2x2 매트릭스
  grid: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.6" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.6" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.6" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.6" />
    </svg>
  ),
  // Vision — 과녁(목표)
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
}

export default function About() {
  return (
    <section id="about" className="section">
      <Reveal>
        <span className="section-eyebrow">About</span>
        <h2 className="section-title">
          저는 <span className="gradient-text">이런 사람</span>이에요
        </h2>
        <p className="section-lead">
          기복 없이 차분하게, 맡은 일을 끝까지 들여다보는 편입니다.
        </p>
      </Reveal>

      {/* 사진 + 기본 정보 */}
      <div className="about-grid">
        <Reveal className="about-photo">
          <img src={profile.photo} alt={`${profile.name} 프로필 사진`} loading="lazy" />
        </Reveal>

        <div className="about-info">
          <Reveal className="about-intro" delay={0.05}>
            <p>
              한 가지 영역에 머무르지 않고 프론트엔드·백엔드·모바일을 두루 경험하며,
              <strong> 전체 그림을 보고 흐름을 연결하는 것</strong>을 좋아합니다.
            </p>
          </Reveal>

          <Reveal className="about-facts" delay={0.1}>
            <div className="fact-card">
              <div className="label">이름</div>
              <div className="value">{profile.name}</div>
            </div>
            <div className="fact-card">
              <div className="label">나이</div>
              <div className="value">{profile.age}세</div>
            </div>
            <div className="fact-card">
              <div className="label">전공</div>
              <div className="value">{profile.major}</div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* 성격 · SWOT */}
      <div className="about-block">
        <Reveal className="about-subhead">
          <h3>
            <span className="subhead-ico">{ICONS.grid}</span>
            성격 <span className="subhead-sub">· SWOT</span>
          </h3>
          <p>강점·약점·기회·위협으로 저를 한 발 떨어져 들여다봤습니다.</p>
        </Reveal>

        <div className="swot-grid">
          {swot.map((s, i) => (
            <Reveal key={s.key} delay={0.05 * (i + 1)}>
              <article className={`swot-card swot-${s.key.toLowerCase()}`}>
                <div className="swot-head">
                  <span className="swot-letter">{s.key}</span>
                  <span className="swot-titles">
                    <span className="swot-ko">{s.ko}</span>
                    <span className="swot-en">{s.en}</span>
                  </span>
                </div>
                <p>{s.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* 비전 */}
      <div className="about-block">
        <Reveal className="about-subhead">
          <h3>
            <span className="subhead-ico">{ICONS.target}</span>
            Vision
          </h3>
        </Reveal>

        <Reveal className="vision-goal" delay={0.05}>
          <p>
            화면부터 서버 인프라까지,
            <br />
            <strong className="gradient-text">전체 흐름을 연결하는 풀스택 개발자</strong>
          </p>
        </Reveal>

        <div className="vision-grid">
          <Reveal className="vision-card" delay={0.08}>
            <div className="label">관심 분야</div>
            <div className="chip-row">
              {interests.map((it) => (
                <span className="chip" key={it}>
                  {it}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="vision-card" delay={0.12}>
            <div className="label">커리어 비전</div>
            <ol className="career-path">
              {careerPath.map((step, i) => (
                <li key={step} className={i === 0 ? 'now' : ''}>
                  <span className="step-dot" />
                  <span className="step-label">{step}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
