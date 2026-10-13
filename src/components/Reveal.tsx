import React from 'react';
import { useReveal } from '../hooks/useReveal';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  threshold?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className = '',
  delay = 0,
  y = 28,
  threshold = 0.1,
}) => {
  const { ref, isIntersecting } = useReveal<HTMLDivElement>({ threshold });

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: '750ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${delay}ms`,
        transform: isIntersecting ? 'translate3d(0, 0, 0)' : `translate3d(0, ${y}px, 0)`,
        opacity: isIntersecting ? 1 : 0,
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </div>
  );
};
