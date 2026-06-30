// 포트폴리오 데이터 — PRD 4.3 기준.
// 이미지는 public/images/ 에 위치하며, 각 프로젝트의 첫 번째 이미지가 카드 대표 이미지로 쓰인다.
// base: './' 배포 환경을 고려해 경로는 'images/...' (선행 슬래시 없음)로 둔다.

export const profile = {
  name: '서승혁',
  nickname: 'pocariri.ss',
  age: 29,
  major: '컴퓨터 공학',
  photo: 'images/profile.jpeg',
}

// 성격 — SWOT(강점·약점·기회·위협)로 객관화. 모두 연보라·연분홍 계열로 시각화한다.
export const swot = [
  {
    key: 'S',
    en: 'Strengths',
    ko: '강점',
    desc: '감정에 휩쓸리지 않는 이성적 차분함으로 어떤 순간에도 일정한 텐션을 유지합니다. 상대방의 이야기를 집중해서 듣는 경청이 몸에 배어 있습니다.',
  },
  {
    key: 'W',
    en: 'Weaknesses',
    ko: '약점',
    desc: '매사 조심스러워 새로운 도전이나 결정의 첫걸음에 시간이 걸리는 편입니다. 생각에 마감기한을 정해 우선 실행으로 옮기는 연습을 하고 있습니다.',
  },
  {
    key: 'O',
    en: 'Opportunities',
    ko: '기회',
    desc: '팀 내 의견 대립·갈등 상황에서 양측의 입장을 경청해 이성적인 합의점을 도출합니다.',
  },
  {
    key: 'T',
    en: 'Threats',
    ko: '위협',
    desc: '타인의 의견을 존중하다 보니 강하게 주장해야 할 때 의견 전달을 못 할 위험이 있습니다. 경청이 무조건적인 수용이 되지 않도록, 명확히 전달하는 연습을 하고 있습니다.',
  },
]

// 비전 — 풀스택을 향한 관심 분야 & 커리어 경로
export const interests = [
  '멀티 플랫폼 클라이언트 제어',
  '백엔드 아키텍처 · API 설계',
  '데이터 파이프라인 연동',
  '실시간 동기화 기반 서비스',
]
export const careerPath = ['풀스택 개발자', '시니어 개발자', '아키텍트']

export const contact = {
  phone: '010-3657-8759',
  email: 'swm0111@naver.com',
  github: 'https://github.com/pocariri',
}

// 한 줄 소개(히어로)
export const tagline =
  '프론트엔드·백엔드·모바일등 분야를 가리지 않으며, 프로젝트에 기여해왔습니다.'

export const categories = [
  {
    id: 'frontend',
    label: '프론트엔드',
    projects: [
      {
        id: 'rabiguard',
        title: '라즈베리파이를 이용한 홈캠',
        tech: ['React Native'],
        github: 'https://github.com/Capstone-Rafour/rabiguard-mobile-app',
        summary:
          '라즈베리파이 카메라로 집 안을 지켜보는 홈캠 앱입니다. 카메라가 보내는 영상을 휴대폰에서 실시간으로 받아 볼 수 있도록 React Native로 모바일 화면을 구현했습니다.',
        images: [
          'images/rabiguard1.png',
          'images/rabiguard2.png',
          'images/rabiguard3.png',
          'images/rabiguard4.png',
          'images/rabiguard5.png',
        ],
      },
      {
        id: 'jibijoa',
        title: '자연어 기반 패널 검색 시스템',
        tech: ['React'],
        github: 'https://github.com/capstone-Jibijoa/frontend',
        summary:
          '찾고 싶은 내용을 자연어 문장으로 입력하면 알맞은 패널(데이터)을 찾아 주는 검색 서비스입니다. 검색 결과를 한눈에 살펴보고 탐색할 수 있는 사용자 화면을 React로 만들었습니다.',
        images: ['images/jibijoa1.png', 'images/jibijoa2.png', 'images/jibijoa3.png'],
      },
    ],
  },
  {
    id: 'backend',
    label: '백엔드',
    projects: [
      {
        id: 'sangsangbooke',
        title: '독서 기록 어플',
        tech: ['Java', 'Spring Boot'],
        github: 'https://github.com/SangSangBooki/server',
        summary:
          '읽은 책과 그때의 감상을 기록하고 모아 보는 독서 기록 서비스의 서버입니다. Java와 Spring Boot로 도서·기록을 다루는 API와 데이터 구조를 설계하고 구현했습니다.',
        images: [
          'images/sangsangbooke1.png',
          'images/sangsangbooke2.png',
          'images/sangsangbooke3.png',
          'images/sangsangbooke4.png',
          'images/sangsangbooke5.png',
        ],
      },
    ],
  },
  {
    id: 'mobile',
    label: '모바일',
    projects: [
      {
        id: 'momeoknyang',
        title: '메뉴 추천 시스템',
        tech: ['Swift'],
        github: 'https://github.com/pocariri/MoMeokNyang',
        summary:
          '“오늘 뭐 먹지?”라는 고민을 대신 덜어 주는 메뉴 추천 iOS 앱입니다. 추천을 받아 메뉴를 정하기까지의 흐름과 화면을 Swift로 구현했습니다.',
        images: [
          'images/momeoknyang1.png',
          'images/momeoknyang2.png',
          'images/momeoknyang3.png',
          'images/momeoknyang4.png',
        ],
      },
    ],
  },
]
