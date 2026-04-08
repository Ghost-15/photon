import Link from 'next/link';

export const metadata = {
    title: 'About Photon | Photon SARL',
    description: 'Learn about Photon, the first Congolese Wireline & Slickline company.',
};
const values = [
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M12 8c-1.657 0-3 1.343-3 3v7h6v-7c0-1.657-1.343-3-3-3z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M5 21h14M4 10h16M7 4h10" />
            </svg>
        ),
        title: "Safety",
        desc: "Nothing is more important to us than quality, health, safety, and the environment. It is our top priority.",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M19 21v-2a7 7 0 00-14 0v2" />
            </svg>
        ),
        title: "Integrity",
        desc: "We uphold the highest ethical standards in all our operations, wherever we work in the region.",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: "Innovation",
        desc: "We constantly seek to improve everything we do, because discovery is the foundation of science and progress.",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M12 6v12m6-6H6" />
            </svg>
        ),
        title: "Potential",
        desc: "We grow and support each other continuously, enabling every employee to maximize their potential.",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M5 13l4 4L19 7" />
            </svg>
        ),
        title: "Excellence",
        desc: "The quality of our services must always speak for us — consistently and unmistakably.",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M12 8v4m0 4h.01M4.93 4.93l14.14 14.14" />
            </svg>
        ),
        title: "Responsibility",
        desc: "We perform our tasks to the best of our abilities and take responsibility for all our actions and results.",
    },
];

export default function About() {
    return (
        <main className="flex flex-col min-h-screen">

            {/* ── HERO ── */}
            <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1626695436755-3e288720849c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1742&q=80')",
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-transparent" />
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Photon</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-xl leading-relaxed">
                        Founded with the ambition to be a key partner for Wireline & Slickline services in Congo and beyond.
                    </p>
                </div>
            </section>

            {/* ── WHO WE ARE ── */}
            <section className="bg-white py-24 px-4">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Who We Are</span>
                        <h2 className="mt-3 text-4xl font-bold text-slate-900 mb-6">Photon SARL</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            Photon is a service company specialized in well testing.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-8">
                            Certified ISO 14001:2015, ISO 9001:2015, and ISO 45001:2018, Photon is a leading,
                            technology‑driven, and customer‑focused organization. Our operations are fully automated,
                            reflecting our commitment to leveraging technology to deliver excellence.
                            We are dedicated to responding quickly to the needs of our growing client base and actively contributing to the economic development of Congo.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5"
                        >
                            Work With Us
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-blue-50 rounded-3xl -rotate-2" />
                        <img
                            src="/Wireline_Cable.jpg"
                            alt="Wireline Cable"
                            className="relative rounded-2xl w-full object-cover shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* ── MISSION & VISION ── */}
            <section className="bg-slate-900 py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase">Our Purpose</span>
                        <h2 className="mt-2 text-4xl font-bold text-white">Mission & Vision</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-800 rounded-2xl p-10 border border-slate-700 hover:border-blue-500/50 transition-colors duration-300">
                            <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Our mission is to leverage technology to fully integrate ourselves into our clients’ core operations, sharing the same values, commitment, and passion in order to achieve outstanding results.                            </p>
                        </div>
                        <div className="bg-slate-800 rounded-2xl p-10 border border-slate-700 hover:border-cyan-500/50 transition-colors duration-300">
                            <div className="w-12 h-12 rounded-xl bg-cyan-600/20 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Our vision is to become a regional technology‑driven company, firmly committed to our partners in order to drive energy innovation across regional markets.                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── VALUES ── */}
            <section className="bg-white py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">What Drives Us</span>
                            <h2 className="mt-3 text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
                            <p className="text-slate-500 mb-10 leading-relaxed">
                                Three pillars shape how we work, grow, and serve our clients every day.
                            </p>
                            <div className="space-y-6">
                                {values.map(({ icon, title, desc }) => (
                                    <div key={title} className="flex items-start gap-5">
                                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                                            {icon}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-800 mb-1">{title}</h3>
                                            <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-slate-100 rounded-3xl rotate-2" />
                            <img
                                src="/ourValues.jpg"
                                alt="Our Values"
                                className="relative rounded-2xl w-full object-cover shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}