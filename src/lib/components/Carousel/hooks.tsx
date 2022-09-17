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
        setShowIndex(showIndex + childrenLength / slideToShow - 1);
        const temp = [...prev];
        const result = [];
        for (let i = 0; i < slideToShow; i++) {
          result.unshift(temp.pop());
        }
        temp.unshift(...result);
        return temp;
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
        setShowIndex(showIndex - childrenLength / slideToShow + 1);
        const temp = [...prev];
        const result = [];
        for (let i = 0; i < slideToShow; i++) {
          result.push(temp.shift());
        }
        temp.push(...result);
        return temp;
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
    if (list.length === slideToShow) {
      setItemList(list);
    } else {
      const showItems = list.slice(0, slideToShow); // 처음에 보여줘야할 아이템들
      const restItems = list.slice(slideToShow); // 나머지 아이템들

      // 나머이 아이템 중에서 showItems 뒤에 붙을 애들
      const backwardItems = restItems.slice(0, Math.floor(restItems.length / 2));

      // 나머지 아이템 중에서 showItems 앞에 붙을 애들
      const forwardItems = restItems.slice(Math.floor(restItems.length / 2));
      setShowIndex(forwardItems.length);
      setForwardItemLength(forwardItems.length);
      const result = [...forwardItems, ...showItems, ...backwardItems];
      setItemList(result);
    }
  }, []);

  useEffect(() => {
    setTransitionTime(0);
    setTimeout(() => {
      setTransitionTime(transition);
    }, transition);
  }, []);

  useEffect(() => {
    const childrenLength = React.Children.toArray(children).length;
    if (childrenLength / slideToShow < slideToShow) {
      alert('빈 공간이 보일수 있음');
    }
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
