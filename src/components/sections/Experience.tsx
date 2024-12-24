import { motion } from 'framer-motion'
import { Section } from '../layout/Section'
import { EXPERIENCES } from '../../constants/experiences'
import { Calendar } from 'lucide-react'

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
}

export const Experience = () => {
    return (
        <Section id="experience">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Experience</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        저의 주요 경험들입니다.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="relative"
                >
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />

                    {EXPERIENCES.map((experience, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="relative mb-12 ml-16"
                        >
                            {/* Timeline dot */}
                            <div className="absolute -left-20 mt-1.5">
                                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                                    <Calendar size={20} className="text-primary-600" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex flex-wrap items-start justify-between gap-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900">
                                            {experience.title}
                                        </h3>
                                        {experience.company && (
                                            <p className="text-primary-600 font-medium">
                                                {experience.company}
                                            </p>
                                        )}
                                    </div>
                                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {experience.period}
                  </span>
                                </div>

                                <p className="mt-4 text-gray-600 leading-relaxed">
                                    {experience.description}
                                </p>

                                {experience.skills && (
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {experience.skills.map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full"
                                            >
                        {skill}
                      </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </Section>
    )
}
