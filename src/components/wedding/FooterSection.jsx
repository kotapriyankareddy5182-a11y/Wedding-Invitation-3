import React from 'react';
import { Heart } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="py-12 border-t border-primary/20"
      style={{ background: 'hsl(325 58% 8%)' }}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="font-title text-3xl md:text-4xl font-bold mb-3"
          style={{ color: 'hsl(var(--primary))' }}
        >
          Pooja &amp; Ashok
        </p>
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-8 h-px bg-primary/30" />
          <Heart className="w-3 h-3 text-primary fill-primary" />
          <div className="w-8 h-px bg-primary/30" />
        </div>
        <p className="font-title text-primary/55 text-xs tracking-wider">
          February 25, 2026 · Giddalur, Prakasam District
        </p>
        <p className="font-body text-primary/35 text-xs mt-4">
          Made with love ✦ #PoojaWedsAshok
        </p>
      </div>
    </footer>
  );
}