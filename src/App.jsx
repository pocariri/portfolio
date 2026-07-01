import Intro from './components/Intro'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import ScrollTopButton from './components/ScrollTopButton'
import CurtainClose from './components/CurtainClose'
import { profile } from './data'

export default function App() {
  return (
    <>
      {/* 도입부 인트로 오버레이 (이름 페이드인 → 가로 와이프 → 히어로) */}
      <Intro />

      {/* 좌우로 흐르는 그라데이션 배경 + 컬러 블롭 */}
      <div className="bg-gradient" aria-hidden="true" />
      <div className="bg-blobs" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>

      <footer className="footer">
        © {2026} {profile.nickname}. Made with React
      </footer>

      <ScrollTopButton />

      {/* 커튼 닫기 버튼 + 닫힘 오버레이 (열린 상태에서만 버튼 표시, 재오픈 없음) */}
      <CurtainClose />
    </>
  )
}
