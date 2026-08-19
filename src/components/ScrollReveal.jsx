import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ children, delay = 0, y = 60, scale = 0.96, duration = 0.8 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: y, scale: scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ 
        duration: duration, 
        delay: delay, 
        ease: [0.16, 1, 0.3, 1] // premium deceleration curve
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
