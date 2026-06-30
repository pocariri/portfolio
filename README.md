# 서승혁 자기소개 홈페이지

`prd.md`를 바탕으로 만든 React(Vite) 기반 SPA 자기소개·포트폴리오 페이지입니다.

## 특징

- **One-page 스크롤 + 앵커 이동** (홈 · 자기소개 · 포트폴리오 · 연락처)
- **좌우로 흐르는 그라데이션 배경** + 은은한 컬러 블롭 (연보라 · 연분홍)
- **커스텀 커서 + 잔상(트레일)** 효과 (마우스 기기에서만, 터치/모션 최소화 환경은 자동 비활성화)
- **라이트모드 기본 + 다크모드 토글** (선택 값 localStorage 저장)
- **스크롤 등장 애니메이션** (IntersectionObserver)
- **포트폴리오 카드 + 스크린샷 갤러리 모달** (키보드 ←/→·ESC, 썸네일 이동)
- 메뉴 호버 강조(언더라인·색상·확대), 부드러운 스크롤, 반응형, 접근성(`prefers-reduced-motion`) 대응
- 폰트: Pretendard (CDN)

## 실행

```bash
npm install
npm run dev      # 개발 서버 (http://localhost:5173)
npm run build    # 프로덕션 빌드 → dist/
npm run preview  # 빌드 결과 미리보기
```

## 구조

```
index.html              Pretendard CDN, 루트 엘리먼트
public/images/          프로젝트 스크린샷 · 프로필 사진
src/
  main.jsx              엔트리
  App.jsx               레이아웃(배경 · 커서 · 섹션)
  data.js               프로필 / 연락처 / 포트폴리오 데이터
  styles/index.css      디자인 토큰 · 애니메이션 · 전 컴포넌트 스타일
  hooks/useReveal.js    스크롤 등장 훅
  components/           Navbar, Hero, About, Portfolio, ProjectCard, Modal, Contact,
                        CustomCursor, ThemeToggle, Reveal
```

## 콘텐츠 수정

- 프로필 · 연락처 · 프로젝트(요약/기술/GitHub/이미지)는 모두 `src/data.js`에서 관리합니다.
- 이미지는 `public/images/`에 두고 `data.js`에서 `images/파일명` 으로 참조합니다.
- 색상 · 폰트 등 디자인 값은 `src/styles/index.css` 상단의 CSS 변수에서 조정합니다.

## 배포

`vite.config.js`의 `base: './'` 설정으로 GitHub Pages·Vercel·Netlify 등 하위 경로 배포에서도 에셋 경로가 깨지지 않습니다. `npm run build` 후 `dist/`를 정적 호스팅하면 됩니다.

## 참고 (PRD 대비 반영 사항)

- 실제 이미지 파일명이 PRD 표기(`rabiguard-1.png`)와 달리 하이픈이 없어(`rabiguard1.png`) 실제 파일명을 사용했습니다.
- 프로젝트별 제공된 스크린샷 수가 PRD의 2~3장보다 많아(라즈베리파이 홈캠 5장, 독서 기록 5장, 메뉴 추천 4장) 제공된 장수에 맞춰 모두 노출합니다.
- 미확정 항목인 **한 줄 소개**와 **프로젝트별 요약**은 PRD 내용을 토대로 초안을 채워 두었습니다 (`src/data.js`에서 수정 가능).
```
