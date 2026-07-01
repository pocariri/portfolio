import { useState } from 'react'

// 커튼 '닫기' 전용 컨트롤 (토글 아님)
// - 커튼이 열린 상태(사이트가 보이는 평상시)에만 버튼이 보인다.
// - 누르면 좌우 두 폭이 스르르 닫혀 화면을 덮는다 (단어 낙하 인트로 재생 없이 커튼만).
// - 닫히면 버튼도 함께 사라진다. 다시 여는 기능은 없다(새로고침으로 재생).
//   → 그래서 버튼을 커튼 위에 올릴 필요 없음: 커튼(z 8000)이 버튼(z 200)을 덮는다.
export default function CurtainClose() {
  const [closed, setClosed] = useState(false)

  return (
    <>
      {/* 닫기 버튼 — 플로팅 '맨 위로' 버튼 바로 위. 닫는 순간 함께 페이드아웃 */}
      <button
        type="button"
        className={`curtain-fab ${closed ? 'is-gone' : ''}`}
        onClick={() => setClosed(true)}
        aria-label="커튼 닫기"
        title="커튼 닫기"
      >
        {/* '양쪽에서 가운데로 닫힘'을 뜻하는 아이콘 (→ | ←) — 두 폭이 가운데 선으로 모임 */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="3" y1="12" x2="9" y2="12" />
          <polyline points="6 9 9 12 6 15" />
          <line x1="21" y1="12" x2="15" y2="12" />
          <polyline points="18 9 15 12 18 15" />
        </svg>
      </button>

      {/* 커튼 오버레이 — 기본은 열림(양옆 화면 밖), 닫으면 좌우에서 들어와 화면을 덮음.
          천 그라데이션·세로 주름은 인트로 커튼과 동일(--curtain-*). */}
      <div className={`curtain-close ${closed ? 'is-closed' : ''}`} aria-hidden="true">
        <div className="cc-panel left">
          <span className="cc-fill" />
        </div>
        <div className="cc-panel right">
          <span className="cc-fill" />
        </div>
      </div>
    </>
  )
}
