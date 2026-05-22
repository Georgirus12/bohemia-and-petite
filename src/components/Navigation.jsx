import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Wordmark = ({ light = false }) => {
  const color = light ? 'var(--creamy-white)' : 'var(--faded-black)';

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
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.15rem',
          fontWeight: 500,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color,
          transition: 'color 0.5s ease',
        }}
      >
        Bohemia
      </span>
      <span
        style={{
          fontFamily: 'var(--font-script)',
          fontSize: '0.85rem',
          color: 'var(--muted-bronze)',
          marginTop: '-2px',
          letterSpacing: '0.02em',
          transition: 'color 0.5s ease',
        }}
      >
        and
      </span>
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.15rem',
          fontWeight: 300,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color,
          marginTop: '-2px',
          transition: 'color 0.5s ease',
        }}
      >
        Petite
      </span>
    </div>
  );
};

const Navigation = ({ currentSpread, onNavigate }) => {
  const { t, i18n } = useTranslation();
  const isLight = currentSpread === 0 || currentSpread === 6;

  const links = [
    { label: t('nav.destinations'), spread: 1 },
    { label: t('nav.experience'), spread: 2 },
    { label: t('nav.stories'), spread: 4 },
    { label: t('nav.contact'), spread: 6 },
  ];

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem clamp(2rem, 5vw, 4rem)',
        background: 'transparent',
      }}
    >
      <Wordmark light={isLight} />

      <div
        style={{
          display: 'flex',
          gap: '1.8rem',
          alignItems: 'center',
        }}
      >
        {links.map((link) => (
          <button
            key={link.spread}
            onClick={() => onNavigate(link.spread)}
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
              borderBottom:
                currentSpread === link.spread
                  ? '1px solid var(--muted-bronze)'
                  : '1px solid transparent',
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
            border: `1px solid ${
              isLight ? 'rgba(250, 247, 242, 0.3)' : 'var(--warm-taupe)'
            }`,
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
    </motion.nav>
  );
};

export default Navigation;
