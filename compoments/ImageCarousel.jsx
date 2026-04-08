"use client";
import { useState, useEffect } from "react";

const images = [
    "/img.png",
];

export default function ImageCarousel() {
    const [index, setIndex] = useState(0);

    // Défilement automatique
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    const goTo = (i) => setIndex(i);
    const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
    const next = () => setIndex((i) => (i + 1) % images.length);

    return (
        <section className="bg-slate-900 py-20 px-4">
            <div className="max-w-5xl mx-auto">

                <div className="relative overflow-hidden rounded-2xl shadow-xl">

                    {/* Images */}
                    <div
                        className="flex transition-transform duration-700"
                        style={{ transform: `translateX(-${index * 100}%)` }}
                    >
                        {images.map((src, i) => (
                            <img
                                key={i}
                                src={src}
                                alt={`Slide ${i}`}
                                className="w-full flex-shrink-0 object-cover h-[400px] md:h-[500px]"
                            />
                        ))}
                    </div>

                    {/* Boutons */}
                    <button
                        onClick={prev}
                        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white text-slate-900 p-3 rounded-full shadow-md transition"
                    >
                        ‹
                    </button>

                    <button
                        onClick={next}
                        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white text-slate-900 p-3 rounded-full shadow-md transition"
                    >
                        ›
                    </button>

                    {/* Pagination */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                className={`w-3 h-3 rounded-full transition ${
                                    index === i ? "bg-blue-600" : "bg-white/60"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}