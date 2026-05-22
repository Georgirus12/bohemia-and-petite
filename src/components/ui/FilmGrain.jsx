import React from 'react';

const FilmGrain = () => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: 0.035,
        mixBlendMode: 'multiply',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: '-200%',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
          animation: 'grain 8s steps(10) infinite',
        }}
      />
    </div>
  );
};

export default FilmGrain;
