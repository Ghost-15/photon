
export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 py-10 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm">© {new Date().getFullYear()} Photon SARL. All rights reserved.</p>
                <p className="text-sm">Pointe-Noire, République du Congo</p>
            </div>
        </footer>
    );
}