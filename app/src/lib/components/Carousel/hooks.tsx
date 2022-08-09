import React, { useEffect, useMemo, useRef, useState } from 'react';

const useInterval = (callback: Function, delay: number, deps?: any[]) => {
  const autoPlayRef = useRef<any>(null);

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

interface useCarouselType {
  children: React.ReactNode;
  slideToShow?: number;
  transition?: number;
  isAutoplay?: boolean;
  autoplaySpeed?: number;
}
const useCarousel = ({
  children,
  slideToShow = 1,
  transition = 1000,
  autoplaySpeed = 3000,
  isAutoplay = false,
}: useCarouselType) => {
  const childrenLength = React.Children.toArray(children).length;
  const [itemList, setItemList] = useState<any[]>([]);
  const [showIndex, setShowIndex] = useState<number>(childrenLength / slideToShow);
  const [coordinateX, setCoordinateX] = useState(0);
  const [autoPlayStatus, setAutoPlayStatus] = useState<boolean>(isAutoplay);
  const [transitionTime, setTransitionTime] = useState(0);
  const [disable, setDisable] = useState(false);
  const itemLength = useMemo(() => itemList.length, [itemList]);
  const lastChildIndex = useMemo(
    () => childrenLength / slideToShow + childrenLength - slideToShow,
    [itemLength, slideToShow]
  );

  const showPrev = () => {
    if (disable) return;
    setDisable(true);
    setTransitionTime(transition);
    setShowIndex(showIndex - 1);

    if (showIndex <= lastChildIndex) {
      setTimeout(() => {
        setTransitionTime(0);
        setShowIndex(showIndex + childrenLength / slideToShow - 1);
      }, transition);
    }

    setTimeout(() => {
      setDisable(false);
    }, transition);
  };

  const showNext = () => {
    if (disable) return;
    setDisable(true);
    setTransitionTime(transition);
    setShowIndex(showIndex + 1);

    if (showIndex >= lastChildIndex) {
      setTimeout(() => {
        setTransitionTime(0);
        setShowIndex(showIndex - childrenLength / slideToShow + 1);
      }, transition);
    }
    setTimeout(() => {
      setDisable(false);
    }, transition);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setCoordinateX(e.touches[0].clientX);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (coordinateX - e.changedTouches[0].clientX > 100) showNext();
    if (e.changedTouches[0].clientX - coordinateX > 100) showPrev();
    setCoordinateX(0);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    setCoordinateX(e.clientX);
  };

  const onMouseUp = (e: React.MouseEvent) => {
    if (coordinateX - e.clientX > 100) showNext();
    if (e.clientX - coordinateX > 100) showPrev();
    setCoordinateX(0);
  };

  const playCarousel = () => {
    setAutoPlayStatus(true);
  };

  const stopPlayCarousel = () => {
    setAutoPlayStatus(false);
  };

  useInterval(
    () => {
      if (autoPlayStatus) showNext();
      else return;
    },
    autoplaySpeed,
    [showIndex, autoPlayStatus, disable]
  );

  useEffect(() => {
    const list = React.Children.toArray(children);
    const clonedList = [...list];
    list.push(...clonedList);
    list.push(...clonedList);
    list.unshift(...clonedList);
    list.unshift(...clonedList);
    setItemList(list);
  }, []);

  useEffect(() => {
    setTransitionTime(transition);
  }, []);

  return {
    itemList,
    showIndex,
    itemLength,
    transitionTime,
    listeners: {
      onMouseDown,
      onMouseUp,
      onTouchEnd,
      onTouchStart,
      showNext,
      showPrev,
      playCarousel,
      stopPlayCarousel,
    },
  };
};

export { useInterval, useCarousel };
