import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface UseContactForm {
    isLoading: boolean;
    error: string | null;
    success: boolean;
    handleSubmit: (data: ContactForm) => Promise<void>;
}

export const useContactForm = (): UseContactForm => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (data: ContactForm) => {
        setIsLoading(true);
        setError(null);
        setSuccess(false);

        try {
            // 1. 실제 문의 이메일
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID_INQUIRY,
                {
                    from_name: data.name,
                    from_email: data.email,
                    to_name: import.meta.env.VITE_ADMIN_NAME,
                    to_email: import.meta.env.VITE_ADMIN_EMAIL,
                    subject: data.subject,
                    message: data.message,
                    reply_to: data.email,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            // 2. 자동 응답 이메일
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID_AUTO_REPLY,
                {
                    from_name: import.meta.env.VITE_ADMIN_NAME,
                    from_email: import.meta.env.VITE_ADMIN_EMAIL,
                    to_name: data.name,
                    to_email: data.email,
                    subject: '문의하신 내용이 접수되었습니다.',
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setSuccess(true);
        } catch (err) {
            setError('메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요.');
            console.error('Email error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, error, success, handleSubmit };
};
