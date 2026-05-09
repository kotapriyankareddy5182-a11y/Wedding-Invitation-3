import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

export default function RSVPSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', guests: '1', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    background: 'hsl(325 55% 14%)',
    border: '1px solid hsl(43 50% 35%)',
    color: 'hsl(var(--primary))',
    borderRadius: '4px',
    padding: '10px 14px',
    width: '100%',
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    outline: 'none',
  };

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <p className="font-title text-primary/70 text-xs tracking-[0.5em] uppercase mb-3">Kindly Respond</p>
          <h2 className="font-title text-4xl md:text-6xl font-bold"
            style={{ color: 'hsl(var(--foreground))', textShadow: '0 2px 16px hsl(var(--foreground) / 0.4)' }}
          >
            RSVP
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-16 h-px bg-primary/50" />
            <span className="text-primary text-lg">✦</span>
            <div className="w-16 h-px bg-primary/50" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {submitted ? (
            <div className="text-center py-12 border border-primary/20 rounded-lg"
              style={{ background: 'var(--card-gradient)' }}
            >
              <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="font-title text-2xl font-bold mb-2" style={{ color: 'hsl(var(--foreground))' }}>
                Thank You!
              </h3>
              <p className="font-body text-primary/60 text-sm">
                We look forward to celebrating with you.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}
              className="space-y-5 border border-primary/20 rounded-lg p-8"
              style={{ background: 'var(--card-gradient)' }}
            >
              <div>
                <label className="font-title text-primary/70 text-xs tracking-wider uppercase block mb-2">
                  Your Name
                </label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Enter your full name"
                  required
                  style={inputStyle}
                />
              </div>
              <div>
                <label className="font-title text-primary/70 text-xs tracking-wider uppercase block mb-2">
                  Number of Guests
                </label>
                <select
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  style={{ ...inputStyle, cursor: 'pointer' }}
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5+ Guests</option>
                </select>
              </div>
              <div>
                <label className="font-title text-primary/70 text-xs tracking-wider uppercase block mb-2">
                  Wishes for the Couple
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Write your blessings..."
                  rows={4}
                  style={{ ...inputStyle, resize: 'none' }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 font-title text-xs tracking-[0.35em] uppercase rounded-sm flex items-center justify-center gap-2 transition-all hover:opacity-90"
                style={{
                  background: 'linear-gradient(135deg, hsl(43 80% 55%), hsl(43 60% 42%))',
                  color: 'hsl(var(--background))',
                  boxShadow: '0 4px 20px hsl(var(--primary) / 0.3)',
                }}
              >
                <Send className="w-4 h-4" /> Confirm Presence
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}