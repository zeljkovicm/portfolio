import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null)
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        setStatus('loading')

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current as HTMLFormElement,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                setStatus('success')
                formRef.current?.reset()
            })
            .catch(() => {
                setStatus('error')
            })
    }

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <h2 className="text-4xl font-bold mb-4 text-center">
                    Contact<span className="text-cyan-400">.</span>
                </h2>
                <p className="text-gray-400 text-center mb-12">Have a project in mind? Let's talk.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm order-1 md:order-2">
                        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-500 text-xs font-mono tracking-widest uppercase">Name</label>
                                <input
                                    type="text"
                                    name="from_name"
                                    required
                                    placeholder="Your name"
                                    className="bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 focus:bg-gray-800 transition-all duration-200 text-sm"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-500 text-xs font-mono tracking-widest uppercase">Email</label>
                                <input
                                    type="email"
                                    name="from_email"
                                    required
                                    placeholder="your@email.com"
                                    className="bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 focus:bg-gray-800 transition-all duration-200 text-sm"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-500 text-xs font-mono tracking-widest uppercase">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={5}
                                    placeholder="Your message..."
                                    className="bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 focus:bg-gray-800 transition-all duration-200 resize-none text-sm"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="bg-cyan-400 text-gray-950 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mt-2"
                            >
                                {status === 'loading' ? 'Sending...' : 'Send message →'}
                            </button>
                            {status === 'success' && (
                                <p className="text-green-400 text-center font-mono text-sm">✓ Message sent successfully!</p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-400 text-center font-mono text-sm">✗ Something went wrong. Please try again.</p>
                            )}
                        </form>
                    </div>

                    <div className="flex flex-col items-center md:items-start justify-center gap-8 order-2 md:order-1 text-center md:text-left">
                        <div>
                            <h3 className="text-2xl font-bold mb-3">Let's work together</h3>
                            <p className="text-gray-400 leading-relaxed">
                                I'm always open to new opportunities, collaborations, or just a good conversation about tech. Feel free to reach out!
                            </p>
                        </div>


                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact