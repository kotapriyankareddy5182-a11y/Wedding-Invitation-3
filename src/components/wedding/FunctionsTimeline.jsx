import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const HALDI_IMG = "https://media.base44.com/images/public/69fedcc55e753ef411990907/bc6fa5b67_generated_e2109590.png";
const MEHANDI_IMG = "https://media.base44.com/images/public/69fedcc55e753ef411990907/ed03384dc_generated_db1e6aa4.png";
const SANGEET_IMG = "https://media.base44.com/images/public/69fedcc55e753ef411990907/2461b4ef0_generated_4bf65ed2.png";
const WEDDING_IMG = "https://media.base44.com/images/public/69fedcc55e753ef411990907/63e21c9ae_generated_9fa3660b.png";
const COUPLE_IMG = "https://media.base44.com/images/public/69fedcc55e753ef411990907/67fbbf544_generated_cb76358e.png";

const functions = [
    { name: "Haldi", date: "February 23, 2026", time: "Morning", description: "The auspicious turmeric ceremony to bless the couple", image: HALDI_IMG },
    { name: "Mehandi", date: "February 23, 2026", time: "Evening", description: "Intricate henna adorns the bride's hands with love stories", image: MEHANDI_IMG },
    { name: "Sangeet", date: "February 24, 2026", time: "Evening", description: "A night of music, dance, and celebration", image: SANGEET_IMG },
    { name: "Wedding", date: "February 25, 2026", time: "Muhurtham", description: "The sacred union at Sita Rama Kalyana Mandapam", image: WEDDING_IMG },
    { name: "Reception", date: "February 25, 2026", time: "Evening", description: "Grand celebration dinner with family and friends", image: COUPLE_IMG },
];

export default function FunctionsTimeline() {
    return (
        <section className="py-20 md:py-32 bg-background relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="text-center mb-16"
                >
                    <p className="font-title text-primary/70 text-xs tracking-[0.5em] uppercase mb-3">The Celebrations</p>
                    <h2 className="font-title text-4xl md:text-6xl font-bold"
                        style={{ color: 'hsl(var(--foreground))', textShadow: '0 2px 16px hsl(var(--foreground) / 0.4)' }}
                    >
                        Wedding Functions
                    </h2>
                    <div className="flex items-center justify-center gap-3 mt-4">
                        <div className="w-16 h-px bg-primary/50" />
                        <Sparkles className="w-4 h-4 text-primary" />
                        <div className="w-16 h-px bg-primary/50" />
                    </div>
                    <p className="font-body text-primary/55 mt-4 text-sm">
                        Sita Rama Kalyana Mandapam, Giddalur, Prakasam District
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 hidden md:block" />

                    <div className="space-y-12 md:space-y-0">
                        {functions.map((fn, idx) => (
                            <motion.div
                                key={fn.name}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                className={`relative md:flex items-center md:mb-16 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Content */}
                                <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                                    <div className="border border-primary/20 rounded-xl p-6 md:p-8 card-gradient text-left transition-colors shadow-lg shadow-black/20"
                                    >
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-full border border-primary/50 flex items-center justify-center shrink-0">
                                                <Sparkles className="w-5 h-5 text-primary" />
                                            </div>
                                            <p className="font-title text-primary text-xs font-semibold tracking-[0.2em] uppercase">{fn.name === "Wedding" ? "SACRED VOWS" : fn.name.toUpperCase()}</p>
                                        </div>
                                        <h3 className="font-title text-3xl md:text-4xl mb-3 text-foreground tracking-wide font-light"
                                        >
                                            {fn.name === "Wedding" ? "WEDDING CEREMONY" : fn.name.toUpperCase()}
                                        </h3>
                                        <p className="font-body text-foreground/90 italic text-[1.1rem] mb-4 opacity-90">{fn.description}</p>
                                        <p className="font-body text-foreground/90 mb-6">{fn.date} · {fn.time}</p>
                                        <button className="font-title text-primary text-xs font-semibold tracking-widest uppercase flex items-center gap-2 hover:opacity-80 transition-opacity">
                                            GET DIRECTIONS <span className="text-lg leading-none">→</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Center dot */}
                                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                                {/* Image */}
                                <div className={`md:w-1/2 mt-4 md:mt-0 ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                                    <div className="relative overflow-hidden rounded-lg aspect-square max-w-[200px] mx-auto md:mx-0 border border-primary/20">
                                        <img
                                            src={fn.image}
                                            alt={`${fn.name} ceremony`}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}