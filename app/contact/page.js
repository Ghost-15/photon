import Formulaire from "@/compoments/Formulaire";

export const metadata = {
    title: 'Contact Us | Photon SARL',
    description: 'Get in touch with Photon SARL for wireline and slickline services.',
};

const banner = {
    backgroundImage:
        "url('https://images.unsplash.com/photo-1563906267088-b029e7101114?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};

export default function Contact() {
    return (
        <main className="flex flex-col min-h-screen">

            {/* ── HERO ── */}
            <section className="relative h-[60vh] min-h-[420px] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={banner} />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-transparent" />
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
                        Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Us</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-xl leading-relaxed">
                        Kindly call any of our service numbers or fill the form below. All enquiries, complaints and feedback will be handled by our team.
                    </p>
                </div>
            </section>

            <Formulaire />

        </main>
    );
}