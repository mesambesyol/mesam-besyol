import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedItemProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: React.ElementType;
  staggerIndex?: number;
}

const AnimatedItem: React.FC<AnimatedItemProps> = ({ 
  children, 
  className, 
  as: Component = 'div', 
  staggerIndex = 0,
  style,
  ...props 
}) => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  
  const combinedStyles: React.CSSProperties = {
    ...style,
    transitionDelay: `${staggerIndex * 80}ms`,
  };

  return (
    <Component
      ref={ref}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''} ${className || ''}`}
      style={combinedStyles}
      {...props}
    >
      {children}
    </Component>
  );
};

export default AnimatedItem;