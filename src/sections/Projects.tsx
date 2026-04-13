import { useEffect, useState, useRef } from 'react'

interface Repo {
    id: number
    name: string
    description: string | null
    html_url: string
    homepage: string | null
    stargazers_count: number
    language: string | null
}

const ProjectCard = ({ repo }: { repo: Repo }) => (
    <div className="flex-shrink-0 w-[85vw] md:w-80 h-64 bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col gap-4 hover:border-cyan-400/50 transition-colors duration-200">
        <div className="flex justify-between items-start">
            <h3 className="text-white font-semibold text-lg">{repo.name.replace(/-/g, ' ')}</h3>
            {repo.stargazers_count > 0 && (
                <span className="text-yellow-400 text-sm flex-shrink-0 ml-2">★ {repo.stargazers_count}</span>
            )}
        </div>
        <p className="text-gray-400 text-sm flex-1 overflow-hidden line-clamp-3">{repo.description ?? 'Bez opisa'}</p>
        {repo.language && (
            <span className="text-cyan-400 font-mono text-sm">{repo.language}</span>
        )}
        <div className="flex gap-3 mt-auto">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-sm border border-gray-700 text-gray-300 px-4 py-2 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-200">
                GitHub →
            </a>
            {repo.homepage && (
                <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="text-sm border border-cyan-400/50 text-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400/10 transition-colors duration-200">
                    Live →
                </a>
            )}
        </div>
    </div>
)

const Projects = () => {
    const [repos, setRepos] = useState<Repo[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        fetch('https://api.github.com/users/zeljkovicm/repos?sort=updated&per_page=50')
            .then((res) => {
                if (!res.ok) throw new Error('Error loading Github repos')
                return res.json()
            })
            .then((data) => {
                if (Array.isArray(data)) {
                    setRepos(data)
                } else {
                    setError('Unexpected response from GitHub')
                }
                setLoading(false)
            })
            .catch((err) => {
                setError(err.message)
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        if (!scrollRef.current || repos.length === 0) return
        const cardWidth = scrollRef.current.querySelector('div')?.offsetWidth ?? 300
        scrollRef.current.scrollLeft = repos.length * (cardWidth + 24)
    }, [repos])

    const handleScroll = () => {
        if (!scrollRef.current || repos.length === 0) return
        const el = scrollRef.current
        const cardWidth = el.querySelector('div')?.offsetWidth ?? 300
        const singleWidth = repos.length * (cardWidth + 24)

        if (el.scrollLeft >= singleWidth * 2) {
            el.scrollLeft = singleWidth
        }
        if (el.scrollLeft <= 0) {
            el.scrollLeft = singleWidth
        }
    }

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollRef.current) return;
        const cardWidth = scrollRef.current.querySelector('div')?.offsetWidth ?? 300
        scrollRef.current.scrollBy({
            left: direction === 'left' ? -(cardWidth + 24) : cardWidth + 24,
            behavior: 'smooth',
        })
    }

    const tripled = repos.length > 0 ? [...repos, ...repos, ...repos] : []

    return (
        <section id="projects" className="py-20">
            <div className="max-w-6xl mx-auto px-6 mb-12">
                <h2 className="text-4xl font-bold mb-4 text-center">
                    Projects<span className="text-cyan-400">.</span>
                </h2>
                <p className="text-gray-400 text-center">My Github repos</p>
            </div>

            {loading && (
                <div className="flex justify-center">
                    <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}

            {error && (
                <p className="text-red-400 text-center">{error}</p>
            )}

            {!loading && !error && tripled.length > 0 && (
                <div className="relative max-w-6xl mx-auto px-6">
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none"></div>

                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="flex gap-6 overflow-x-auto pb-4"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            scrollSnapType: 'x mandatory',
                        }}
                    >
                        {tripled.map((repo, index) => (
                            <div key={`${repo.id}-${index}`} style={{ scrollSnapAlign: 'center' }}>
                                <ProjectCard repo={repo} />
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={() => scroll('left')}
                            className="w-12 h-12 rounded-full border border-gray-700 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-200 flex items-center justify-center text-xl"
                        >
                            ←
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-12 h-12 rounded-full border border-gray-700 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-200 flex items-center justify-center text-xl"
                        >
                            →
                        </button>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Projects