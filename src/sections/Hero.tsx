import profileImg from '../assets/profile.png';
import cv from '../assets/cv.pdf';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiKaggle } from 'react-icons/si'
import { skills } from '../data/skills'

const positions = [
    { top: '3%', left: '17%', animationDelay: '0s', animationDuration: '7s' },
    { top: '8%', left: '63%', animationDelay: '1.3s', animationDuration: '6s' },
    { top: '12%', left: '38%', animationDelay: '2.7s', animationDuration: '8s' },
    { top: '18%', left: '82%', animationDelay: '0.4s', animationDuration: '9s' },
    { top: '22%', left: '7%', animationDelay: '3.1s', animationDuration: '6.5s' },
    { top: '31%', left: '54%', animationDelay: '1.8s', animationDuration: '7.5s' },
    { top: '37%', left: '29%', animationDelay: '4.2s', animationDuration: '8.5s' },
    { top: '43%', left: '76%', animationDelay: '0.9s', animationDuration: '6.8s' },
    { top: '49%', left: '13%', animationDelay: '2.3s', animationDuration: '9.5s' },
    { top: '54%', left: '88%', animationDelay: '3.7s', animationDuration: '7.2s' },
    { top: '61%', left: '44%', animationDelay: '1.1s', animationDuration: '6.3s' },
    { top: '67%', left: '21%', animationDelay: '4.8s', animationDuration: '8.8s' },
    { top: '72%', left: '69%', animationDelay: '0.6s', animationDuration: '7.8s' },
    { top: '78%', left: '5%', animationDelay: '2.9s', animationDuration: '9.2s' },
    { top: '83%', left: '57%', animationDelay: '1.5s', animationDuration: '6.6s' },
    { top: '88%', left: '33%', animationDelay: '3.4s', animationDuration: '8.3s' },
    { top: '92%', left: '79%', animationDelay: '0.2s', animationDuration: '7.1s' },
    { top: '15%', left: '48%', animationDelay: '2.1s', animationDuration: '9.8s' },
    { top: '58%', left: '91%', animationDelay: '4.1s', animationDuration: '6.9s' },
]

const Hero = () => {
    return (
        <section id="about" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-gray-950 to-purple-950/20 pointer-events-none"></div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-400/5 rounded-full blur-3xl pointer-events-none"></div>

            {skills.slice(0, positions.length).map((skill, index) => (
                <div key={index} className="absolute opacity-10 pointer-events-none floating-icon" style={positions[index]}>
                    <img src={skill.icon} alt="" className="w-12 h-12" />
                </div>
            ))}

            <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12 relative z-10">
                <div className="flex-1 text-center md:text-left">
                    <p className="text-cyan-400 font-mono mb-3 tracking-widest text-sm uppercase">Hello, I am</p>
                    <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
                        Milan
                        <span className="text-cyan-400">.</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-400 font-light mb-6">
                        Software and Data Engineer
                    </h2>
                    <p className="text-gray-400 text-lg max-w-xl mb-8 leading-relaxed">
                        Final-year Computer Science student with nearly 10 years of experience in IT across different roles.
                        I enjoy working across the stack, with a focus on building clean and reliable applications, and I also have a growing interest in machine learning.
                    </p>

                    <div className="flex gap-5 justify-center md:justify-start mb-8">
                        <a href="https://github.com/zeljkovicm" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/milan-zeljkovi%C4%87-513a1426b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://www.kaggle.com/milanzeljkovic96" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                            <SiKaggle size={24} />
                        </a>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <a href="#contact" className="bg-cyan-400 text-gray-950 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-all duration-200 hover:scale-105">
                            Contact me
                        </a>
                        <a href="#projects" className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-200 hover:scale-105">
                            My projects
                        </a>
                        <a href={cv} download="Milan_Zeljkovic_CV.pdf" className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 hover:text-white transition-all duration-200 hover:scale-105">
                            Download CV ↓
                        </a>
                    </div>
                </div>

                <div className="flex-shrink-0 relative">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-cyan-400/40 relative z-10">
                        <img src={profileImg} alt="Milan Željković" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -inset-3 rounded-full border border-cyan-400/20"></div>
                    <div className="absolute -inset-6 rounded-full border border-cyan-400/10"></div>
                    <div className="absolute inset-0 rounded-full bg-cyan-400/5 blur-xl"></div>
                </div>
            </div>
        </section>
    )
}

export default Hero