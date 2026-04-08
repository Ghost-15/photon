'use client';
import { useState } from "react";

export default function Formulaire() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [succMsg, setSuccMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const sendMail = async (e) => {
        e.preventDefault();
        setErrMsg('');
        setSuccMsg('');

        const emailRegex = /^[A-Za-z._\-0-9]*[@][A-Za-z]*[.][a-z]{2,4}$/;
        if (!emailRegex.test(email)) {
            setErrMsg('Invalid email address');
            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ name, email, subject, message }),
            });

            if (response?.status === 200) {
                setSuccMsg('Your message has been sent successfully!');
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            } else {
                setErrMsg('Technical issue. Please email us directly at contact@photon-cg.com');
            }
        } catch {
            setErrMsg('Technical issue. Please email us directly at contact@photon-cg.com');
        } finally {
            setIsLoading(false);
        }
    };

    const contactInfo = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            label: 'Address',
            lines: ['74 Avenue Jacques Opangault,', 'Songolo Pointe-Noire,', 'République du Congo'],
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            label: 'Phone',
            lines: ['+242 06 405 0548', '+242 05 381 8178'],
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            label: 'Email',
            lines: ['contact@photon-cg.com'],
        },
    ];

    const inputClass = "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm";

    return (
        <section className="w-full bg-gradient-to-b from-slate-50 to-white py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Contact</span>
                    <h2 className="mt-2 text-4xl font-bold text-slate-900">Get In Touch</h2>
                    <p className="mt-3 text-slate-500 max-w-lg mx-auto">
                        Can't find what you're looking for? Fill in the form and our team will get back to you promptly.
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/70 overflow-hidden border border-slate-100">
                    <div className="grid md:grid-cols-5">
                        {/* Left panel */}
                        <div className="md:col-span-2 bg-gradient-to-br from-blue-700 to-blue-900 p-10 flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Contact Information</h3>
                                <p className="text-blue-200 text-sm mb-10">Reach out through any of these channels</p>

                                <div className="space-y-8">
                                    {contactInfo.map(({ icon, label, lines }) => (
                                        <div key={label} className="flex items-start gap-4">
                                            <div className="mt-0.5 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-blue-200 flex-shrink-0">
                                                {icon}
                                            </div>
                                            <div>
                                                <p className="text-blue-300 text-xs font-semibold uppercase tracking-wider mb-1">{label}</p>
                                                {lines.map((line, i) => (
                                                    <p key={i} className="text-white text-sm leading-relaxed">{line}</p>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative circles */}
                            <div className="relative mt-16 h-24">
                                <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-x-4 translate-y-8" />
                                <div className="absolute bottom-0 right-0 w-20 h-20 rounded-full bg-white/10 translate-x-4 translate-y-4" />
                            </div>
                        </div>

                        {/* Right panel - Form */}
                        <div className="md:col-span-3 p-10">
                            <h3 className="text-xl font-bold text-slate-800 mb-6">Send us a message</h3>

                            {errMsg && (
                                <div className="mb-5 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm flex items-center gap-2">
                                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                    {errMsg}
                                </div>
                            )}
                            {succMsg && (
                                <div className="mb-5 px-4 py-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-600 text-sm flex items-center gap-2">
                                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    {succMsg}
                                </div>
                            )}

                            <form onSubmit={sendMail} className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className={inputClass}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className={inputClass}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Subject</label>
                                    <input
                                        type="text"
                                        placeholder="How can we help?"
                                        required
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        className={inputClass}
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                                    <textarea
                                        rows={5}
                                        placeholder="Tell us more about your project or inquiry..."
                                        required
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className={`${inputClass} resize-none`}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm"
                                >
                                    {isLoading ? (
                                        <>
                                            <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}