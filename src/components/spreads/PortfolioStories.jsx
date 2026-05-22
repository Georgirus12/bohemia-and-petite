import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import PaperTexture from '../ui/PaperTexture';
import HandwrittenNote from '../ui/HandwrittenNote';
import { useIsMobile } from '../../hooks/useIsMobile';

const categories = [
  { key: 'elopements', images: ['https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80','https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80','https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80','https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80'] },
  { key: 'weddings', images: ['https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80','https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80','https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80','https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80'] },
  { key: 'couples', images: ['https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=80','https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=600&q=80','https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80','https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?w=800&q=80'] },
  { key: 'engagements', images: ['https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80','https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&q=80','https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80','https://images.unsplash.com/photo-1519657337289-077653f724ed?w=800&q=80'] },
  { key: 'editorial', images: ['https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=800&q=80','https://images.unsplash.com/photo-1549417229-7686ac5595fd?w=600&q=80','https://images.unsplash.com/photo-1519340241574-2cdc67878b95?w=600&q=80','https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=800&q=80'] },
];

const PortfolioStories = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState(0);
  const isMobile = useIsMobile();

  const gridStyle = isMobile
    ? { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }
    : { display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '1rem' };

  return (
    <div className="spread" style={{ background: 'var(--parchment-beige)' }}>
      <PaperTexture />
      <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', padding: isMobile ? '4.5rem 1.2rem 1rem 1.2rem' : 'clamp(6rem, 10vw, 8rem) clamp(2rem, 5vw, 4rem) clamp(2rem, 5vw, 4rem)' }}>
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'flex-end', marginBottom: isMobile ? '1rem' : '2rem', gap: isMobile ? '0.75rem' : '0' }}>
          <div>
            <span className="caption" style={{ color: 'var(--muted-bronze)', display: 'block', marginBottom: '0.5rem' }}>
              {t('portfolio.subtitle')}
            </span>
            <h2 style={{ color: 'var(--faded-black)', fontSize: isMobile ? 'clamp(1.5rem, 6vw, 2.2rem)' : 'clamp(2rem, 4vw, 3.5rem)' }}>
              {t('portfolio.title')}
            </h2>
          </div>
          <div style={{ display: 'flex', gap: isMobile ? '0.6rem' : '1.5rem', flexWrap: 'wrap', justifyContent: isMobile ? 'flex-start' : 'flex-end' }}>
            {categories.map((cat, i) => (
              <button key={cat.key} onClick={() => setActiveCategory(i)} style={{
                fontFamily: 'var(--font-editorial)', fontSize: isMobile ? '0.6rem' : '0.7rem', letterSpacing: isMobile ? '0.08em' : '0.15em', textTransform: 'uppercase',
                color: activeCategory === i ? 'var(--faded-black)' : 'var(--warm-taupe)',
                borderBottom: activeCategory === i ? '1px solid var(--muted-bronze)' : '1px solid transparent',
                paddingBottom: '0.25rem', background: 'none', cursor: 'pointer', transition: 'all 0.3s ease',
              }}>
                {isMobile ? t(`portfolio.categories.${cat.key}`).slice(0, 6) : t(`portfolio.categories.${cat.key}`)}
              </button>
            ))}
          </div>
        </div>

        <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          <AnimatePresence mode="wait">
            <motion.div key={activeCategory} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }} style={{ ...gridStyle, height: '100%' }}>
              {isMobile ? (
                <>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} style={{ backgroundImage: `url(${categories[activeCategory].images[0]})`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: 'var(--shadow-medium)', position: 'relative' }}>
                    <div style={{ position: 'absolute', bottom: '0.5rem', left: '0.5rem' }}>
                      <HandwrittenNote rotate={-3} delay={0.8} style={{ fontSize: '0.85rem' }}>
                        {t(`portfolio.categories.${categories[activeCategory].key}`)}
                      </HandwrittenNote>
                    </div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} style={{ backgroundImage: `url(${categories[activeCategory].images[1]})`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: 'var(--shadow-paper)' }} />
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} style={{ backgroundImage: `url(${categories[activeCategory].images[2]})`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: 'var(--shadow-paper)' }} />
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} style={{ backgroundImage: `url(${categories[activeCategory].images[3]})`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: 'var(--shadow-paper)', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', fontFamily: 'var(--font-editorial)', fontSize: '0.5rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--creamy-white)', background: 'rgba(42,42,42,0.5)', padding: '0.25rem 0.5rem', backdropFilter: 'blur(5px)' }}>
                      {String(activeCategory + 1).padStart(2, '0')} / {String(categories.length).padStart(2, '0')}
                    </div>
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} style={{ gridRow: '1 / 3', backgroundImage: `url(${categories[activeCategory].images[0]})`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: 'var(--shadow-medium)', position: 'relative' }}>
                    <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem' }}>
                      <HandwrittenNote rotate={-3} delay={0.8}>{t(`portfolio.categories.${categories[activeCategory].key}`)}</HandwrittenNote>
                    </div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} style={{ backgroundImage: `url(${categories[activeCategory].images[1]})`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: 'var(--shadow-paper)' }} />
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} style={{ backgroundImage: `url(${categories[activeCategory].images[2]})`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: 'var(--shadow-paper)' }} />
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} style={{ gridColumn: '2 / 4', backgroundImage: `url(${categories[activeCategory].images[3]})`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: 'var(--shadow-paper)', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontFamily: 'var(--font-editorial)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--creamy-white)', background: 'rgba(42,42,42,0.5)', padding: '0.4rem 0.8rem', backdropFilter: 'blur(5px)' }}>
                      {String(activeCategory + 1).padStart(2, '0')} / {String(categories.length).padStart(2, '0')}
                    </div>
                  </motion.div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default PortfolioStories;
