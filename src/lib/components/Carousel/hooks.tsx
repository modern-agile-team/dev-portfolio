import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useCarouselPropsType } from '../../common/types/ComponentTypes/CarouselType';

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

const useCarousel = ({
  children,
  slideToShow = 1,
  transition = 1000,
  autoplaySpeed = 3000,
  isAutoplay = false,
}: useCarouselPropsType) => {
  const childrenLength = React.Children.toArray(children).length;
  const [itemList, setItemList] = useState<any[]>([]);
  const [coordinateX, setCoordinateX] = useState(0);
  const [autoPlayStatus, setAutoPlayStatus] = useState<boolean>(isAutoplay);
  const [transitionTime, setTransitionTime] = useState(0);
  const [disable, setDisable] = useState(false);
  const itemLength = useMemo(() => itemList.length, [itemList]);
  const [forwardItemLength, setForwardItemLength] = useState(0);
  const [showIndex, setShowIndex] = useState(0);

  const showPrev = () => {
    if (disable) return;
    setDisable(true);
    setTransitionTime(transition);
    setShowIndex(showIndex - slideToShow);

    setTimeout(() => {
      setTransitionTime(0);
      setItemList((prev) => {
        const temp = [...prev];
        const result = [];
        setShowIndex(showIndex + childrenLength / slideToShow - 1);

        if (childrenLength / slideToShow < slideToShow) {
          const origin = temp.splice(slideToShow, childrenLength);
          for (let i = 0; i < slideToShow; i++) {
            result.unshift(origin.pop());
          }
          origin.unshift(...result);
          const f = origin.slice(0, slideToShow);
          const b = origin.slice(-slideToShow);
          origin.push(...f);
          origin.unshift(...b);
          return origin;
        } else {
          for (let i = 0; i < slideToShow; i++) {
            result.unshift(temp.pop());
          }
          temp.unshift(...result);
          return temp;
        }
      });
    }, transition);

    setTimeout(() => {
      setDisable(false);
      setShowIndex(forwardItemLength);
    }, transition);
  };

  const showNext = () => {
    if (disable) return;
    setDisable(true);
    setTransitionTime(transition);
    setShowIndex(showIndex + slideToShow);

    setTimeout(() => {
      setTransitionTime(0);
      setItemList((prev) => {
        const temp = [...prev];
        const result = [];
        setShowIndex(showIndex - childrenLength / slideToShow + 1);

        if (childrenLength / slideToShow < slideToShow) {
          const origin = temp.splice(slideToShow, childrenLength);
          for (let i = 0; i < slideToShow; i++) {
            result.push(origin.shift());
          }
          origin.push(...result);
          const f = origin.slice(0, slideToShow);
          const b = origin.slice(-slideToShow);
          origin.push(...f);
          origin.unshift(...b);
          return origin;
        } else {
          for (let i = 0; i < slideToShow; i++) {
            result.push(temp.shift());
          }
          temp.push(...result);
          return temp;
        }
      });
    }, transition);

    setTimeout(() => {
      setDisable(false);
      setShowIndex(forwardItemLength);
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
    const showItems = list.slice(0, slideToShow);
    const restItems = list.slice(slideToShow);

    const backwardItems = restItems.slice(0, Math.floor(restItems.length / 2));

    const forwardItems = restItems.slice(Math.floor(restItems.length / 2));
    const result = [...forwardItems, ...showItems, ...backwardItems];

    if (childrenLength / slideToShow < slideToShow) {
      const f = result.slice(0, slideToShow);
      const b = result.slice(-slideToShow);
      result.push(...f);
      result.unshift(...b);
      setShowIndex(forwardItems.length + slideToShow);
      setForwardItemLength(forwardItems.length + slideToShow);
    } else {
      setShowIndex(forwardItems.length);
      setForwardItemLength(forwardItems.length);
    }

    setItemList(result);
  }, []);

  useEffect(() => {
    setTransitionTime(0);
    setTimeout(() => {
      setTransitionTime(transition);
    }, transition);
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
