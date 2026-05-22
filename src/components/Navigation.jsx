import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useIsMobile } from '../hooks/useIsMobile';

const Wordmark = ({ light = false, small = false }) => {
  const color = light ? 'var(--creamy-white)' : 'var(--faded-black)';
  const size = small ? '0.85rem' : '1.15rem';
  const scriptSize = small ? '0.65rem' : '0.85rem';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        lineHeight: 1,
        cursor: 'default',
        userSelect: 'none',
      }}
    >
      <span style={{ fontFamily: 'var(--font-display)', fontSize: size, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color, transition: 'color 0.5s ease' }}>
        Bohemia
      </span>
      <span style={{ fontFamily: 'var(--font-script)', fontSize: scriptSize, color: 'var(--muted-bronze)', marginTop: '-2px', letterSpacing: '0.02em', transition: 'color 0.5s ease' }}>
        and
      </span>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: size, fontWeight: 300, letterSpacing: '0.18em', textTransform: 'uppercase', color, marginTop: '-2px', transition: 'color 0.5s ease' }}>
        Petite
      </span>
    </div>
  );
};

const Hamburger = ({ open, onClick, light }) => {
  const barColor = light ? 'var(--creamy-white)' : 'var(--faded-black)';

  return (
    <button
      onClick={onClick}
      aria-label="Menu"
      style={{
        width: '28px',
        height: '20px',
        position: 'relative',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        zIndex: 2000,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 0,
      }}
    >
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          animate={{
            rotate: open ? (i === 0 ? 45 : i === 1 ? 0 : -45) : 0,
            y: open ? (i === 0 ? 9 : i === 1 ? 0 : -9) : 0,
            opacity: open && i === 1 ? 0 : 1,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          style={{
            display: 'block',
            width: '100%',
            height: '1.5px',
            background: barColor,
            borderRadius: '1px',
            transformOrigin: 'center',
          }}
        />
      ))}
    </button>
  );
};

const Navigation = ({ currentSpread, onNavigate }) => {
  const { t, i18n } = useTranslation();
  const isLight = currentSpread === 0 || currentSpread === 6;
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: t('nav.destinations'), spread: 1 },
    { label: t('nav.experience'), spread: 2 },
    { label: t('nav.stories'), spread: 4 },
    { label: t('nav.contact'), spread: 6 },
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [currentSpread]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  const handleNav = (spread) => {
    onNavigate(spread);
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 2000,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: isMobile
            ? '1rem 1.2rem'
            : '1.5rem clamp(2rem, 5vw, 4rem)',
          background: 'transparent',
        }}
      >
        <Wordmark light={isLight} small={isMobile} />

        {isMobile ? (
          <Hamburger open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} light={menuOpen ? false : isLight} />
        ) : (
          <div style={{ display: 'flex', gap: '1.8rem', alignItems: 'center' }}>
            {links.map((link) => (
              <button
                key={link.spread}
                onClick={() => handleNav(link.spread)}
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: isLight ? 'var(--creamy-white)' : 'var(--soft-charcoal)',
                  opacity: currentSpread === link.spread ? 1 : 0.6,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  borderBottom: currentSpread === link.spread ? '1px solid var(--muted-bronze)' : '1px solid transparent',
                  paddingBottom: '0.25rem',
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={toggleLanguage}
              style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: '0.6rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: isLight ? 'var(--creamy-white)' : 'var(--soft-charcoal)',
                background: 'none',
                border: `1px solid ${isLight ? 'rgba(250, 247, 242, 0.3)' : 'var(--warm-taupe)'}`,
                padding: '0.35rem 0.7rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                opacity: 0.7,
                marginLeft: '0.5rem',
              }}
            >
              {i18n.language === 'en' ? 'ES' : 'EN'}
            </button>
          </div>
        )}
      </motion.nav>

      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1500,
              background: 'rgba(42, 42, 42, 0.96)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2.5rem',
              padding: '2rem',
            }}
          >
            {links.map((link, i) => (
              <motion.button
                key={link.spread}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                onClick={() => handleNav(link.spread)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  fontStyle: 'italic',
                  color: currentSpread === link.spread ? 'var(--muted-bronze)' : 'var(--creamy-white)',
                  opacity: currentSpread === link.spread ? 1 : 0.7,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  letterSpacing: '0.02em',
                }}
              >
                {link.label}
              </motion.button>
            ))}

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              onClick={toggleLanguage}
              style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: '0.7rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--creamy-white)',
                background: 'none',
                border: '1px solid rgba(250, 247, 242, 0.3)',
                padding: '0.6rem 1.4rem',
                cursor: 'pointer',
                opacity: 0.6,
              }}
            >
              {i18n.language === 'en' ? 'Español' : 'English'}
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              style={{
                position: 'absolute',
                bottom: '3rem',
                display: 'flex',
                gap: '2rem',
              }}
            >
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-editorial)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--creamy-white)', opacity: 0.4 }}>Instagram</a>
              <a href="mailto:hello@bohemiaandpetite.com" style={{ fontFamily: 'var(--font-editorial)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--creamy-white)', opacity: 0.4 }}>Email</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
