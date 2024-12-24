import { motion } from 'framer-motion'
import { Section } from '../layout/Section'
import { SKILLS } from '../../constants/skills'

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
}

const SkillLevel = ({ level }: { level: number }) => {
    return (
        <div className="flex gap-1.5">
            {[1, 2, 3, 4, 5].map((i) => (
                <div
                    key={i}
                    className={`w-2.5 h-2.5 rounded-full ${
                        i <= level
                            ? 'bg-primary-500'
                            : 'bg-gray-100 border border-gray-200'
                    }`}
                />
            ))}
        </div>
    )
}

export const Skills = () => {
    return (
        <Section id="skills">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Skills</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        기술 스택 및 개발 도구
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {SKILLS.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                {category.title}
                            </h3>
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="group">
                                        <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-700">
                        {skill.name}
                      </span>
                                            <SkillLevel level={skill.level} />
                                        </div>
                                        {skill.description && (
                                            <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                                                {skill.description}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200"
                >
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        스킬 레벨 가이드
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                        <div>
                            <div className="flex items-center gap-2">
                                <SkillLevel level={5} />
                                <span>전문가 수준</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <SkillLevel level={4} />
                                <span>실무 활용 가능</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <SkillLevel level={3} />
                                <span>프로젝트 경험</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <SkillLevel level={2} />
                                <span>기본 지식</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <SkillLevel level={1} />
                                <span>입문</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    )
}
