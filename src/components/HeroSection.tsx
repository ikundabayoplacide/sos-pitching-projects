import { useEffect, useState } from 'react';

const heroImages = [
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
  'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80',
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-background-primary">
        <div className="absolute inset-0 opacity-20">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={img}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background-primary/20 via-background-primary/20 to-background-primary" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-600/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary-500/10 rounded-full blur-2xl animate-morph" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-primary-400">Innovate.</span>{' '}
            <span className="text-secondary-200">Create.</span>{' '}
            <span className="text-accent-400">Inspire.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto">
            Discover groundbreaking projects from talented students pushing the boundaries of technology
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary-600 hover:bg-primary-500 text-text-primary rounded-lg transition-all hover:scale-105 font-semibold"
            >
              Explore Projects
            </a>
            <a
              href="#about"
              className="px-8 py-3 bg-transparent border-2 border-secondary-500 hover:border-accent-500 text-text-secondary hover:text-accent-400 rounded-lg transition-all"
            >
              Learn More
            </a>
          </div> */}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-secondary-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent-500 rounded-full mt-2 animate-scroll" />
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-primary-500 w-8' : 'bg-secondary-600'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
