
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  theme?: 'light' | 'dark';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className, theme = 'light' }) => {
  const titleColor = theme === 'dark' ? 'text-white' : 'text-brand-blue';
  const subtitleColor = theme === 'dark' ? 'text-sky-200' : 'text-gray-600';
  const dividerColor = 'bg-brand-teal';
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div 
      ref={ref}
      className={`mb-12 text-center section-title-wrapper ${isVisible ? 'is-visible' : ''} ${className || ''}`}
    >
      <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${titleColor}`}>{title}</h2>
      {subtitle && <p className={`mt-4 max-w-3xl mx-auto text-lg ${subtitleColor}`}>{subtitle}</p>}
      <div className="mt-5 flex justify-center divider-container">
        <div className={`w-24 h-1 ${dividerColor} rounded-full`}></div>
      </div>
    </div>
  );
};

export default SectionTitle;
