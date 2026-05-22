import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import PaperTexture from '../ui/PaperTexture';
import HandwrittenNote from '../ui/HandwrittenNote';
import { useIsMobile } from '../../hooks/useIsMobile';

const timelineSteps = [
  { key: 'inquiry', icon: '✉' },
  { key: 'planning', icon: '✦' },
  { key: 'session', icon: '◎' },
  { key: 'editing', icon: '◈' },
  { key: 'printed', icon: '❋' },
];

const ExperienceTimeline = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  return (
    <div className="spread" style={{ background: 'var(--creamy-white)' }}>
      <PaperTexture />
      <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: isMobile ? '4.5rem 1.5rem 2rem 1.5rem' : 'clamp(2rem, 5vw, 5rem)', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '2rem' : '4rem' }}>
          <span className="caption" style={{ color: 'var(--muted-bronze)', display: 'block', marginBottom: '0.5rem' }}>
            {t('timeline.subtitle')}
          </span>
          <h2 style={{ color: 'var(--faded-black)', fontSize: isMobile ? 'clamp(1.5rem, 6vw, 2.2rem)' : undefined }}>
            {t('timeline.title')}
          </h2>
        </div>

        {isMobile ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {timelineSteps.map((step, i) => (
              <motion.div key={step.key} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: i * 0.15 }}
                style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', background: 'var(--warm-ivory)', border: '1px solid var(--warm-taupe)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', color: 'var(--muted-bronze)', flexShrink: 0, boxShadow: 'var(--shadow-paper)' }}>
                  {step.icon}
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--faded-black)', marginBottom: '0.25rem' }}>
                    {t(`timeline.steps.${step.key}.title`)}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', lineHeight: 1.5, color: 'var(--soft-charcoal)', opacity: 0.8 }}>
                    {t(`timeline.steps.${step.key}.description`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', position: 'relative', gap: '1rem' }}>
            <div style={{ position: 'absolute', top: '2rem', left: '5%', right: '5%', height: '1px', background: 'linear-gradient(90deg, transparent, var(--warm-taupe), transparent)', zIndex: 0 }} />
            {timelineSteps.map((step, i) => (
              <motion.div key={step.key} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
                style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{ width: '4rem', height: '4rem', borderRadius: '50%', background: 'var(--warm-ivory)', border: '1px solid var(--warm-taupe)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', color: 'var(--muted-bronze)', marginBottom: '1.5rem', boxShadow: 'var(--shadow-paper)' }}>
                  {step.icon}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 1.5vw, 1.3rem)', color: 'var(--faded-black)', marginBottom: '1rem' }}>
                  {t(`timeline.steps.${step.key}.title`)}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.85rem, 1vw, 1rem)', lineHeight: 1.6, color: 'var(--soft-charcoal)', opacity: 0.8, maxWidth: '200px' }}>
                  {t(`timeline.steps.${step.key}.description`)}
                </p>
                {i === 0 && <div style={{ marginTop: '1.5rem' }}><HandwrittenNote rotate={-4} delay={1.5}>Let's dream together...</HandwrittenNote></div>}
                {i === 4 && <div style={{ marginTop: '1.5rem' }}><HandwrittenNote rotate={3} delay={2}>A keepsake forever ♡</HandwrittenNote></div>}
              </motion.div>
            ))}
          </div>
        )}

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }} style={{ position: 'absolute', bottom: isMobile ? '2%' : '8%', right: isMobile ? '5%' : '8%', opacity: 0.12 }}>
          <svg width={isMobile ? 80 : 120} height={isMobile ? 80 : 120} viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="60" r="55" stroke="var(--muted-bronze)" strokeWidth="0.5" strokeDasharray="4 4" />
            <text x="60" y="55" textAnchor="middle" fill="var(--muted-bronze)" fontFamily="var(--font-script)" fontSize="10">Your Journey</text>
            <text x="60" y="70" textAnchor="middle" fill="var(--muted-bronze)" fontFamily="var(--font-script)" fontSize="10">Begins Here</text>
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
