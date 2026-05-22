import React from 'react';
import { motion } from 'framer-motion';

const EditorialQuote = ({ children, style = {}, delay = 0 }) => {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay, ease: 'easeOut' }}
      style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.8rem, 3.5vw, 3.5rem)',
        fontStyle: 'italic',
        lineHeight: 1.3,
        letterSpacing: '-0.01em',
        color: 'var(--faded-black)',
        borderLeft: '2px solid var(--muted-bronze)',
        paddingLeft: '2rem',
        margin: 0,
        ...style,
      }}
    >
      {children}
    </motion.blockquote>
  );
};

export default EditorialQuote;
