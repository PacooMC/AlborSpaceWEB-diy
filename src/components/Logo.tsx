import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link to="/" className={`flex items-center space-x-2 group ${className}`} aria-label="Go to homepage">
      <span className="text-2xl font-light tracking-[0.2em] text-white transition-colors duration-300">
        ALBOR
      </span>
      <span className="text-2xl font-light tracking-[0.2em] text-white/30 group-hover:text-white/50 transition-colors duration-300">
        SPACE
      </span>
    </Link>
  );
};

export default Logo;
