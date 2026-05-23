import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import PaperTexture from '../ui/PaperTexture';
import HandwrittenNote from '../ui/HandwrittenNote';
import { useIsMobile } from '../../hooks/useIsMobile';

const CoverStory = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  return (
    <div className="spread" style={{ background: 'var(--warm-ivory)' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7) saturate(0.85)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(42,42,42,0.4) 0%, rgba(42,42,42,0.1) 50%, rgba(42,42,42,0.5) 100%)',
        }}
      />
      <PaperTexture />

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: isMobile ? 'flex-start' : 'center',
          padding: isMobile ? '4.5rem 1.5rem 2rem 1.5rem' : 'clamp(2rem, 8vw, 8rem)',
          maxWidth: '1400px',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            fontFamily: 'var(--font-editorial)',
            fontSize: isMobile ? '0.55rem' : '0.7rem',
            letterSpacing: isMobile ? '0.15em' : '0.3em',
            textTransform: 'uppercase',
            color: 'var(--creamy-white)',
            marginBottom: isMobile ? '1rem' : '2rem',
            opacity: 0.8,
          }}
        >
          Bohemia and Petite — Vol. I
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          style={{
            color: 'var(--creamy-white)',
            maxWidth: isMobile ? '100%' : '900px',
            lineHeight: 1.05,
            marginBottom: isMobile ? '1.5rem' : '2rem',
            textShadow: '0 2px 40px rgba(0,0,0,0.2)',
            fontSize: isMobile ? 'clamp(1.8rem, 7vw, 3rem)' : undefined,
          }}
        >
          {t('cover.headline')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: isMobile ? 'clamp(0.9rem, 1.8vw, 1.1rem)' : 'clamp(1.1rem, 1.5vw, 1.4rem)',
            color: 'var(--creamy-white)',
            maxWidth: '600px',
            lineHeight: 1.7,
            opacity: 0.9,
          }}
        >
          {t('cover.subheadline')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          style={{
            position: 'absolute',
            bottom: isMobile ? '10%' : '15%',
            right: isMobile ? '5%' : '8%',
          }}
        >
          <HandwrittenNote rotate={-5} style={{ color: 'var(--creamy-white)', opacity: 0.7, fontSize: isMobile ? '0.85rem' : undefined }}>
            Paris · Rome · Madrid · Santorini
          </HandwrittenNote>
        </motion.div>

        {!isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            style={{
              position: 'absolute',
              top: '15%',
              right: '8%',
              width: '80px',
              height: '80px',
              border: '2px solid rgba(250, 247, 242, 0.3)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transform: 'rotate(15deg)',
            }}
          >
            <div style={{ fontFamily: 'var(--font-script)', color: 'var(--creamy-white)', fontSize: '0.7rem', textAlign: 'center', opacity: 0.6, lineHeight: 1.3 }}>
              Est.<br />2019
            </div>
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        style={{
          position: 'absolute',
          bottom: isMobile ? '1.5rem' : '3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span style={{ fontFamily: 'var(--font-editorial)', fontSize: isMobile ? '0.55rem' : '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--creamy-white)', opacity: 0.6 }}>
          {t('cover.scroll')}
        </span>
        <motion.div animate={{ x: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ color: 'var(--creamy-white)', opacity: 0.6, fontSize: isMobile ? '1rem' : '1.2rem' }}>
          &#8594;
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CoverStory;
