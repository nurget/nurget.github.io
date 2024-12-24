import { motion } from 'framer-motion';
import { Section } from '../layout/Section';
import { useContactForm } from '../../hooks/useContactForm';
import {Mail, Phone, MapPin, Loader2, CheckCircle, AlertCircle, Github, BookOpen} from 'lucide-react';
import { useForm } from 'react-hook-form';

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
    const { isLoading, error, success, handleSubmit: submitForm } = useContactForm();

    const onSubmit = async (data: ContactFormData) => {
        await submitForm(data);
        if (success) {
            reset();
        }
    };

    return (
        <Section id="contact">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Contact</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        궁금한 점이 있으시다면 언제든 연락 주세요!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                연락처 정보
                            </h3>
                            <div className="space-y-4">
                                <a
                                    href="mailto:devayeong@gmail.com"
                                    className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors"
                                >
                                    <Mail className="w-5 h-5" />
                                    <span>devayeong@gmail.com</span>
                                </a>
                                <div className="flex items-center gap-3 text-gray-600">
                                    <Phone className="w-5 h-5" />
                                    <span>010-5331-3193</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600">
                                    <MapPin className="w-5 h-5" />
                                    <span>Seoul, Korea</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                Social Links
                            </h3>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/nurget"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-primary-600 transition-colors"
                                    aria-label="GitHub 프로필"
                                >
                                    <Github size={24}/>
                                </a>
                                <a
                                    href="https://yongcomzip.tistory.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-primary-600 transition-colors"
                                    aria-label="티스토리 블로그"
                                >
                                    <BookOpen size={24}/>
                                </a>
                            </div>

                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{opacity: 0, x: 20}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.5}}
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                이름
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    {...register('name', { required: '이름을 입력해주세요' })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    placeholder="홍길동"
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    이메일
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    {...register('email', {
                                        required: '이메일을 입력해주세요',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: '올바른 이메일 주소를 입력해주세요'
                                        }
                                    })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    placeholder="your@email.com"
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                    제목
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    {...register('subject', { required: '제목을 입력해주세요' })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    placeholder="문의 제목"
                                />
                                {errors.subject && (
                                    <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    메시지
                                </label>
                                <textarea
                                    id="message"
                                    {...register('message', { required: '메시지를 입력해주세요' })}
                                    rows={5}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    placeholder="문의하실 내용을 입력해주세요"
                                />
                                {errors.message && (
                                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <span className="flex items-center justify-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    전송 중...
                  </span>
                                ) : '메일 보내기'}
                            </button>

                            {success && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2 p-4 bg-green-50 text-green-700 rounded-lg"
                                >
                                    <CheckCircle className="w-5 h-5" />
                                    <span>메일이 성공적으로 전송되었습니다!</span>
                                </motion.div>
                            )}

                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2 p-4 bg-red-50 text-red-700 rounded-lg"
                                >
                                    <AlertCircle className="w-5 h-5" />
                                    <span>{error}</span>
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};
