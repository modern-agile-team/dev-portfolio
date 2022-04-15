import { useEffect, useRef } from 'react';

const useInterval = (callback: Function, delay: number) => {
  const autoPlayRef = useRef<Function | null>(null);

  useEffect(() => {
    autoPlayRef.current = callback;
  });

  useEffect(() => {
    function autoPlay() {
      if (autoPlayRef.current === null) return;
      autoPlayRef.current();
    }
    const tick = setInterval(() => {
      autoPlay();
    }, delay);

    return () => {
      clearInterval(tick);
    };
  }, []);
};

export { useInterval };
