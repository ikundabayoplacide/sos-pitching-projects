import { useEffect, useLayoutEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import LoadingScreen from '../components/LoadingScreen';
import ProjectSection from '../components/ProjectSection';

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useLayoutEffect(() => {
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    return () => {
      window.history.scrollRestoration = previousRestoration;
    };
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (isLoading) {
      html.classList.add('landing-loading');
      body.classList.add('landing-loading');
      body.style.overflow = 'hidden';
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    } else {
      html.classList.remove('landing-loading');
      body.classList.remove('landing-loading');
      body.style.overflow = '';

      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      });
    }

    return () => {
      html.classList.remove('landing-loading');
      body.classList.remove('landing-loading');
      body.style.overflow = '';
    };
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background-primary">
      <HeroSection />
      <ProjectSection />
    </div>
  );
}
