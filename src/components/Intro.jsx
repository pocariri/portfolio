import { useEffect, useRef, useState } from 'react'

// 도입부 인트로
// 1단계: 단어들이 줄 서서 한 덩어리로 위에서 떨어져 세로 한 줄로 쌓인다.
// 2단계: 쌓인 단어들이 가운데로 모인다(합체).
// 3단계(open): 합체 후 한 호흡으로 — 두 그룹이 갈라지며 '그대로 양 끝까지' 쭉 빠지고(끊김 없이),
//             그라데이션 커튼도 함께 열리며, 가운데서 빛이 화면을 하얗게 덮었다가 사라지며 히어로가 드러난다.

// 낙하 순서
const WORDS = [
  'FIT',
  'STYLE',
  'FABRIC',
  'TREND',
  'CODE',
  'PIXEL',
  'DETAIL',
  'DESIGN',
  'MATCH',
  'COLOR',
]

// 연출 타이밍(ms) — 낙하와 비슷한 느긋한 템포 (5초 제한 없이 한 호흡으로 이어지게)
const FALL_MS = 3000 // 낙하(.intro-fall 애니메이션과 동일)
const MERGE_MS = 1500 // 합체(가운데로 수렴)
const OPEN_MS = 2200 // 펼침: 갈라지며 양 끝까지 + 커튼 열림 + 빛 (한 동작으로)

// 모션 최소화 선호 여부 — 켜져 있으면 인트로 연출을 생략한다.
function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export default function Intro() {
  // 모션 최소화 선호 시 곧장 'done'(= 미표시)
  // ※ 재방문(sessionStorage) 억제는 연출을 다듬는 동안엔 꺼둔다 — 새로고침마다 보이도록.
  //    3단계에서 히어로 전환을 붙일 때 다시 넣는다.
  const [phase, setPhase] = useState(() =>
    prefersReducedMotion() ? 'done' : 'fall',
  )
  const phaseRef = useRef(phase)
  phaseRef.current = phase
  const timers = useRef([])

  const active = phase !== 'done'

  // 인트로가 떠 있는 동안 배경 스크롤 잠금 (종료/언마운트 시 원복)
  useEffect(() => {
    if (!active) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [active])

  // 연출 타임라인(낙하 → 합체 → 분리 → 커튼 → 종료) + 스킵 처리 (마운트 시 1회)
  useEffect(() => {
    if (phaseRef.current === 'done') return

    // 한 호흡으로 이어지도록 각 단계가 끝나는 시점에 다음 단계로 전환
    const tMerge = FALL_MS
    const tOpen = tMerge + MERGE_MS
    const tDone = tOpen + OPEN_MS
    timers.current.push(setTimeout(() => setPhase('merge'), tMerge))
    timers.current.push(setTimeout(() => setPhase('open'), tOpen))
    timers.current.push(setTimeout(() => setPhase('done'), tDone))

    // 클릭/스크롤/키 입력 → 인트로 스킵 (즉시 종료)
    const skip = () => {
      timers.current.forEach(clearTimeout)
      timers.current = []
      setPhase('done')
    }
    const passive = { passive: true }
    window.addEventListener('wheel', skip, passive)
    window.addEventListener('touchmove', skip, passive)
    window.addEventListener('keydown', skip)
    window.addEventListener('pointerdown', skip)
    return () => {
      timers.current.forEach(clearTimeout)
      timers.current = []
      window.removeEventListener('wheel', skip, passive)
      window.removeEventListener('touchmove', skip, passive)
      window.removeEventListener('keydown', skip)
      window.removeEventListener('pointerdown', skip)
    }
  }, [])

  if (!active) return null

  return (
    <div className={`intro intro-${phase}`} role="presentation" aria-hidden="true">
      {/* 좌·우 커튼 패널 — 닫혔을 땐 둘이 합쳐 사이트와 동일한 전체 그라데이션(이음새 없음),
          마지막에 양쪽 끝으로 빠지며 히어로를 드러낸다. */}
      <div className="intro-panel left">
        <span className="intro-fill" />
      </div>
      <div className="intro-panel right">
        <span className="intro-fill" />
      </div>
      {/* 커튼이 열릴 때 가운데 이음선에서 화악 번지는 빛 */}
      <div className="intro-glow" />
      {/* 줄 서 있는 단어들이 한 덩어리로 함께 떨어진 뒤, 합체 → 좌우 분리 → 커튼과 함께 양 끝으로.
          --i: 인덱스(합체 시 가운데로 수렴) / --g: 그룹(위 절반 -1=왼쪽, 아래 절반 +1=오른쪽) */}
      <div className="intro-words">
        {WORDS.map((w, i) => (
          <span
            key={w}
            className="intro-word"
            style={{ '--i': i, '--g': i < WORDS.length / 2 ? -1 : 1 }}
          >
            {w}
          </span>
        ))}
      </div>
    </div>
  )
}
