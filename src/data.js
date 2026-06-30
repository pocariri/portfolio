// 포트폴리오 데이터 — PRD 4.3 기준.
// 이미지는 public/images/ 에 위치하며, 각 프로젝트의 첫 번째 이미지가 카드 대표 이미지로 쓰인다.
// base: './' 배포 환경을 고려해 경로는 'images/...' (선행 슬래시 없음)로 둔다.

export const profile = {
  name: '서승혁',
  nickname: 'pocariri.ss',
  age: 29,
  major: '컴퓨터 공학',
  photo: 'images/profile.jpeg',
  strength: '차분하고 기복이 없음',
  weakness: '잠이 많고 집을 좋아함',
}

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
