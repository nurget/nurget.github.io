import { useState, useEffect } from 'react'
import {
    User, Briefcase, Code, Folder, Award, Mail,
    Github, ExternalLink, X as CloseIcon
} from 'lucide-react'
import { NAV_ITEMS, SOCIAL_LINKS } from '../../constants/navigation'
import { cn } from '../../lib/utils'

interface SidebarProps {
    isOpen: boolean
    onClose: () => void
}

const IconMap = {
    user: User,
    briefcase: Briefcase,
    code: Code,
    folder: Folder,
    award: Award,
    mail: Mail,
    github: Github,
    'external-link': ExternalLink,
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
    const [activeSection, setActiveSection] = useState<string>('')

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { threshold: 0.3 }
        )

        document.querySelectorAll('section[id]').forEach((section) => {
            observer.observe(section)
        })

        return () => observer.disconnect()
    }, [])

    return (
        <>
            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-30"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed lg:sticky top-0 left-0 z-40 h-screen w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out",
                    isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                )}
            >
                {/* Close button for mobile */}
                <button
                    onClick={onClose}
                    className="lg:hidden absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
                >
                    <CloseIcon size={20} />
                </button>

                <div className="flex flex-col h-full p-6">
                    {/* Profile section */}
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-gray-200">
                            <img
                                src="/me.JPG"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-xl font-bold">김아영</h2>
                        <p className="text-gray-600">Backend Developer</p>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1">
                        <ul className="space-y-2">
                            {NAV_ITEMS.map((item) => {
                                const Icon = IconMap[item.icon as keyof typeof IconMap]
                                return (
                                    <li key={item.href}>
                                        <a
                                            href={item.href}
                                            className={cn(
                                                "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors",
                                                activeSection === item.href.slice(1)
                                                    ? "bg-primary-50 text-primary-600"
                                                    : "text-gray-600 hover:bg-gray-100"
                                            )}
                                            onClick={() => {
                                                if (window.innerWidth < 1024) {
                                                    onClose()
                                                }
                                            }}
                                        >
                                            <Icon size={18} />
                                            <span>{item.label}</span>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>

                    {/* Social links */}
                    <div className="mt-auto pt-6 border-t">
                        <div className="flex justify-center gap-4">
                            {SOCIAL_LINKS.map((link) => {
                                const Icon = IconMap[link.icon as keyof typeof IconMap]
                                return (
                                    <a
                                        key={link.platform}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 hover:text-primary-600 transition-colors"
                                        aria-label={link.platform}
                                    >
                                        <Icon size={20} />
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}
