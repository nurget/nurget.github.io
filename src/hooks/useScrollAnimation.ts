import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const useScrollAnimation = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref
    });

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.2],     // 시작할 때만 페이드인
        [0, 1]        // 한번 나타나면 계속 유지
    );

    const y = useTransform(
        scrollYProgress,
        [0, 0.2],     // 시작할 때만 움직임
        [100, 0]      // 위치 고정
    );

    return { ref, scrollYProgress, opacity, y };
};
