import React from 'react';
import { motion } from 'framer-motion';

const HandwrittenNote = ({ children, style = {}, delay = 0, rotate = -3 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, rotate: rotate - 2 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ duration: 1.2, delay, ease: 'easeOut' }}
      style={{
        fontFamily: 'var(--font-script)',
        fontSize: 'clamp(1rem, 1.8vw, 1.6rem)',
        color: 'var(--muted-bronze)',
        lineHeight: 1.4,
        display: 'inline-block',
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
};

export default HandwrittenNote;
