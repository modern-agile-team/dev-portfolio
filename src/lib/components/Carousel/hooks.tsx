import React, { useEffect, useMemo, useState } from 'react';
import { useInterval } from '../../common/hooks';
import { useCarouselPropsType } from '../../common/types/ComponentTypes/CarouselType';

const useCarousel = ({
  children,
  slideToShow = 1,
  transition = 1000,
  autoplaySpeed = 3000,
  isAutoplay = false,
}: useCarouselPropsType) => {
  const [itemList, setItemList] = useState<any[]>([]);
  const [coordinateX, setCoordinateX] = useState(0);
  const [autoPlayStatus, setAutoPlayStatus] = useState<boolean>(isAutoplay);
  const [transitionTime, setTransitionTime] = useState(0);
  const [disable, setDisable] = useState(false);
  const [forwardItemLength, setForwardItemLength] = useState(0);
  const [showIndex, setShowIndex] = useState(0);

  const childrenLength = React.Children.toArray(children).length;
  const itemLength = useMemo(() => itemList.length, [itemList]);

  const startTransition = (index: number) => {
    setDisable(true);
    setTransitionTime(transition);
    setShowIndex(index);
  };

  const endTransition = () => {
    setTimeout(() => {
      setDisable(false);
      setShowIndex(forwardItemLength);
    }, transition);
  };

  const duringTransition = (direction: 'prev' | 'next') => {
    setTimeout(() => {
      setTransitionTime(0);
      if (direction === 'next') {
        setItemList((prev) => {
          const { list: result } = setNextItem({ prevList: prev, showIndex, slideToShow, childrenLength });
          return result;
        });
      } else {
        setItemList((prev) => {
          const { list: result } = setPreviousItem({ prevList: prev, showIndex, slideToShow, childrenLength });
          return result;
        });
      }
    }, transition);
  };

  const showPrev = () => {
    if (disable) return;
    startTransition(showIndex - slideToShow);
    duringTransition('prev');
    endTransition();
  };

  const showNext = () => {
    if (disable) return;
    startTransition(showIndex + slideToShow);
    duringTransition('next');
    endTransition();
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
    const { list, index, length } = init({ children, slideToShow });

    setShowIndex(index);
    setForwardItemLength(length);
    setItemList(list);
  }, []);

  useEffect(() => {
    setTransitionTime(0);
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

export { useCarousel };

const init = ({ children, slideToShow }: { children: React.ReactNode; slideToShow: number }) => {
  const list = React.Children.toArray(children);
  const showItems = list.slice(0, slideToShow);
  const restItems = list.slice(slideToShow);

  const backwardItems = restItems.slice(0, Math.floor(restItems.length / 2));

  const forwardItems = restItems.slice(Math.floor(restItems.length / 2));
  const result = [...forwardItems, ...showItems, ...backwardItems];

  let showIndex = 0;
  let forwardItemLength = 0;

  if (Math.floor(list.length / slideToShow) <= slideToShow) {
    const f = result.slice(0, slideToShow);
    const b = result.slice(-slideToShow);
    result.push(...f);
    result.unshift(...b);
    showIndex = forwardItems.length + slideToShow;
    forwardItemLength = forwardItems.length + slideToShow;
  } else {
    showIndex = forwardItems.length;
    forwardItemLength = forwardItems.length;
  }

  return { list: result, index: showIndex, length: forwardItemLength };
};

const setNextItem = ({
  prevList,
  childrenLength,
  slideToShow,
  showIndex,
}: {
  prevList: any[];
  childrenLength: number;
  slideToShow: number;
  showIndex: number;
}) => {
  const list =
    Math.floor(childrenLength / slideToShow) <= slideToShow
      ? [...prevList].splice(slideToShow, childrenLength)
      : [...prevList];
  const result = [];
  const index = showIndex - childrenLength / slideToShow + 1;

  if (Math.floor(childrenLength / slideToShow) <= slideToShow) {
    for (let i = 0; i < slideToShow; i++) {
      result.push(list.shift());
    }
    list.push(...result);
    const forward = list.slice(0, slideToShow);
    const backward = list.slice(-slideToShow);
    list.push(...forward);
    list.unshift(...backward);
  } else {
    for (let i = 0; i < slideToShow; i++) {
      result.push(list.shift());
    }
    list.push(...result);
  }
  return { list, index };
};

const setPreviousItem = ({
  prevList,
  childrenLength,
  slideToShow,
  showIndex,
}: {
  prevList: any[];
  childrenLength: number;
  slideToShow: number;
  showIndex: number;
}) => {
  const list =
    Math.floor(childrenLength / slideToShow) <= slideToShow
      ? [...prevList].splice(slideToShow, childrenLength)
      : [...prevList];
  const result = [];
  const index = showIndex + childrenLength / slideToShow - 1;

  if (Math.floor(childrenLength / slideToShow) <= slideToShow) {
    for (let i = 0; i < slideToShow; i++) {
      result.unshift(list.pop());
    }
    list.unshift(...result);
    const forward = list.slice(0, slideToShow);
    const backward = list.slice(-slideToShow);
    list.push(...forward);
    list.unshift(...backward);
  } else {
    for (let i = 0; i < slideToShow; i++) {
      result.unshift(list.pop());
    }
    list.unshift(...result);
  }
  return { list, index };
};
