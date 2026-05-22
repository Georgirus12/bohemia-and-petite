import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import PaperTexture from '../ui/PaperTexture';
import HandwrittenNote from '../ui/HandwrittenNote';

const cities = [
  { name: 'Paris', x: 32, y: 28 },
  { name: 'Madrid', x: 22, y: 55 },
  { name: 'Rome', x: 50, y: 50 },
  { name: 'Venice', x: 50, y: 35 },
  { name: 'Lake Como', x: 46, y: 33 },
  { name: 'Tuscany', x: 48, y: 45 },
  { name: 'Santorini', x: 68, y: 62 },
];

const routes = [
  [0, 1],
  [0, 2],
  [0, 4],
  [2, 3],
  [2, 5],
  [2, 6],
  [4, 5],
  [1, 2],
];

const EuropeRoutes = () => {
  const { t } = useTranslation();

  return (
    <div className="spread" style={{ background: 'var(--warm-ivory)' }}>
      <PaperTexture />

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          height: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: '0',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 'clamp(2rem, 5vw, 5rem)',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span
              className="caption"
              style={{
                color: 'var(--muted-bronze)',
                display: 'block',
                marginBottom: '1rem',
              }}
            >
              {t('routes.subtitle')}
            </span>

            <h2
              style={{
                color: 'var(--faded-black)',
                marginBottom: '2rem',
              }}
            >
              {t('routes.title')}
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1.1rem, 1.3vw, 1.3rem)',
                lineHeight: 1.7,
                color: 'var(--soft-charcoal)',
                marginBottom: '3rem',
                maxWidth: '400px',
              }}
            >
              {t('routes.description')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {['"Every city holds a chapter"', '"Love knows no borders"', '"Written in light and stone"'].map(
              (quote, i) => (
                <HandwrittenNote
                  key={i}
                  rotate={i % 2 === 0 ? -3 : 2}
                  delay={1.2 + i * 0.3}
                >
                  {quote}
                </HandwrittenNote>
              )
            )}
          </motion.div>
        </div>

        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '3rem',
          }}
        >
          <svg
            viewBox="0 0 100 80"
            style={{
              width: '100%',
              maxWidth: '600px',
              height: 'auto',
            }}
          >
            <defs>
              <filter id="paper-texture">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.04"
                  numOctaves="5"
                  result="noise"
                />
                <feDiffuseLighting
                  in="noise"
                  lightingColor="var(--warm-ivory)"
                  surfaceScale="2"
                >
                  <feDistantLight azimuth="45" elevation="60" />
                </feDiffuseLighting>
              </filter>
            </defs>

            <rect
              x="5"
              y="5"
              width="90"
              height="70"
              fill="none"
              stroke="var(--warm-taupe)"
              strokeWidth="0.2"
              strokeDasharray="2 2"
              opacity="0.5"
            />

            {routes.map(([from, to], i) => (
              <motion.line
                key={`route-${i}`}
                x1={cities[from].x}
                y1={cities[from].y}
                x2={cities[to].x}
                y2={cities[to].y}
                stroke="var(--muted-bronze)"
                strokeWidth="0.15"
                strokeDasharray="1 1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.5, delay: 0.5 + i * 0.2 }}
              />
            ))}

            {cities.map((city, i) => (
              <motion.g
                key={city.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              >
                <circle
                  cx={city.x}
                  cy={city.y}
                  r="1"
                  fill="var(--muted-bronze)"
                />
                <circle
                  cx={city.x}
                  cy={city.y}
                  r="2"
                  fill="none"
                  stroke="var(--muted-bronze)"
                  strokeWidth="0.1"
                  opacity="0.4"
                />
                <text
                  x={city.x}
                  y={city.y - 3}
                  textAnchor="middle"
                  fill="var(--faded-black)"
                  fontSize="2.2"
                  fontFamily="var(--font-display)"
                  fontStyle="italic"
                >
                  {city.name}
                </text>
              </motion.g>
            ))}

            <motion.text
              x="50"
              y="77"
              textAnchor="middle"
              fill="var(--warm-taupe)"
              fontSize="1.8"
              fontFamily="var(--font-editorial)"
              letterSpacing="0.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1, delay: 2 }}
            >
              EUROPE — LOVE ROUTES
            </motion.text>
          </svg>

          <motion.div
            initial={{ opacity: 0, rotate: -5 }}
            animate={{ opacity: 1, rotate: -3 }}
            transition={{ duration: 1, delay: 2 }}
            style={{
              position: 'absolute',
              top: '10%',
              right: '5%',
              width: '100px',
              height: '120px',
              background: 'var(--creamy-white)',
              boxShadow: 'var(--shadow-paper)',
              padding: '0.5rem',
              transform: 'rotate(-3deg)',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '70%',
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=200&q=60)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div
              style={{
                fontFamily: 'var(--font-script)',
                fontSize: '0.7rem',
                color: 'var(--muted-bronze)',
                textAlign: 'center',
                marginTop: '0.3rem',
              }}
            >
              Venice, 2024
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: 5 }}
            animate={{ opacity: 1, rotate: 4 }}
            transition={{ duration: 1, delay: 2.3 }}
            style={{
              position: 'absolute',
              bottom: '10%',
              left: '5%',
              width: '90px',
              height: '110px',
              background: 'var(--creamy-white)',
              boxShadow: 'var(--shadow-paper)',
              padding: '0.5rem',
              transform: 'rotate(4deg)',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '70%',
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=200&q=60)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div
              style={{
                fontFamily: 'var(--font-script)',
                fontSize: '0.65rem',
                color: 'var(--muted-bronze)',
                textAlign: 'center',
                marginTop: '0.3rem',
              }}
            >
              Amalfi, 2023
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EuropeRoutes;
