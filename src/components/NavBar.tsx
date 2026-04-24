import { useState } from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="site-chrome fixed top-0 left-0 right-0 z-50 bg-background-secondary/80 backdrop-blur-md border-b border-primary-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-primary-500">San</span>
              <span className="text-secondary-300">Tech</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-text-secondary hover:text-primary-400 transition-colors">
              Home
            </a>
            <a href="#projects" className="text-text-secondary hover:text-primary-400 transition-colors">
              Projects
            </a>
            <a href="#about" className="text-text-secondary hover:text-primary-400 transition-colors">
              About
            </a>
            {/* <button className="px-6 py-2 bg-primary-600 hover:bg-primary-500 text-text-primary rounded-lg transition-colors">
              Submit Project
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-secondary hover:text-primary-400"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background-tertiary border-t border-primary-900/30">
          <div className="px-4 py-4 space-y-3">
            <a href="#home" className="block text-text-secondary hover:text-primary-400 transition-colors">
              Home
            </a>
            <a href="#projects" className="block text-text-secondary hover:text-primary-400 transition-colors">
              Projects
            </a>
            <a href="#about" className="block text-text-secondary hover:text-primary-400 transition-colors">
              About
            </a>
            <button className="w-full px-6 py-2 bg-primary-600 hover:bg-primary-500 text-text-primary rounded-lg transition-colors">
              Submit Project
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
