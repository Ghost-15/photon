"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [navOpen, setNavOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Toggle menu
    const toggleNav = () => setNavOpen((prev) => !prev);

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY >= 80);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/service", label: "Service" },
        { href: "/about-photon", label: "About Photon" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <>
            <nav
                className={`fixed left-0 top-0 w-full z-50 transition-all duration-500 ${
                    scrolled
                        ? "bg-white shadow-lg"
                        : "bg-transparent backdrop-blur-md"
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

                    {/* LOGO */}
                    <Link href="/" className="flex items-center">
                        <img
                            src="/photon_logo_TG.png"
                            alt="Photon Logo"
                            width={160}
                            height={60}

                            className="object-contain"
                        />
                    </Link>

                    {/* DESKTOP MENU */}
                    <ul className="hidden md:flex items-center gap-2">
                        {navLinks.map(({ href, label }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={`relative px-5 py-2 text-sm font-medium transition-colors group ${
                                        scrolled
                                            ? "text-slate-700 hover:text-blue-600"
                                            : "text-white/90 hover:text-white"
                                    }`}
                                >
                                    {label}
                                    <span className="absolute inset-x-5 -bottom-0.5 h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                                </Link>
                            </li>
                        ))}

                        {/* CTA */}
                        <li className="ml-4">
                            <Link
                                href="/contact"
                                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5"
                            >
                                Get in Touch
                            </Link>
                        </li>
                    </ul>

                    {/* HAMBURGER */}
                    <button
                        onClick={toggleNav}
                        className="md:hidden flex flex-col gap-1.5 p-2 z-50"
                        aria-label="Toggle menu"
                    >
            <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                    navOpen ? "rotate-45 translate-y-2" : ""
                } ${scrolled || navOpen ? "bg-slate-800" : "bg-white"}`}
            />
                        <span
                            className={`block h-0.5 w-6 transition-all duration-300 ${
                                navOpen ? "opacity-0" : ""
                            } ${scrolled || navOpen ? "bg-slate-800" : "bg-white"}`}
                        />
                        <span
                            className={`block h-0.5 w-6 transition-all duration-300 ${
                                navOpen ? "-rotate-45 -translate-y-2" : ""
                            } ${scrolled || navOpen ? "bg-slate-800" : "bg-white"}`}
                        />
                    </button>
                </div>
            </nav>

            {/* MOBILE MENU */}
            <div
                className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
                    navOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                }`}
            >
                <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8">

                    {navLinks.map(({ href, label }, i) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={() => setNavOpen(false)}
                            className={`text-3xl font-bold text-white hover:text-blue-400 transition-all duration-300 ${
                                navOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                            }`}
                            style={{
                                transitionDelay: navOpen ? `${i * 80}ms` : "0ms",
                            }}
                        >
                            {label}
                        </Link>
                    ))}

                </div>
            </div>
        </>
    );
}