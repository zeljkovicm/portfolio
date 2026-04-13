import { useState, useEffect } from 'react'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    const links = ['About', 'Skills', 'Projects', 'Contact']

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/90 backdrop-blur-md border-b border-gray-800/50 py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                <a href="#about" className="text-white font-bold text-xl tracking-tight">
                    M<span className="text-cyan-400">.</span>
                </a>

                {/* Desktop links */}
                <ul className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <li key={link}>
                            <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-white text-sm tracking-widest uppercase transition-colors duration-200 relative group">
                                {link}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile hamburger */}
                <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-2">
                    <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className="flex flex-col px-6 py-4 gap-4 bg-gray-950/95 border-t border-gray-800/50">
                    {links.map((link) => (
                        <li key={link}>
                            <a href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-white text-sm tracking-widest uppercase transition-colors duration-200">
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar