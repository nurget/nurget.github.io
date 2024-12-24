import { ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface SectionProps {
    id: string
    className?: string
    children: ReactNode
}

export const Section = ({ id, className, children }: SectionProps) => {
    return (
        <section
            id={id}
            className={cn(
                "min-h-screen py-16 scroll-mt-16",
                className
            )}
        >
            {children}
        </section>
    )
}
