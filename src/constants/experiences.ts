// src/constants/experiences.ts
export interface Experience {
    title: string;
    period: string;
    description: string;
    skills?: string[];
    company?: string;
    newsLink?: string;
    images?: string[];
}

export const EXPERIENCES: Experience[] = [
    {
        title: "백엔드 개발자 (프론트엔드 직무 포함)",
        company: "와이이노베이션랩",
        period: "2024.04 - 현재 진행 중",
        description: "프론트엔드 개발자로 입사했으나 회사의 요청으로 백엔드 개발자로 전환하여 다양한 프로젝트를 성공적으로 이끌었습니다. 회사 홈페이지 리뉴얼 프로젝트에서는 WebGL(R3F)을 활용한 프론트엔드 개발과 함께, Node.js(Express)와 MySQL을 기반으로 한 백엔드 시스템을 구축했습니다. GCP와 Firebase를 활용한 클라우드 인프라 구성, AWS Route53을 통한 도메인 관리, 이메일 시스템 구현, 그리고 Google Analytics를 활용한 방문자 분석 시스템을 성공적으로 구현했습니다.체육 입시 플랫폼 '파인모션'의 백엔드 개발을 총괄하며, Redis와 IndexedDB를 활용한 성능 최적화, 영상 압축 및 스크린샷 처리 시스템 구현, 멘토링/코칭 기능 개발을 담당했습니다. 모든 프로젝트에서 ERD 설계부터 노션을 활용한 체계적인 문서화까지 꼼꼼하게 진행하며 프로젝트의 안정성과 유지보수성을 확보했습니다.또한, 협력사의 Spring Boot 기반 시스템 유지보수를 담당하며 중요한 성과를 달성했습니다. Jenkins를 활용한 CI/CD 파이프라인 구축, Nginx 서버 최적화, 그리고 모듈화를 통한 코드 품질 개선을 진행했습니다. 특히 모바일 앱 개발팀과의 긴밀한 협업을 통해 API 성능을 개선하고 시스템 안정성을 높일 수 있었습니다.",
        skills: ["TypeScript", "React", "Node.js", "Express", "Spring Boot", "Redis", "MySQL", "AWS EC2", "AWS RDS"]
    },
    {
        title: "자바 스프링 리액트 클라우드 활용 풀스택 개발",
        period: "2023.06 - 2024.02",
        description: "Java와 JSP 기초, 아파치 톰캣을 활용한 웹 서버 구축을 학습했습니다. HTML/CSS와 Ajax를 활용한 동적 웹사이트 개발, Spring Boot 프레임워크와 MyBatis를 활용한 백엔드 서버 구축을 경험했습니다. 또한 React와 TypeScript를 사용한 함수형 프로그래밍, AWS EC2와 Jenkins를 활용한 CI/CD 파이프라인 구축, 도메인 연동 등 풀스택 개발의 전반적인 과정을 실습했습니다.",
        skills: [
            "Java",
            "Spring Boot",
            "React",
            "TypeScript",
            "MyBatis",
            "AWS EC2",
            "Jenkins",
            "Apache Tomcat"
        ]
    },
    {
        title: "[교육부] 디지털 새싹캠프 보조 강사",
        period: "2023.01 - 2023.02",
        description: "학과 지도교수님 추천으로, 교육부 주관 '디지털 새싹 캠프'에서 강원도 영북 지역 초중고 학생들을 대상으로 IT 교육을 진행했습니다. 아두이노를 활용한 로봇 프로그래밍과 3D 프린팅 실습, 네오씽카 자율주행 자동차 키트를 활용한 코딩 교육을 담당했습니다. IT 교육 접근성이 상대적으로 낮은 지역 학생들에게 최신 기술을 경험할 수 있는 기회를 제공하며, 학생들의 디지털 리터러시와 컴퓨팅 사고력 향상에 기여했습니다. 특히 학생들의 눈높이에 맞춘 맞춤형 지도를 통해 교육 만족도를 높였으며, 디지털 교육의 지역 격차 해소에 실질적으로 기여한 경험이었습니다.",
        skills: [
            "Arduino Programming",
            "3D Printing",
            "Educational Technology",
            "Computing Education",
            "Student Mentoring"
        ]
    },
    {
        title: "대학사회봉사협의회 IT 봉사단",
        period: "2023.01",
        description: "필리핀 나익 지역 Malainen Elementary School에서 IT 취약계층 학생들을 위한 교육 봉사를 진행했습니다. 봉사단 대표로서 알고리즘 기초 교육과 종이 VR 제작 등 창의적인 IT 교육 프로그램을 기획하고 실행했으며, 전체 봉사단 운영과 문서화를 책임졌습니다. 언어의 장벽에도 불구하고 학생들과 진정성 있는 교감을 나누며 교육의 가치와 봉사의 보람을 깊이 느꼈고, 향후 지속적인 IT 교육 봉사 활동에 대한 강한 동기를 얻었습니다.",
        skills: ["Algorithm", "Responsibility"]
    },
    {
        title: "[인턴] 프론트엔드 개발자",
        company: "브이젠주식회사",
        period: "2022.01 - 2022.03",
        description: "한국남동발전 KOEN형 전력중개 시스템의 프론트엔드 개발을 담당했습니다. TypeScript와 React를 활용하여 실시간 전력 거래 모니터링 대시보드를 구현했으며, Chart.js를 통해 복잡한 전력 데이터를 효과적으로 시각화했습니다. 특히 사용자 피드백을 반영하여 대시보드 레이아웃을 개선하고 차트 인터랙션을 추가하여 데이터 가독성을 향상시켰습니다. 애자일 방법론을 따라 Jira로 업무를 관리하고 Confluence로 기술 문서를 작성하며 체계적인 프로젝트 경험을 쌓았습니다.",
        skills: ["TypeScript", "React", "Chart.js", "Confluence", "Jira", "Figma"]
    },
];
