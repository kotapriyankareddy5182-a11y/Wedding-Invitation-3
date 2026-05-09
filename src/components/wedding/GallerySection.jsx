import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const COUPLE_IMG = "https://media.base44.com/images/public/69fedcc55e753ef411990907/67fbbf544_generated_cb76358e.png";
const BRIDE_IMG = "https://media.base44.com/images/public/69fedcc55e753ef411990907/f2a2061bb_generated_abbb2dba.png";
const GROOM_IMG = "https://media.base44.com/images/public/69fedcc55e753ef411990907/c45c43c0f_generated_05195fba.png";
const MEHANDI_IMG = "https://media.base44.com/images/public/69fedcc55e753ef411990907/ed03384dc_generated_db1e6aa4.png";
const HALDI_IMG = "https://media.base44.com/images/public/69fedcc55e753ef411990907/bc6fa5b67_generated_e2109590.png";
const VENUE_IMG = "https://media.base44.com/images/public/69fedcc55e753ef411990907/63e21c9ae_generated_9fa3660b.png";

const images = [
  { src: COUPLE_IMG, alt: "Pooja and Ashok together", span: "col-span-2 row-span-2" },
  { src: BRIDE_IMG, alt: "Bride Pooja portrait", span: "col-span-1 row-span-1" },
  { src: GROOM_IMG, alt: "Groom Ashok portrait", span: "col-span-1 row-span-1" },
  { src: MEHANDI_IMG, alt: "Mehandi ceremony detail", span: "col-span-1 row-span-1" },
  { src: HALDI_IMG, alt: "Haldi ceremony", span: "col-span-1 row-span-1" },
  { src: VENUE_IMG, alt: "Wedding mandap venue", span: "col-span-2 row-span-1" },
];

export default function GallerySection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <Camera className="w-4 h-4 text-primary" />
            <p className="font-title text-primary/70 text-xs tracking-[0.5em] uppercase">Memories</p>
          </div>
          <h2 className="font-title text-4xl md:text-6xl font-bold"
            style={{ color: 'hsl(43 80% 58%)', textShadow: '0 2px 16px hsl(43 80% 40% / 0.4)' }}
          >
            Captured Moments
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-16 h-px bg-primary/50" />
            <span className="text-primary text-lg">✦</span>
            <div className="w-16 h-px bg-primary/50" />
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[200px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`${img.span} relative overflow-hidden rounded-lg group cursor-pointer border border-primary/10`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
                style={{ boxShadow: 'inset 0 0 40px hsl(43 80% 50% / 0.2)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}