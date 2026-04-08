import Link from 'next/link';

export const metadata = {
  title: 'Home | Photon',
  description: 'Photon – A Private Congolese Wireline & Slickline Company',
};

const services = [
  { title: 'Slickline Operations', icon: '⚙️', desc: 'Precision well intervention using mechanical toolstrings.' },
  { title: 'GR Correlation', icon: '📊', desc: 'Gamma-ray logging for accurate formation correlation.' },
  { title: 'Memory Gauges', icon: '🔬', desc: 'Downhole pressure & temperature data acquisition.' },
  { title: 'Tubing Puncher & Cutter', icon: '🔩', desc: 'Mechanical perforation and tubing cutting services.' },
  { title: 'Plug & Packer Setting', icon: '🛠️', desc: 'Zone isolation for well integrity and workover ops.' },
  { title: 'Cement Bond Logging', icon: '📡', desc: 'Casing integrity evaluation and corrosion assessment.' },
  { title: 'Production Logging', icon: '📈', desc: 'Flow profiling and reservoir performance measurement.' },
  { title: 'Open Hole Logging', icon: '🌊', desc: 'Basic formation evaluation in open hole sections.' },
];


export default function Home() {
  return (
      <main className="flex flex-col min-h-screen">

        {/* ── HERO ── */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background image */}
          <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1518291182257-c3dbbc38d89f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
              }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/40" />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                A Private<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                Congolese
                            </span>{' '}
                Oil Services Company
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-xl">
                Great local and international experience in oilfield services — onshore, offshore, and deepwater operations.
              </p>
            </div>
          </div>
        </section>


        {/* ── SERVICES ── */}
        <section className="bg-slate-50 py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">What We Do</span>
              <h2 className="mt-2 text-4xl font-bold text-slate-900">Our Services</h2>
              <p className="mt-3 text-slate-500 max-w-xl mx-auto">
                Comprehensive wireline and slickline solutions delivered with technical excellence and local expertise.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map(({ title, icon, desc }) => (
                  <div
                      key={title}
                      className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100 hover:-translate-y-1.5 transition-all duration-300 cursor-default"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-100 transition-colors">
                      {icon}
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2 leading-snug">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY PHOTON BANNER ── */}
        <section className="relative py-28 overflow-hidden">
          <div
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1609373235983-bef55d06268d?q=80&w=2070&auto=format&fit=crop')",
              }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 to-blue-950/70" />
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="max-w-xl">
              <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase">Why Photon?</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                Effective Technology Solutions
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                We provide cutting-edge technology solutions tailored to our customers' needs and challenges — from well intervention to formation evaluation.
              </p>
              <ul className="space-y-3">
                {['Local & international expertise', 'Onshore, offshore & deepwater', 'Congolese-owned & operated'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-200">
                                    <span className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                      {item}
                    </li>
                ))}
              </ul>
              <Link
                  href="/about-photon"
                  className="inline-flex items-center gap-2 mt-10 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

      </main>
  );
}