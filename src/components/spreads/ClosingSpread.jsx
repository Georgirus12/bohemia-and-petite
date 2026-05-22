import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import PaperTexture from '../ui/PaperTexture';
import HandwrittenNote from '../ui/HandwrittenNote';
import CalendlyModal from '../CalendlyModal';

const ClosingSpread = () => {
  const { t } = useTranslation();
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <div className="spread" style={{ background: 'var(--faded-black)' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'url(https://images.unsplash.com/photo-1507501336526-624cc0a3b23e?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.5) saturate(0.8)',
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
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: 'clamp(2rem, 8vw, 8rem)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          style={{ maxWidth: '800px' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 5rem)',
              color: 'var(--creamy-white)',
              lineHeight: 1.1,
              marginBottom: '3rem',
              fontStyle: 'italic',
            }}
          >
            {t('closing.headline')}
          </h2>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            onClick={() => setShowCalendly(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--faded-black)',
              background: 'var(--creamy-white)',
              padding: '1.2rem 3rem',
              border: 'none',
              cursor: 'pointer',
              marginBottom: '1.5rem',
              transition: 'all 0.3s ease',
            }}
          >
            {t('closing.cta')}
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'var(--creamy-white)',
              opacity: 0.6,
            }}
          >
            {t('closing.subtext')}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <HandwrittenNote
            rotate={-2}
            style={{ color: 'var(--creamy-white)', opacity: 0.5 }}
          >
            Until next time, Europe awaits...
          </HandwrittenNote>
        </motion.div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          padding: '2rem clamp(2rem, 5vw, 5rem)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          borderTop: '1px solid rgba(250, 247, 242, 0.1)',
        }}
      >
        <div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              lineHeight: 1,
              marginBottom: '0.75rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.9rem',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--creamy-white)',
              }}
            >
              Bohemia
            </span>
            <span
              style={{
                fontFamily: 'var(--font-script)',
                fontSize: '0.7rem',
                color: 'var(--muted-bronze)',
                marginTop: '-1px',
              }}
            >
              and
            </span>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.9rem',
                fontWeight: 300,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--creamy-white)',
                marginTop: '-1px',
              }}
            >
              Petite
            </span>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: '0.6rem',
              letterSpacing: '0.1em',
              color: 'var(--creamy-white)',
              opacity: 0.4,
              maxWidth: '400px',
            }}
          >
            {t('closing.footer.destinations')}
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--creamy-white)',
              opacity: 0.6,
              transition: 'opacity 0.3s',
            }}
          >
            Instagram
          </a>
          <a
            href="mailto:hello@bohemiaandpetite.com"
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--creamy-white)',
              opacity: 0.6,
              transition: 'opacity 0.3s',
            }}
          >
            Email
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--creamy-white)',
              opacity: 0.6,
              transition: 'opacity 0.3s',
            }}
          >
            WhatsApp
          </a>
        </div>
      </motion.footer>

      {showCalendly && (
        <CalendlyModal onClose={() => setShowCalendly(false)} />
      )}
    </div>
  );
};

export default ClosingSpread;
