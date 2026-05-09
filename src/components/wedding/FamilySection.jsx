import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function FamilySection() {
  const families = [
    {
      side: "Bride's Family",
      parents: [
        { name: "Sri Ramakrishna Reddy", role: "Father of the Bride" },
        { name: "Smt. Srikala", role: "Mother of the Bride" },
      ]
    },
    {
      side: "Groom's Family",
      parents: [
        { name: "Sri Ankireddy", role: "Father of the Groom" },
        { name: "Smt. Lakshmi Devi", role: "Mother of the Groom" },
      ]
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="font-title text-primary/70 text-xs tracking-[0.5em] uppercase mb-3">With Blessings Of</p>
          <h2 className="font-title text-4xl md:text-6xl font-bold"
            style={{ color: 'hsl(var(--foreground))', textShadow: '0 2px 16px hsl(var(--foreground) / 0.4)' }}
          >
            Our Families
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-16 h-px bg-primary/50" />
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <div className="w-16 h-px bg-primary/50" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {families.map((family, idx) => (
            <motion.div
              key={family.side}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="text-center"
            >
              <div className="inline-block px-6 py-2 border border-primary/40 rounded-sm mb-8">
                <p className="font-title text-primary text-xs tracking-[0.3em] uppercase">{family.side}</p>
              </div>

              <div className="space-y-8">
                {family.parents.map((parent) => (
                  <div key={parent.name}>
                    <div className="w-20 h-20 mx-auto mb-3 rounded-full border-2 border-primary/40 flex items-center justify-center"
                      style={{ background: 'hsl(325 52% 15%)' }}
                    >
                      <span className="font-title text-primary text-2xl font-bold">
                        {parent.name.split(' ').find(w => w.length > 2)?.[0] ?? parent.name[0]}
                      </span>
                    </div>
                    <h4 className="font-title text-xl md:text-2xl font-semibold" style={{ color: 'hsl(var(--primary))' }}>
                      {parent.name}
                    </h4>
                    <p className="font-body text-primary/55 text-xs tracking-wider mt-1">{parent.role}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}