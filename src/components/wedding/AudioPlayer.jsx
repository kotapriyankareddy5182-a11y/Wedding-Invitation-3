import React from 'react';
import { motion } from 'framer-motion';

export default function ArchFrame({ imageUrl, name, parents, label, delay = 0 }) {
  // The arch path in a 220x300 viewBox
  const archPath = "M 20 300 L 20 110 Q 20 10 110 10 Q 200 10 200 110 L 200 300 Z";

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="flex flex-col items-center"
    >
      <div className="relative group">
        {/* Outer gold glow */}
        <div className="absolute -inset-4 bg-primary/10 rounded-t-full rounded-b-lg blur-xl opacity-40 group-hover:opacity-80 transition-opacity duration-700" />

        {/* The arch frame — fixed size container */}
        <div className="relative" style={{ width: 220, height: 300 }}>

          {/* IMAGE clipped into arch shape using SVG clipPath */}
          <svg width="0" height="0" style={{ position: 'absolute' }}>
            <defs>
              <clipPath id={`arch-clip-${label}`} clipPathUnits="userSpaceOnUse">
                <path d={archPath} />
              </clipPath>
            </defs>
          </svg>

          {/* Image fills the full 220x300, clipped by arch */}
          <img
            src={imageUrl}
            alt={name}
            className="group-hover:scale-105 transition-transform duration-700"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              clipPath: `path('${archPath}')`,
            }}
          />

          {/* Golden gradient overlay inside arch */}
          <div
            style={{
              position: 'absolute',
              top: 0, left: 0, width: '100%', height: '100%',
              background: 'linear-gradient(to top, rgba(10,3,20,0.65) 0%, transparent 50%, rgba(212,175,55,0.05) 100%)',
              clipPath: `path('${archPath}')`,
            }}
          />

          {/* SVG decorative gold border ON TOP */}
          <svg
            viewBox="0 0 220 300"
            width="220"
            height="300"
            style={{ position: 'absolute', top: 0, left: 0, zIndex: 10, pointerEvents: 'none' }}
            fill="none"
          >
            {/* Outer arch border */}
            <path
              d="M 20 300 L 20 110 Q 20 10 110 10 Q 200 10 200 110 L 200 300"
              stroke="hsl(43, 72%, 53%)"
              strokeWidth="2.5"
            />
            {/* Inner arch border */}
            <path
              d="M 28 295 L 28 112 Q 28 22 110 22 Q 192 22 192 112 L 192 295"
              stroke="hsl(43, 72%, 50%)"
              strokeWidth="0.8"
              opacity="0.55"
            />
            {/* Top finial */}
            <circle cx="110" cy="4" r="4" fill="hsl(43, 72%, 53%)" />
            <circle cx="110" cy="4" r="7" stroke="hsl(43, 72%, 53%)" strokeWidth="0.8" opacity="0.4" />
            {/* Temple spire lines */}
            <path d="M 80 15 Q 110 -4 140 15" stroke="hsl(43, 72%, 53%)" strokeWidth="1.2" fill="none" />
            {/* Side dots */}
            <circle cx="88" cy="8" r="2" fill="hsl(43, 72%, 53%)" opacity="0.5" />
            <circle cx="132" cy="8" r="2" fill="hsl(43, 72%, 53%)" opacity="0.5" />
            {/* Pillar lines */}
            <line x1="24" y1="280" x2="24" y2="140" stroke="hsl(43, 72%, 53%)" strokeWidth="0.4" opacity="0.3" />
            <line x1="196" y1="280" x2="196" y2="140" stroke="hsl(43, 72%, 53%)" strokeWidth="0.4" opacity="0.3" />
            {/* Bottom corner ornaments */}
            <path d="M 20 290 Q 10 290 10 280" stroke="hsl(43, 72%, 53%)" strokeWidth="1.2" opacity="0.5" />
            <path d="M 200 290 Q 210 290 210 280" stroke="hsl(43, 72%, 53%)" strokeWidth="1.2" opacity="0.5" />
          </svg>
        </div>
      </div>

      {/* Name and details */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.3, duration: 0.6 }}
        className="text-center mt-6"
      >
        <p className="font-cormorant text-primary/60 text-xs tracking-[0.4em] uppercase mb-1">{label}</p>
        <h3 className="font-vibes text-4xl md:text-5xl text-primary text-glow mb-3 capitalize">
          <span className="font-playfair">{name.charAt(0)}</span>{name.slice(1)}
        </h3>
        <p className="font-cormorant text-muted-foreground text-sm tracking-wide capitalize">{parents}</p>
      </motion.div>
    </motion.div>
  );
}