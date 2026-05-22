import React, { useState, useCallback } from 'react';
import './i18n/config';
import PageTurner from './components/PageTurner';
import Navigation from './components/Navigation';
import FilmGrain from './components/ui/FilmGrain';
import CoverStory from './components/spreads/CoverStory';
import FeaturedDestinations from './components/spreads/FeaturedDestinations';
import ExperienceTimeline from './components/spreads/ExperienceTimeline';
import EuropeRoutes from './components/spreads/EuropeRoutes';
import PortfolioStories from './components/spreads/PortfolioStories';
import TestimonialSpreads from './components/spreads/TestimonialSpreads';
import ClosingSpread from './components/spreads/ClosingSpread';

const App = () => {
  const [currentSpread, setCurrentSpread] = useState(0);

  const handleSpreadChange = useCallback((index) => {
    setCurrentSpread(index);
  }, []);

  const handleNavigate = useCallback((index) => {
    setCurrentSpread(index);
  }, []);

  return (
    <>
      <FilmGrain />
      <Navigation currentSpread={currentSpread} onNavigate={handleNavigate} />
      <PageTurner currentSpread={currentSpread} onSpreadChange={handleSpreadChange}>
        <CoverStory />
        <FeaturedDestinations />
        <ExperienceTimeline />
        <EuropeRoutes />
        <PortfolioStories />
        <TestimonialSpreads />
        <ClosingSpread />
      </PageTurner>
    </>
  );
};

export default App;
