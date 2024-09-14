import { useEffect, useState } from 'react';

export const useScreen = () => {
  const isMobile = () => window.innerWidth < 768;

  return { isMobile };
};

export const useWindowSize = (): { width?: number } => {
  const isWindow = typeof window !== 'undefined';
  const [width, setWidth] = useState(isWindow ? window.innerWidth : undefined);

  useEffect(() => {
    const handleResize = () => {
      setWidth(isWindow ? window.innerWidth : undefined);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isWindow]);

  return { width };
};
