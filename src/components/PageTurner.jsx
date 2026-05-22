import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageTurner = ({ children, currentSpread: externalSpread, onSpreadChange }) => {
  const containerRef = useRef(null);
  const [internalSpread, setInternalSpread] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalSpreads = React.Children.count(children);
  const touchStartRef = useRef(0);

  const currentSpread = externalSpread !== undefined ? externalSpread : internalSpread;

  const goToSpread = useCallback(
    (index) => {
      if (isAnimating || index < 0 || index >= totalSpreads || index === currentSpread) return;
      setIsAnimating(true);
      setInternalSpread(index);
      onSpreadChange?.(index);
      setTimeout(() => setIsAnimating(false), 800);
    },
    [isAnimating, totalSpreads, currentSpread, onSpreadChange]
  );

  const nextSpread = useCallback(() => {
    goToSpread(currentSpread + 1);
  }, [currentSpread, goToSpread]);

  const prevSpread = useCallback(() => {
    goToSpread(currentSpread - 1);
  }, [currentSpread, goToSpread]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        nextSpread();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prevSpread();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSpread, prevSpread]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let accumulated = 0;
    let timeout = null;

    const handleWheel = (e) => {
      e.preventDefault();
      accumulated += e.deltaY + e.deltaX;

      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        accumulated = 0;
      }, 200);

      if (Math.abs(accumulated) > 50) {
        if (accumulated > 0) nextSpread();
        else prevSpread();
        accumulated = 0;
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      container.removeEventListener('wheel', handleWheel);
      if (timeout) clearTimeout(timeout);
    };
  }, [nextSpread, prevSpread]);

  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSpread();
      else prevSpread();
    }
  };

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSpread}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: '100vw',
            height: '100vh',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          {React.Children.toArray(children)[currentSpread]}
        </motion.div>
      </AnimatePresence>

      <div
        style={{
          position: 'fixed',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '0.75rem',
          zIndex: 100,
          alignItems: 'center',
        }}
      >
        {Array.from({ length: totalSpreads }).map((_, i) => (
          <button
            key={i}
            onClick={() => goToSpread(i)}
            aria-label={`Go to spread ${i + 1}`}
            style={{
              width: currentSpread === i ? '2rem' : '0.5rem',
              height: '0.5rem',
              borderRadius: '1rem',
              background:
                currentSpread === i
                  ? 'var(--muted-bronze)'
                  : 'var(--warm-taupe)',
              opacity: currentSpread === i ? 1 : 0.4,
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              padding: 0,
            }}
          />
        ))}
      </div>

      <div
        style={{
          position: 'fixed',
          right: '2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          zIndex: 100,
        }}
      >
        <button
          onClick={prevSpread}
          disabled={currentSpread === 0}
          style={{
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: '50%',
            border: '1px solid var(--warm-taupe)',
            background: 'rgba(248, 244, 236, 0.8)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: currentSpread === 0 ? 'default' : 'pointer',
            opacity: currentSpread === 0 ? 0.3 : 1,
            transition: 'all 0.3s ease',
            fontSize: '1rem',
            color: 'var(--soft-charcoal)',
          }}
        >
          &#8592;
        </button>
        <button
          onClick={nextSpread}
          disabled={currentSpread === totalSpreads - 1}
          style={{
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: '50%',
            border: '1px solid var(--warm-taupe)',
            background: 'rgba(248, 244, 236, 0.8)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor:
              currentSpread === totalSpreads - 1 ? 'default' : 'pointer',
            opacity: currentSpread === totalSpreads - 1 ? 0.3 : 1,
            transition: 'all 0.3s ease',
            fontSize: '1rem',
            color: 'var(--soft-charcoal)',
          }}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default PageTurner;
