import { motion, useScroll, useTransform } from 'framer-motion';
import { Section } from '../layout/Section';
import { useRef } from 'react';
import { Github, Mail } from 'lucide-react';

// 타이핑 효과를 위한 애니메이션 변수
const typingVariants = {
    hidden: { width: '0%' },
    visible: {
        width: '100%',
        transition: {
            duration: 1,
            delay: 0.5,
            ease: 'easeOut'
        }
    }
};

// 텍스트 페이드인 효과
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: custom * 0.2
        }
    })
};

// 버튼 호버 효과
const buttonHover = {
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.2,
            ease: 'easeInOut'
        }
    },
    tap: {
        scale: 0.95
    }
};

export const Introduction = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // 스크롤 기반 패럴랙스 효과
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <Section id="introduction" className="min-h-screen flex items-center relative overflow-hidden">
            {/* 배경 그라데이션 효과 */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white -z-10" />

            {/* 장식용 백그라운드 써클 */}
            <motion.div
                className="absolute -top-1/4 -right-1/4 w-96 h-96 rounded-full bg-primary-100 blur-3xl opacity-50"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />

            <div className="max-w-5xl mx-auto px-6 py-20" ref={containerRef}>
                <motion.div
                    style={{ y, opacity }}
                    className="space-y-16"
                >
                    {/* 이름 소개 섹션 */}
                    <div className="space-y-4">
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            custom={0}
                            className="overflow-hidden"
                        >
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                                안녕하세요,
                            </h1>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            custom={1}
                            className="overflow-hidden"
                        >
                            <h2 className="text-3xl md:text-4xl text-gray-800">
                                백엔드 개발자 <span className="text-primary-600 font-bold relative">
                                    김아영
                                    <motion.span
                                        className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ delay: 1, duration: 0.8 }}
                                    />
                                </span>입니다.
                            </h2>
                        </motion.div>
                    </div>

                    {/* 모토 & 소개 섹션 */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        custom={2}
                        className="space-y-8"
                    >
                        <div className="inline-block relative">
                            <p className="text-2xl md:text-3xl font-medium text-gray-800 relative z-10">
                                "서비스를 만든다는 책임감"
                            </p>
                            <motion.div
                                className="absolute -inset-2 bg-primary-100 rounded-lg -z-10"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.2, duration: 0.5 }}
                            />
                        </div>

                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            개발자이기 이전에 서비스를 만드는 사람으로서,<br/>
                            새로운 기술 도입이나 로직 변경에 무작정 집중하기보다는<br/>
                            실제 필요한 시점에 적절히 적용하여 서비스를 개선합니다.
                        </p>
                    </motion.div>

                    {/* 버튼 & 소셜 링크 섹션 */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        custom={3}
                        className="flex flex-col md:flex-row gap-6 items-center"
                    >
                        <div className="flex gap-4">
                            <a
                                href="#portfolio"
                                variants={buttonHover}
                                whileHover="hover"
                                whileTap="tap"
                                className="px-8 py-4 bg-black text-white rounded-lg font-medium shadow-lg shadow-primary-200 hover:shadow-xl hover:shadow-primary-200 transition-shadow"
                            >
                                포트폴리오 보기
                            </a>
                            <a
                                href="#contact"
                                variants={buttonHover}
                                whileHover="hover"
                                whileTap="tap"
                                className="px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors"
                            >
                                연락하기
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </Section>
    );
};
