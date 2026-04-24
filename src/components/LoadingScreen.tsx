import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [loadingText, setLoadingText] = useState('Initializing');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsExiting(true);
          setTimeout(() => onLoadingComplete(), 600);
          return 100;
        }
        
        // Update loading text based on progress
        if (prev < 30) setLoadingText('Initializing');
        else if (prev < 60) setLoadingText('Loading assets');
        else if (prev < 90) setLoadingText('Preparing experience');
        else setLoadingText('Almost ready');
        
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-gradient-to-br from-[#0a1628] via-[#0f1e3d] to-[#1a2847] flex items-center justify-center overflow-hidden transition-all duration-600 ${
        isExiting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}
    >
      {/* Subtle animated background gradient */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary-600/20 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-accent-500/20 rounded-full blur-[120px] animate-blob animation-delay-2000" />
      </div>

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(10,22,40,0.8)_100%)]" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Advanced spinning loader */}
        <div className="relative w-24 h-24 mb-12">
          {/* Outer rotating ring */}
          <svg className="w-full h-full animate-spin-smooth" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#gradient1)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="70 200"
              className="opacity-60"
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3861fb" stopOpacity="0" />
                <stop offset="50%" stopColor="#4a9eff" stopOpacity="1" />
                <stop offset="100%" stopColor="#3861fb" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Inner rotating ring (opposite direction) */}
          <svg className="absolute inset-0 w-full h-full animate-spin-reverse" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="url(#gradient2)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="50 150"
              className="opacity-80"
            />
            <defs>
              <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4a9eff" stopOpacity="0" />
                <stop offset="50%" stopColor="#3861fb" stopOpacity="1" />
                <stop offset="100%" stopColor="#4a9eff" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-primary-500/30 rounded-full blur-xl animate-pulse" />
          </div>
        </div>

        {/* Welcome text */}
        <h1 className="text-2xl md:text-3xl font-semibold text-white mb-3 tracking-tight">
          Welcome to <span className="text-primary-400 font-bold">SanTech</span>
        </h1>

        {/* Subtitle */}
        <p className="text-secondary-400 text-sm md:text-base mb-8 text-center max-w-md px-4">
          Harness innovation and creativity for groundbreaking student projects
        </p>

        {/* Progress bar */}
        <div className="w-80 max-w-[90vw] mb-4">
          <div className="relative h-1 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary-600 via-accent-500 to-primary-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-fast" />
            </div>
          </div>
        </div>

        {/* Loading status text */}
        <div className="flex items-center gap-2 min-h-[24px]">
          <span className="text-secondary-500 text-sm font-medium transition-all duration-300">
            {loadingText}
          </span>
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-1 h-1 rounded-full bg-primary-500"
                style={{
                  animation: 'bounce 3s ease-in-out infinite',
                  animationDelay: `${i * 0.16}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Progress percentage (subtle) */}
        <div className="mt-2 text-secondary-600 text-xs font-mono tabular-nums">
          {progress}%
        </div>
      </div>

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary-500/20 rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animation: `float ${8 + Math.random() * 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
