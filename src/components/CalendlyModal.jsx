import React from 'react';
import { motion } from 'framer-motion';
import { InlineWidget } from 'react-calendly';

const CalendlyModal = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(42, 42, 42, 0.85)',
        backdropFilter: 'blur(10px)',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--creamy-white)',
          width: '100%',
          maxWidth: '900px',
          height: '80vh',
          maxHeight: '700px',
          position: 'relative',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: '50%',
            border: '1px solid var(--warm-taupe)',
            background: 'var(--warm-ivory)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            fontSize: '1.2rem',
            color: 'var(--soft-charcoal)',
          }}
        >
          &times;
        </button>

        <InlineWidget
          url="https://calendly.com/bohemiaandpetite"
          styles={{
            height: '100%',
            width: '100%',
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default CalendlyModal;
