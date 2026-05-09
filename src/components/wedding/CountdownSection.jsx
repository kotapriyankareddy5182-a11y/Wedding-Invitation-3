import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const WEDDING_DATE = new Date('2026-02-25T09:00:00');

function getTimeLeft() {
  const now = new Date();
  const diff = WEDDING_DATE - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function TimeUnit({ value, label }) {
  return (
    <div className="text-center">
      <div className="w-20 h-20 md:w-28 md:h-28 rounded-lg flex items-center justify-center border border-primary/30"
        style={{ background: 'hsl(345 52% 12%)', boxShadow: '0 0 20px hsl(43 80% 40% / 0.15)' }}
      >
        <span className="font-title text-3xl md:text-5xl font-bold"
          style={{ color: 'hsl(43 80% 62%)' }}
        >
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <p className="font-title text-primary/60 text-xs tracking-[0.35em] uppercase mt-3">{label}</p>
    </div>
  );
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="w-4 h-4 text-primary" />
            <p className="font-title text-primary/70 text-xs tracking-[0.5em] uppercase">Counting Down To</p>
          </div>
          <h2 className="font-title text-4xl md:text-6xl font-bold mb-12"
            style={{ color: 'hsl(43 80% 58%)', textShadow: '0 2px 16px hsl(43 80% 40% / 0.4)' }}
          >
            The Big Day
          </h2>

          <div className="flex justify-center gap-4 md:gap-8">
            <TimeUnit value={timeLeft.days} label="Days" />
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <TimeUnit value={timeLeft.seconds} label="Seconds" />
          </div>

          <p className="font-body text-primary/55 text-sm mt-10">
            February 25, 2026 · Sita Rama Kalyana Mandapam, Giddalur
          </p>
        </motion.div>
      </div>
    </section>
  );
}