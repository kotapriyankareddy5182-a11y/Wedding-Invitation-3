import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const GANESH_IMG = "https://media.base44.com/images/public/69fedcc55e753ef411990907/8a047269f_image.png";
const ELEPHANT_IMG = "https://media.base44.com/images/public/69fedcc55e753ef411990907/075cc77e3_image.png";

export default function HeroSection({ onOpenInvitation }) {
    const [showContent, setShowContent] = useState(false);
    const [showElephants, setShowElephants] = useState(false);
    const [showNames, setShowNames] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const t1 = setTimeout(() => setShowContent(true), 300);
        const t2 = setTimeout(() => setShowElephants(true), 1600);
        const t3 = setTimeout(() => setShowNames(true), 2600);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, []);

    const handleOpen = () => {
        setIsOpen(true);
        if (onOpenInvitation) onOpenInvitation();
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
            {/* Subtle radial glow */}
            <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, hsl(325 50% 14%) 0%, hsl(325 58% 8%) 100%)' }}
            />

            {/* Gold corner ornaments */}
            <div className="absolute top-4 left-4 w-20 h-20 border-t-2 border-l-2 border-primary/50 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-primary/50 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-primary/50 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-20 h-20 border-b-2 border-r-2 border-primary/50 rounded-br-lg" />

            {/* Ganesh dropping from top */}
            <AnimatePresence>
                {showContent && (
                    <motion.div
                        initial={{ y: -320, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.45, duration: 1.6 }}
                        className="relative z-10 mb-2"
                    >
                        <img
                            src={GANESH_IMG}
                            alt="Lord Ganesh blessing the wedding"
                            className="w-32 h-32 md:w-44 md:h-44 object-contain"
                            style={{ filter: 'drop-shadow(0 0 28px hsl(43 80% 58% / 0.5)) brightness(1.05)' }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Shubh Vivah */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: showContent ? 1 : 0 }}
                transition={{ delay: 0.9, duration: 1 }}
                className="font-title text-primary text-xs md:text-sm tracking-[0.5em] uppercase mb-1 z-10"
            >
                ✦ Shubh Vivah ✦
            </motion.p>

            {/* Elephants + Names row */}
            <div className="relative w-full flex items-end justify-center z-10 mt-2">
                {/* Left elephant */}
                <AnimatePresence>
                    {showElephants && (
                        <motion.div
                            initial={{ x: -300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", bounce: 0.15, duration: 2.2 }}
                            className="absolute left-0 bottom-0 w-1/3 max-w-[260px]"
                            style={{ pointerEvents: 'none' }}
                        >
                            {/* show only the left half of the elephant image */}
                            <img
                                src={ELEPHANT_IMG}
                                alt="Royal ceremonial elephant"
                                className="w-full object-contain"
                                style={{
                                    filter: 'drop-shadow(0 4px 18px hsl(var(--primary) / 0.25))',
                                    clipPath: 'inset(0 50% 0 0)',
                                    transform: 'scaleX(-1)',
                                }}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Couple Names */}
                <AnimatePresence>
                    {showNames && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.4, ease: "easeOut" }}
                            className="text-center px-6 pb-4"
                        >
                            <h1 className="font-title text-5xl md:text-8xl lg:text-9xl font-bold leading-tight"
                                style={{ color: 'hsl(var(--foreground))', textShadow: '0 2px 24px hsl(var(--foreground) / 0.5)' }}
                            >
                                Pooja
                            </h1>
                            <p className="font-display italic text-primary text-3xl md:text-5xl my-1">&amp;</p>
                            <h1 className="font-title text-5xl md:text-8xl lg:text-9xl font-bold leading-tight"
                                style={{ color: 'hsl(var(--foreground))', textShadow: '0 2px 24px hsl(var(--foreground) / 0.5)' }}
                            >
                                Ashok
                            </h1>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Right elephant */}
                <AnimatePresence>
                    {showElephants && (
                        <motion.div
                            initial={{ x: 300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", bounce: 0.15, duration: 2.2 }}
                            className="absolute right-0 bottom-0 w-1/3 max-w-[260px]"
                            style={{ pointerEvents: 'none' }}
                        >
                            <img
                                src={ELEPHANT_IMG}
                                alt="Royal ceremonial elephant"
                                className="w-full object-contain"
                                style={{
                                    filter: 'drop-shadow(0 4px 18px hsl(var(--primary) / 0.25))',
                                    clipPath: 'inset(0 0 0 50%)',
                                }}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Date & Open button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showNames ? 1 : 0, y: showNames ? 0 : 20 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="mt-8 z-10 text-center"
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-px bg-primary/60" />
                    <p className="font-title text-primary/80 text-xs md:text-sm tracking-[0.35em] uppercase">
                        23 · 24 · 25 February 2026
                    </p>
                    <div className="w-10 h-px bg-primary/60" />
                </div>

                {!isOpen && (
                    <motion.button
                        onClick={handleOpen}
                        whileHover={{ scale: 1.05, boxShadow: '0 6px 40px hsl(var(--primary) / 0.45)' }}
                        whileTap={{ scale: 0.95 }}
                        className="px-12 py-3.5 font-title text-xs tracking-[0.35em] uppercase rounded-sm transition-all"
                        style={{
                            background: 'linear-gradient(135deg, hsl(43 80% 55%), hsl(43 60% 42%))',
                            color: 'hsl(var(--background))',
                            boxShadow: '0 4px 28px hsl(var(--primary) / 0.35)',
                        }}
                    >
                        Open Invitation
                    </motion.button>
                )}
            </motion.div>

            {/* Scroll indicator */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-8 z-10"
                >
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                        <ChevronDown className="w-6 h-6 text-primary" />
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
}