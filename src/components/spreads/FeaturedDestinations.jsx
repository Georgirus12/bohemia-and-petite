import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import PaperTexture from '../ui/PaperTexture';
import HandwrittenNote from '../ui/HandwrittenNote';
import { useIsMobile } from '../../hooks/useIsMobile';

const destinations = [
  { key: 'paris', image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&q=80', color: '#C9B8A3' },
  { key: 'rome', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=80', color: '#B08D57' },
  { key: 'madrid', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&q=80', color: '#8A9A7E' },
  { key: 'lakeComo', image: 'https://images.unsplash.com/photo-1536599018102-9f803c979fc1?w=1200&q=80', color: '#A8B5A2' },
  { key: 'santorini', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=80', color: '#C4A8A0' },
  { key: 'tuscany', image: 'https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=1200&q=80', color: '#6B7D64' },
];

const FeaturedDestinations = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();

  const gridStyle = isMobile
    ? { display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }
    : { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' };

  const listPadding = isMobile
    ? '4rem 1.2rem 1rem 1.2rem'
    : 'clamp(6rem, 10vw, 8rem) clamp(2rem, 5vw, 4rem) clamp(2rem, 5vw, 4rem)';

  const imageInset = isMobile ? '0' : '5rem 2rem 2rem 2rem';

  const countBadge = isMobile
    ? { bottom: '1rem', right: '1rem', top: 'auto' }
    : { bottom: '12rem', right: '3rem' };

  return (
    <div className="spread" style={{ background: 'var(--parchment-beige)' }}>
      <PaperTexture />
      <div style={{ position: 'relative', zIndex: 10, height: '100%', ...gridStyle }}>
        {isMobile && (
          <div style={{ position: 'relative', height: '40%', flexShrink: 0, overflow: 'hidden' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                style={{ position: 'absolute', inset: 0, backgroundImage: `url(${destinations[activeIndex].image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
            </AnimatePresence>
            <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem', zIndex: 5 }}>
              <div style={{ background: 'rgba(248,244,236,0.92)', backdropFilter: 'blur(10px)', padding: '1rem 1.5rem' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.5, color: 'var(--soft-charcoal)', marginBottom: '0.5rem' }}>
                  {t(`destinations.${destinations[activeIndex].key}.caption`)}
                </p>
                <HandwrittenNote rotate={-2} delay={0.5}>
                  {t(`destinations.${destinations[activeIndex].key}.note`)}
                </HandwrittenNote>
              </div>
            </div>
            <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', zIndex: 5, fontFamily: 'var(--font-editorial)', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--creamy-white)', background: 'rgba(42,42,42,0.5)', padding: '0.35rem 0.7rem', backdropFilter: 'blur(5px)' }}>
              {String(activeIndex + 1).padStart(2, '0')} / {String(destinations.length).padStart(2, '0')}
            </div>
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: listPadding, flex: isMobile ? '1 1 auto' : undefined }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="caption" style={{ color: 'var(--muted-bronze)', display: 'block', marginBottom: '0.5rem' }}>
              {t('destinations.subtitle')}
            </span>
            <h2 style={{ color: 'var(--faded-black)', marginBottom: isMobile ? '1.5rem' : '3rem', fontSize: isMobile ? 'clamp(1.5rem, 6vw, 2.2rem)' : undefined }}>
              {t('destinations.title')}
            </h2>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {destinations.map((dest, i) => (
              <motion.button
                key={dest.key}
                onClick={() => setActiveIndex(i)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  textAlign: 'left',
                  padding: isMobile ? '0.5rem 0' : '0.75rem 0',
                  borderBottom: `1px solid ${activeIndex === i ? 'var(--muted-bronze)' : 'rgba(176,141,87,0.2)'}`,
                  fontFamily: 'var(--font-display)',
                  fontSize: activeIndex === i ? (isMobile ? '1.1rem' : '1.5rem') : (isMobile ? '0.9rem' : '1.2rem'),
                  color: activeIndex === i ? 'var(--faded-black)' : 'var(--warm-taupe)',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  background: 'none',
                  border: 'none',
                }}
              >
                {t(`destinations.${dest.key}.title`)}
              </motion.button>
            ))}
          </div>
        </div>

        {!isMobile && (
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8 }}
                style={{ position: 'absolute', inset: imageInset, backgroundImage: `url(${destinations[activeIndex].image})`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: 'var(--shadow-medium)' }}
              />
            </AnimatePresence>
            <motion.div key={`caption-${activeIndex}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} style={{ position: 'absolute', bottom: '3rem', left: '3rem', right: '3rem', zIndex: 5 }}>
              <div style={{ background: 'rgba(248,244,236,0.92)', backdropFilter: 'blur(10px)', padding: '1.5rem 2rem' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: 1.6, color: 'var(--soft-charcoal)', marginBottom: '0.75rem' }}>
                  {t(`destinations.${destinations[activeIndex].key}.caption`)}
                </p>
                <HandwrittenNote rotate={-2} delay={0.5}>
                  {t(`destinations.${destinations[activeIndex].key}.note`)}
                </HandwrittenNote>
              </div>
            </motion.div>
            <div style={{ position: 'absolute', ...countBadge, zIndex: 5, fontFamily: 'var(--font-editorial)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--creamy-white)', background: 'rgba(42,42,42,0.5)', padding: '0.5rem 1rem', backdropFilter: 'blur(5px)' }}>
              {String(activeIndex + 1).padStart(2, '0')} / {String(destinations.length).padStart(2, '0')}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedDestinations;
