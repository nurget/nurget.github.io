export interface Skill {
    name: string;
    level: number; // 1-5
    description?: string;
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}

export const SKILLS: SkillCategory[] = [
    {
        title: "Backend",
        skills: [
            {
                name: "Node.js",
                level: 4,
                description: "Express 기반 서버 개발, 비동기 처리 최적화"
            },
            {
                name: "Java",
                level: 4,
                description: "Spring Boot, JPA를 활용한 백엔드 개발"
            },
            {
                name: "Spring",
                level: 4,
                description: "RESTful API 설계 및 구현, 시큐리티 설정"
            },
            {
                name: "JPA",
                level: 3,
                description: "엔티티 설계, 연관관계 매핑, 성능 최적화"
            }
        ]
    },
    {
        title: "Database",
        skills: [
            {
                name: "MySQL",
                level: 4,
                description: "데이터베이스 설계 및 쿼리 최적화"
            },
            {
                name: "ERDCloud",
                level: 5,
                description: "ERD 설계"
            },
        ]
    },
    {
        title: "DevOps",
        skills: [
            {
                name: "Nginx",
                level: 4,
                description: "웹 서버 설정 및 프록시 설정"
            },
            {
                name: "Jenkins",
                level: 3,
                description: "CI/CD 파이프라인 구축"
            }
        ]
    },
    {
        title: "Frontend",
        skills: [
            {
                name: "HTML/CSS",
                level: 5,
                description: "반응형 웹 디자인 구현"
            },
            {
                name: "JavaScript",
                level: 4,
                description: "동적 웹 페이지 구현"
            },
            {
                name: "WebGL",
                level: 4,
                description: "R3F, Three.js, GSAP을 통한 웹 기반 3D 그래픽 실무 경험"
            }
        ]
    },
    {
        title: "Mobile Development",
        skills: [
            {
                name: "Android (Java)",
                level: 3,
                description: "안드로이드 네이티브 앱 개발"
            },
            {
                name: "React Native",
                level: 3,
                description: "크로스 플랫폼 모바일 앱 개발"
            },
            {
                name: "Swift",
                level: 2,
                description: "iOS 네이티브 앱 개발 기초"
            }
        ]
    },
    {
        title: "Development Tools",
        skills: [
            {
                name: "Git",
                level: 4,
                description: "버전 관리 및 협업"
            },
            {
                name: "IntelliJ",
                level: 4,
                description: "주요 개발 IDE"
            }
        ]
    }
];
