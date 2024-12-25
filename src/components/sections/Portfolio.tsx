import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Section } from '../layout/Section';
import { PROJECTS } from '../../constants/portfolio';
import { useProgressiveImage } from '../../hooks/useProgressiveImage';
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { Github, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
import {useEffect, useMemo, useState} from 'react';

interface ImageGalleryProps {
    images: { url: string; caption: string; }[];
    currentIndex: number;
    onClose: () => void;
    onPrevious: () => void;
    onNext: () => void;
}

const ImageGallery = ({ images, currentIndex, onClose, onPrevious, onNext }: ImageGalleryProps) => {
    if (!images?.length) return null;

    // Add keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') onPrevious();
            if (e.key === 'ArrowRight') onNext();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, onPrevious, onNext]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
            onClick={onClose}
        >
            <div className="relative w-full h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full"
                >
                    <X size={24} />
                </button>

                {/* Navigation buttons */}
                <button
                    onClick={onPrevious}
                    className={`absolute left-4 text-white p-2 hover:bg-white/10 rounded-full ${
                        currentIndex <= 0 ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    disabled={currentIndex <= 0}
                >
                    <ChevronLeft size={32} />
                </button>

                <button
                    onClick={onNext}
                    className={`absolute right-4 text-white p-2 hover:bg-white/10 rounded-full ${
                        currentIndex >= images.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    disabled={currentIndex >= images.length - 1}
                >
                    <ChevronRight size={32} />
                </button>

                {/* Image container */}
                <div className="max-w-5xl w-full px-12">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.3 }}
                            className="relative aspect-video"
                        >
                            <img
                                src={images[currentIndex].url}
                                alt={images[currentIndex].caption}
                                className="w-full h-full object-contain"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                                <div className="flex flex-col items-center gap-2">
                                    <p className="text-white text-center">
                                        {images[currentIndex].caption}
                                    </p>
                                    <p className="text-sm text-white/80">
                                        {currentIndex + 1} / {images.length}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
};

const ProjectCard = ({ project, index }: { project: typeof PROJECTS[0]; index: number }) => {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { ref, opacity, y } = useScrollAnimation();

    const thumbnail = useProgressiveImage(project.thumbnail);

    // 프로젝트의 모든 이미지를 하나의 배열로 관리
    const allImages = useMemo(() => [
        { url: project.thumbnail, caption: project.title },
        ...project.images
    ], [project.thumbnail, project.images]);

    // 이미지 클릭 시 갤러리 열기
    const handleImageClick = () => {
        setCurrentImageIndex(0);
        setIsGalleryOpen(true);
    };

    // 이전 이미지로 이동
    const handlePrevious = () => {
        setCurrentImageIndex(prev => Math.max(0, prev - 1));
    };

    // 다음 이미지로 이동
    const handleNext = () => {
        setCurrentImageIndex(prev => Math.min(allImages.length - 1, prev + 1));
    };

    return (
        <>
            <motion.div
                ref={ref}
                style={{ opacity, y }}
                className="relative min-h-screen flex items-center py-24"
            >
                <div className={`container mx-auto grid md:grid-cols-2 gap-8 px-6 ${
                    index % 2 === 0 ? '' : 'md:grid-flow-dense'
                }`}>
                    {/* Image */}
                    <div
                        className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden group cursor-pointer"
                        onClick={handleImageClick}
                    >
                        <motion.div
                            initial={{ scale: 1.2, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0"
                        >
                            {thumbnail && (
                                <img
                                    src={thumbnail}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            )}
                            <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-20" />

                            {/* Gallery indicator */}
                            <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/70 text-white rounded-full text-sm">
                                View Gallery ({project.images.length + 1} photos)
                            </div>
                        </motion.div>
                    </div>

                    {/* Content remains the same */}
                    <div className="flex flex-col justify-center">
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.2, duration: 0.8}}
                            className="space-y-6"
                        >
                            <div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600">{project.period}</p>
                            </div>

                            <p className="text-lg text-gray-700 leading-relaxed">
                                {project.description}
                            </p>

                            <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">주요 기능</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    {project.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                                    >
                                        <Github size={20}/>
                                        <span>GitHub</span>
                                    </a>
                                )}
                                {project.demoUrl && (
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
                                    >
                                        <ExternalLink size={20}/>
                                        <span>Live Demo</span>
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Image Gallery Modal */}
            <AnimatePresence>
                {isGalleryOpen && (
                    <ImageGallery
                        images={allImages}
                        currentIndex={currentImageIndex}
                        onClose={() => setIsGalleryOpen(false)}
                        onPrevious={handlePrevious}
                        onNext={handleNext}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export const Portfolio = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <Section id="portfolio" className="relative">
            <motion.div
                style={{ scaleX }}
                className="fixed top-0 left-0 right-0 h-1 bg-primary-500 origin-left z-50"
            />

            <div className="text-center py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Portfolio</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        주요 프로젝트
                    </p>
                </motion.div>
            </div>

            <div className="space-y-32">
                {PROJECTS.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </Section>
    );
};
