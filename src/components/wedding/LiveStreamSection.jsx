import React from 'react';
import { motion } from 'framer-motion';
import { Video, MapPin, ExternalLink } from 'lucide-react';

export default function LiveStreamSection() {
  const mapUrl = "https://www.google.com/maps/search/Sita+Rama+Kalyana+Mandapam+Giddalur+Prakasam+District";

  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-14"
        >
          <h2 className="font-title text-4xl md:text-5xl font-bold"
            style={{ color: 'hsl(43 80% 58%)', textShadow: '0 2px 16px hsl(43 80% 40% / 0.4)' }}
          >
            Join the Celebration
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-16 h-px bg-primary/50" />
            <span className="text-primary">✦</span>
            <div className="w-16 h-px bg-primary/50" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Live Stream */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center p-8 border border-primary/20 rounded-lg"
            style={{ background: 'hsl(345 52% 12%)' }}
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-primary/30 flex items-center justify-center"
              style={{ background: 'hsl(345 55% 16%)' }}
            >
              <Video className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-title text-2xl md:text-3xl font-bold mb-3"
              style={{ color: 'hsl(43 80% 62%)' }}
            >Live Stream</h3>
            <p className="font-body text-primary/60 text-sm mb-6">
              Can't make it? Watch the wedding ceremony live on February 25, 2026
            </p>
            <button
              className="px-8 py-3 font-title text-xs tracking-[0.35em] uppercase rounded-sm border border-primary/40 transition-all hover:bg-primary/10"
              style={{ color: 'hsl(43 80% 62%)' }}
            >
              <span className="flex items-center gap-2 justify-center">
                <Video className="w-4 h-4" /> Watch Live
              </span>
            </button>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center p-8 border border-primary/20 rounded-lg"
            style={{ background: 'hsl(345 52% 12%)' }}
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-primary/30 flex items-center justify-center"
              style={{ background: 'hsl(345 55% 16%)' }}
            >
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-title text-2xl md:text-3xl font-bold mb-3"
              style={{ color: 'hsl(43 80% 62%)' }}
            >Wedding Venue</h3>
            <p className="font-body text-primary/70 text-sm mb-1">Sita Rama Kalyana Mandapam</p>
            <p className="font-body text-primary/50 text-xs mb-6">Giddalur, Prakasam District</p>
            <a href={mapUrl} target="_blank" rel="noopener noreferrer">
              <button
                className="px-8 py-3 font-title text-xs tracking-[0.35em] uppercase rounded-sm border border-primary/40 transition-all hover:bg-primary/10"
                style={{ color: 'hsl(43 80% 62%)' }}
              >
                <span className="flex items-center gap-2 justify-center">
                  <MapPin className="w-4 h-4" /> Navigate <ExternalLink className="w-3 h-3" />
                </span>
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}