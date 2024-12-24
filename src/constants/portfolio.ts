export interface Project {
    id: string;
    title: string;
    description: string;
    period: string;
    role: string;
    techStack: string[];
    features: string[];
    githubUrl?: string;
    demoUrl?: string;
    thumbnail: string;
    images: {
        url: string;
        caption: string;
    }[];
}

export const PROJECTS: Project[] = [
    {
        id: '1',
        title: 'Match Me If You Can',
        description: '자바 스프링 리액트 클라우드 활용 풀스택 개발에서 진행한 풀스택 웹 사이트 프로젝트',
        period: '2023.11 - 2024.01',
        role: '프론트엔드 개발 리드 및 백엔드 개발',
        techStack: ['Spring Boot', 'JPA', 'QueryDSL', 'MySQL', 'Redis', 'Jenkins'],
        features: [
            '종목별 팀 만들기',
            '팀별 매칭 진행 로직',
            '사용자 인증/인가'
        ],
        demoUrl: 'https://mmiyc-production.up.railway.app/',
        thumbnail: '/images/mmiyc-thumbnail.png',
        images: [
            {
                url: '/images/mmiyc-2.png',
                caption: '매칭 신청 페이지'
            },
            {
                url: '/images/mmiyc-3.png',
                caption: '경기 기록 입력 페이지'
            }
        ]
    },
    {
        id: '2',
        title: 'Vanila JS Game',
        description: '바닐라 자바스크립트를 사용한 게임 웹사이트',
        period: '2023.08 - 2023.09',
        role: '2048 퍼블리싱, 개구리 게임 기능 구현 및 로그인/회원가입 기능 구현',
        techStack: ['HTML/CSS', 'JavaScript', 'MyBatis', 'Apache Tomcat 2.0'],
        features: [
            '2048 Game',
            '개구리 게임',
        ],
        thumbnail: '/images/game-thumbnail.png',
        images: [
            {
                url: '/images/game-thumbnail.png',
                caption: '메인 페이지'
            },
        ]
    },
    {
        id: '3',
        title: 'Bubble',
        description: '시각장애인 이동권 개선을 위한 모바일 앱',
        period: '2023.03 - 2023.06',
        role: '팀장(모바일 앱 전체 개발 및 서버 구축)',
        techStack: ['Java', 'Android Studio', 'Node.js', 'MySQL', 'React'],
        features: [
            '버스 탑승 예약',
            'TTS/SST 적용',
            '플레이스토어 배포 경험',
        ],
        githubUrl: 'https://github.com/nurget/bubble-java.git',
        thumbnail: '/images/bubble-thumbnail.png',
        images: [
            {
                url: '/images/bubble-1.png',
                caption: '버스기사 관리 웹 페이지'
            }
        ]
    },
    {
        id: '4',
        title: 'DIAMOND DATA',
        description: '야구 팬을 위한 모든 기록 웹사이트',
        period: '2024.12 - 현재 진행 중',
        role: '풀스택 개발',
        techStack: ['React', 'TypeScript', 'Node.js', 'MySQL', 'Figma', 'R3F', 'Blender', 'GSAP', 'Python', 'numpy', 'pandas'],
        features: [
            '정규시즌 순위 예측',
            '불펜투수 혹사 계산',
            '한국시리즈 진출 확률 계산',
        ],
        thumbnail: '/images/dd-thumbnail.png',
        images: [
            {
                url: '/images/dd-2.png',
                caption: 'DIAMOND DATA Figma 디자인 구성'
            }
        ]
    },
];
