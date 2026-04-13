import { useEffect, useRef } from 'react'
import { skills } from '../data/skills'

const row1 = skills.slice(0, Math.ceil(skills.length / 2))
const row2 = skills.slice(Math.ceil(skills.length / 2))

const SkillItem = ({ skill }: { skill: { name: string; icon: string } }) => (
    <div className="flex-shrink-0 flex flex-col items-center gap-2 px-6">
        <img src={skill.icon} alt={skill.name} className="w-10 h-10 opacity-80 hover:opacity-100 transition-opacity duration-200" />
        <span className="text-gray-500 text-xs font-mono hover:text-gray-300 transition-colors duration-200">{skill.name}</span>
    </div>
)

const InfiniteRow = ({ items, reverse = false }: { items: typeof skills; reverse?: boolean }) => {
    const trackRef = useRef<HTMLDivElement>(null)
    const posRef = useRef(0)
    const rafRef = useRef<number>(0)

    useEffect(() => {
        const track = trackRef.current
        if (!track) return

        const singleWidth = track.scrollWidth / 3
        posRef.current = reverse ? -singleWidth : 0
        track.style.transform = `translateX(${posRef.current}px)`

        const speed = 0.4;

        const animate = () => {
            if (!track) return;

            if (reverse) {
                posRef.current += speed;
                if (posRef.current >= 0) {
                    posRef.current = -singleWidth;
                }
            } else {
                posRef.current -= speed;
                if (posRef.current <= -singleWidth) {
                    posRef.current = 0;
                }
            }

            track.style.transform = `translateX(${posRef.current}px)`
            rafRef.current = requestAnimationFrame(animate)
        }

        rafRef.current = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(rafRef.current)
    }, [reverse])
    const tripled = [...items, ...items, ...items]

    return (
        <div className="overflow-hidden py-4">
            <div ref={trackRef} className="flex will-change-transform">
                {tripled.map((skill, index) => (
                    <SkillItem key={`${skill.name}-${index}`} skill={skill} />
                ))}
            </div>
        </div>
    )
}

const Skills = () => {
    return (
        <section id="skills" className="py-20 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 mb-12">
                <h2 className="text-4xl font-bold mb-4 text-center">
                    Skills<span className="text-cyan-400">.</span>
                </h2>
                <p className="text-gray-400 text-center">Technologies I work with</p>
            </div>

            <div className="relative max-w-6xl mx-auto px-6">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none"></div>
                <InfiniteRow items={row1} />
                <InfiniteRow items={row2} reverse />
            </div>
        </section>
    )
}

export default Skills