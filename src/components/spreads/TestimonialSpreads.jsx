import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import PaperTexture from '../ui/PaperTexture';
import { useIsMobile } from '../../hooks/useIsMobile';

const TestimonialSpreads = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const quotes = t('testimonials.quotes', { returnObjects: true });
  const isMobile = useIsMobile();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className="spread" style={{ background: 'var(--creamy-white)' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1920&q=60)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.08, filter: 'grayscale(0.5)' }} />
      <PaperTexture />
      <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: isMobile ? '4rem 1.5rem' : 'clamp(2rem, 8vw, 8rem)', textAlign: 'center' }}>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="caption" style={{ color: 'var(--muted-bronze)', marginBottom: isMobile ? '2rem' : '3rem', display: 'block' }}>
          {t('testimonials.title')}
        </motion.span>

        <div style={{ position: 'relative', minHeight: isMobile ? '200px' : '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '900px' }}>
          <AnimatePresence mode="wait">
            <motion.div key={current} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.8, ease: 'easeInOut' }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? '2.5rem' : 'clamp(4rem, 8vw, 8rem)', color: 'var(--muted-bronze)', opacity: 0.2, lineHeight: 1, marginBottom: '-1rem' }}>&ldquo;</div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? 'clamp(1.2rem, 4vw, 1.8rem)' : 'clamp(1.8rem, 3.5vw, 3.2rem)', fontStyle: 'italic', lineHeight: 1.4, color: 'var(--faded-black)', maxWidth: '800px', marginBottom: '2rem' }}>
                {quotes[current]?.text}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
                <span style={{ fontFamily: 'var(--font-script)', fontSize: isMobile ? '1rem' : '1.3rem', color: 'var(--muted-bronze)' }}>{quotes[current]?.author}</span>
                <span className="caption" style={{ color: 'var(--warm-taupe)', fontSize: isMobile ? '0.55rem' : '0.65rem' }}>{quotes[current]?.location}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div style={{ display: 'flex', gap: isMobile ? '0.6rem' : '1rem', marginTop: isMobile ? '2rem' : '3rem' }}>
          {quotes.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} style={{
              width: current === i ? (isMobile ? '1.4rem' : '2rem') : (isMobile ? '0.4rem' : '0.5rem'),
              height: isMobile ? '0.4rem' : '0.5rem',
              borderRadius: '1rem',
              background: current === i ? 'var(--muted-bronze)' : 'var(--warm-taupe)',
              opacity: current === i ? 1 : 0.4,
              border: 'none', cursor: 'pointer', transition: 'all 0.4s ease', padding: 0,
            }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSpreads;
