import { profile } from '../data'
import Reveal from './Reveal'

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

      <div className="about-grid">
        <Reveal className="about-photo">
          <img src={profile.photo} alt={`${profile.name} 프로필 사진`} loading="lazy" />
        </Reveal>

        <div>
          <Reveal className="about-facts" delay={0.05}>
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
            <div className="fact-card">
              <div className="label">관심 분야</div>
              <div className="value">Full Stack Development</div>
            </div>
          </Reveal>

          <Reveal className="traits" delay={0.1}>
            <div className="trait">
              <span className="tag plus">장점</span>
              <span>{profile.strength}</span>
            </div>
            <div className="trait">
              <span className="tag minus">단점</span>
              <span>{profile.weakness}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
