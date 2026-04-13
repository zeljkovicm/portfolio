import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiKaggle } from 'react-icons/si'

const Footer = () => {
    return (
        <footer className="border-t border-gray-800 py-8">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <span className="text-white font-bold text-xl tracking-tight">
                    M<span className="text-cyan-400">.</span>
                </span>

                <p className="text-gray-600 text-sm font-mono">
                    © {new Date().getFullYear()} Milan Zeljković. All rights reserved.
                </p>

                <div className="flex gap-4">
                    <a href="https://github.com/zeljkovicm" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-white transition-colors duration-200">
                        <FaGithub size={18} />
                    </a>
                    <a href="https://www.linkedin.com/in/milan-zeljkovi%C4%87-513a1426b/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-cyan-400 transition-colors duration-200">
                        <FaLinkedin size={18} />
                    </a>
                    <a href="https://www.kaggle.com/milanzeljkovic96" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-cyan-400 transition-colors duration-200">
                        <SiKaggle size={18} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer