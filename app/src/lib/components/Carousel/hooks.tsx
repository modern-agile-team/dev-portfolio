import { useEffect, useRef } from 'react';

const useInterval = (callback: Function, delay: number, autoPlayStatus: boolean, deps?: any[]) => {
  const autoPlayRef = useRef<any>(null);

  function resetTimeout() {
    if (autoPlayRef.current) {
      clearTimeout(autoPlayRef.current);
    }
  }
  useEffect(() => {
    if (!autoPlayStatus) return;
    resetTimeout();

    autoPlayRef.current = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      resetTimeout();
    };
  }, deps);
};

export { useInterval };
