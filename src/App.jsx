import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import ScrollTopButton from './components/ScrollTopButton'
import { profile } from './data'

export default function App() {
  return (
    <>
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
    </>
  )
}
