import React, { useEffect, useState } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const scrollPx = window.scrollY || document.documentElement.scrollTop || 0;
      const totalScrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScrollable > 0 ? scrollPx / totalScrollable : 0;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={Math.round(scrollProgress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none bg-white/[0.04]"
    >
      <div
        className="h-full bg-[#E26D35] origin-left transition-transform duration-75 ease-out will-change-transform shadow-[0_0_8px_rgba(226,109,53,0.6)]"
        style={{
          transform: `scaleX(${scrollProgress})`,
        }}
      />
    </div>
  );
};
