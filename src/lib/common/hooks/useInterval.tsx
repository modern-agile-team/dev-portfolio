import { useEffect, useRef } from 'react';

const useInterval = (callback: () => void, delay: number, deps?: unknown[]) => {
  const autoPlayRef = useRef<NodeJS.Timeout>();

  function resetTimeout() {
    if (autoPlayRef.current) {
      clearTimeout(autoPlayRef.current);
    }
  }
  useEffect(() => {
    resetTimeout();

    autoPlayRef.current = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      resetTimeout();
    };
  }, deps);
};

export default useInterval;
