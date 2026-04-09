import Link from "next/link";

export const metadata = {
    title: "Our Services | Photon SARL",
    description: "Discover Photon's well testing, sampling, and production services.",
};

export default function Services() {
    return (
        <main className="flex flex-col min-h-screen">

            {/* ── HERO ── */}
            <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1581091870622-df7a9b5c1c9d?auto=format&fit=crop&w=1740&q=80')",
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-transparent" />

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Services</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-xl leading-relaxed">
                        Delivering safe, precise and reliable well testing solutions across Congo and the region.
                    </p>
                </div>
            </section>

            {/* ── ABOUT WELL TESTING ── */}
            <section className="bg-white py-24 px-4">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Well Testing</span>
                        <h2 className="mt-3 text-4xl font-bold text-slate-900 mb-6">Understanding the Reservoir</h2>

                        <p className="text-slate-600 leading-relaxed mb-6">
                            Well testing provides essential dynamic data for exploration, production, and underground gas storage.
                            Photon delivers accurate measurements to determine reservoir behavior, production potential, and fluid composition.
                        </p>

                        <p className="text-slate-600 leading-relaxed mb-8">
                            Our automated systems and certified processes ensure safe and efficient operations, even in challenging field conditions.
                        </p>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5"
                        >
                            Request a Quote
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-blue-50 rounded-3xl -rotate-2" />
                        <img
                            src="https://ghost-15.github.io/photon/wellTesting.png"
                            alt="Well Testing"
                            className="relative rounded-2xl w-full object-cover shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* ── SURFACE WELL TESTING ── */}
            <section className="bg-slate-900 py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase">Surface Operations</span>
                        <h2 className="mt-2 text-4xl font-bold text-white">Surface Well Testing & Sampling</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-800 p-10 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all">
                            <h3 className="text-2xl font-bold text-white mb-4">Modern Testing Systems</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Photon deploys modern triphase separators, H₂S‑rated equipment, and surge tanks to measure pressure,
                                temperature, and fluid volumes with high accuracy.
                            </p>
                            <ul className="mt-6 space-y-2 text-slate-400 text-sm">
                                <li>• Surge Tank — 150 psi</li>
                                <li>• Triphase Separator — 1440 psi</li>
                                <li>• High‑precision measurement units</li>
                            </ul>
                        </div>

                        <div className="bg-slate-800 p-10 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all">
                            <h3 className="text-2xl font-bold text-white mb-4">Sampling & Production Data</h3>
                            <p className="text-slate-400 leading-relaxed">
                                We provide accurate data to answer key questions: What is produced? In what quantity? For how long?
                                Is further investment justified?
                            </p>
                            <ul className="mt-6 space-y-2 text-slate-400 text-sm">
                                <li>• Oil, gas & water measurement</li>
                                <li>• Pressure & temperature logging</li>
                                <li>• Fluid composition analysis</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── PROCESS STEPS WITH SCHEMAS ── */}
            <section className="bg-slate-900 py-15 px-4">
                <div className="max-w-6xl mx-auto">

                    {/* Title */}
                    <div className="text-center mb-14">
                        <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase">Workflow</span>
                        <h2 className="mt-2 text-4xl font-bold text-white">Step-by-Step Process</h2>
                    </div>

                    {/* Steps */}
                    <div className="mt-4">

                        {/* STEP 1 */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-4">1. Pre‑Job Engineering</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Our engineers design the test sequence, define safety barriers, select equipment,
                                    and simulate expected reservoir behavior to ensure optimal test conditions.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-white mb-4">2. Rig‑Up & Safety Validation</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Equipment is installed, pressure‑tested, and validated through ESD/SSV checks.
                                    Photon follows ISO 9001, 14001 and 45001 standards to ensure safe operations.
                                </p>
                            </div>
                        </div>

                        {/* STEP 2 */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-4">3. Flowing & Build‑Up Phases</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    The well is flowed through the separator while pressure, temperature, and flow rates
                                    are continuously monitored. Build‑up periods allow reservoir pressure to stabilize.
                                </p>
                            </div>

                            <div className="order-1 md:order-2">
                                <h3 className="text-3xl font-bold text-white mb-4">4. Data Analysis & Reporting</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Engineers interpret pressure derivatives, flow regimes, and reservoir boundaries.
                                    A detailed report is delivered with recommendations for production strategy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── EQUIPMENT ── */}
            <section className="bg-slate-900 py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase">Our Tools</span>
                        <h2 className="mt-2 text-4xl font-bold text-white">Equipment Fleet</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            "Choke Manifold 10K",
                            "Surface Safety Valve (SSV) 10K",
                            "Emergency Shut Down (ESD)",
                            "Separator 1440 psi",
                            "Oil & Gas Manifold",
                            "Gauge Tank 200 BBL",
                            "Transfer Pump",
                            "Piping — multiple sizes",
                        ].map((item) => (
                            <div
                                key={item}
                                className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center text-slate-300 hover:border-blue-500/50 transition-all"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
}