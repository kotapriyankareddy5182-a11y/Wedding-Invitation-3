import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
    const phoneNumber = "917396756920";
    const message = encodeURIComponent("Hi, I am excited to attend Pooja and Ashok's wedding!");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 3, bounce: 0.4 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg cursor-pointer"
            style={{ boxShadow: '0 4px 20px hsl(43 56% 52% / 0.4)' }}
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="w-6 h-6 text-primary-foreground" />
        </motion.a>
    );
}