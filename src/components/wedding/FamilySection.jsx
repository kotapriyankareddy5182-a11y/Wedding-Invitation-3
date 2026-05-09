import React from 'react';
import { motion } from 'framer-motion';

export default function CircleFrame({ imageUrl, name, parents, label, delay = 0, imagePosition = "object-center" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="flex flex-col items-center"
    >
      <div className="relative group flex justify-center items-center">
        {/* Outer gold glow */}
        <div className="absolute -inset-4 bg-primary/10 rounded-full blur-xl opacity-40 group-hover:opacity-80 transition-opacity duration-700" />

        {/* The rotating circle frame container */}
        <div className="relative w-64 h-64 md:w-72 md:h-72 flex justify-center items-center">
          
          {/* Rotating decorative borders */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-[3px] border-dashed border-primary opacity-60"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-10px] rounded-full border-[1px] border-primary opacity-30"
          />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 rounded-full border-2 border-dotted border-primary opacity-50"
          />

          {/* The Circular Image */}
          <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-[4px] border-primary/40 group-hover:scale-105 transition-transform duration-700 z-10">
            <img
              src={imageUrl}
              alt={name}
              className={`w-full h-full object-cover ${imagePosition}`}
            />
            {/* Golden gradient overlay inside circle */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-primary/10" />
          </div>
          
        </div>
      </div>

      {/* Name and details */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.3, duration: 0.6 }}
        className="text-center mt-8 relative z-20"
      >
        <p className="font-cormorant text-primary/80 text-xs md:text-sm tracking-[0.4em] uppercase mb-1">{label}</p>
        <h3 className="font-vibes text-4xl md:text-5xl text-primary text-glow mb-3 capitalize">
          <span className="font-playfair">{name.charAt(0)}</span>{name.slice(1)}
        </h3>
        <p className="font-cormorant text-muted-foreground text-sm tracking-wide capitalize">{parents}</p>
      </motion.div>
    </motion.div>
  );
}
