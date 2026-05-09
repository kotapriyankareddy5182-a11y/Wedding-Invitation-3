import React from 'react';
import { motion } from 'framer-motion';

const BRIDE_IMG = "https://media.base44.com/images/public/69fedcc55e753ef411990907/f2a2061bb_generated_abbb2dba.png";
const GROOM_IMG = "https://media.base44.com/images/public/69fedcc55e753ef411990907/c45c43c0f_generated_05195fba.png";

const goldGradient = 'linear-gradient(135deg, hsl(43 85% 65%), hsl(43 60% 45%))';

export default function CoupleSection() {
  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* top ornament line */}
      <div className="absolute top-0 left-0 right-0 flex items-center px-4">
        <div className="flex-1 h-px" style={{ background: goldGradient }} />
        <span className="mx-4 text-primary text-xl">✦</span>
        <div className="flex-1 h-px" style={{ background: goldGradient }} />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="font-title text-primary/70 text-xs tracking-[0.5em] uppercase mb-3">Together with their families</p>
          <h2 className="font-title text-4xl md:text-6xl font-bold"
            style={{ color: 'hsl(var(--foreground))', textShadow: '0 2px 16px hsl(var(--foreground) / 0.4)' }}
          >
            The Bride &amp; Groom
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-16 h-px bg-primary/50" />
            <span className="text-primary text-lg">✦</span>
            <div className="w-16 h-px bg-primary/50" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <div className="relative inline-block mb-6">
              <div className="absolute -inset-3 rounded-full border-2 border-primary/40" />
              <div className="absolute -inset-6 rounded-full border border-primary/15" />
              <img
                src={BRIDE_IMG}
                alt="Bride Pooja in traditional Telugu wedding attire"
                className="w-52 h-52 md:w-64 md:h-64 object-cover rounded-full"
                style={{ boxShadow: '0 0 48px hsl(var(--primary) / 0.25)' }}
              />
            </div>
            <h3 className="font-title text-3xl md:text-5xl font-bold mb-2"
              style={{ color: 'hsl(var(--foreground))' }}
            >Pooja</h3>
            <p className="font-body text-primary/60 text-sm tracking-wider">Daughter of</p>
            <p className="font-body text-primary/80 text-base mt-1">
              Sri Ramakrishna Reddy &amp; Smt. Srikala
            </p>
          </motion.div>

          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <div className="relative inline-block mb-6">
              <div className="absolute -inset-3 rounded-full border-2 border-primary/40" />
              <div className="absolute -inset-6 rounded-full border border-primary/15" />
              <img
                src={GROOM_IMG}
                alt="Groom Ashok in traditional Telugu wedding attire"
                className="w-52 h-52 md:w-64 md:h-64 object-cover rounded-full"
                style={{ boxShadow: '0 0 48px hsl(var(--primary) / 0.25)' }}
              />
            </div>
            <h3 className="font-title text-3xl md:text-5xl font-bold mb-2"
              style={{ color: 'hsl(var(--foreground))' }}
            >Ashok</h3>
            <p className="font-body text-primary/60 text-sm tracking-wider">Son of</p>
            <p className="font-body text-primary/80 text-base mt-1">
              Sri Ankireddy &amp; Smt. Lakshmi Devi
            </p>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex items-center px-4">
        <div className="flex-1 h-px" style={{ background: goldGradient }} />
        <span className="mx-4 text-primary text-xl">✦</span>
        <div className="flex-1 h-px" style={{ background: goldGradient }} />
      </div>
    </section>
  );
}