import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ScrollAnimationConfig {
    offset?: [string, string];
    inputRange?: number[];
    outputRange?: number[];
}

export const useScrollAnimation = (config: ScrollAnimationConfig = {}) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: config.offset || ["start end", "end start"]
    });

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.3, 0.7, 1],  // inputRange
        [0, 1, 1, 0]       // outputRange - 같은 길이여야 함
    );

    const y = useTransform(
        scrollYProgress,
        [0, 0.3, 0.7, 1],
        [100, 0, 0, -100]
    );

    return { ref, scrollYProgress, opacity, y };
};
