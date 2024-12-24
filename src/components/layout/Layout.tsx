import { ReactNode, useState } from 'react'
import { Sidebar } from './Sidebar'
import { Menu } from 'lucide-react'

interface LayoutProps {
    children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

            {/* Mobile menu button */}
            <button
                className="lg:hidden fixed top-4 left-4 z-20 p-2 rounded-md bg-white shadow-md"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <Menu size={24} />
            </button>

            {/* Main Content */}
            <main className="flex-1 px-4 py-8 lg:px-12 lg:py-12">
                {children}
            </main>
        </div>
    )
}
