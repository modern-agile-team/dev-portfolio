import React, { cloneElement, ReactElement, useEffect, useMemo, useState } from 'react';
import styled, { css } from 'styled-components';
import { useInterval } from './hooks';
import { TbPlayerPlay, TbPlayerPause } from 'react-icons/tb';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
interface Props {
  children: React.ReactNode;
  width?: string;
  transition?: number;
  autoplaySpeed?: number;
  slideToShow?: number;
  isArrowShow?: boolean;
  isAutoplay?: boolean;
  isAutoplayControl?: boolean;
  arrowLocation?: 'bottom' | 'mid-side' | 'top' | 'bottom-side' | 'top-side';
  playerLocation?: 'bottom-mid' | 'bottom-left' | 'bottom-right' | 'top-mid' | 'top-left' | 'top-right';
  prevArrowIcon?: ReactElement;
  nextArrowIcon?: ReactElement;
  startAutoplayIcon?: ReactElement;
  pauseAutoplayIcon?: ReactElement;
}

type ArrowLocationType = {
  top?: string;
  bottom?: string;
  side?: string;
  translateY?: string;
};

const Carousel = ({
  children,
  width,
  transition = 1000,
  autoplaySpeed = 3000,
  slideToShow = 1,
  isArrowShow = true,
  isAutoplay = false,
  isAutoplayControl = true,
  arrowLocation = 'mid-side',
  playerLocation = 'bottom-mid',
  prevArrowIcon = <FiChevronLeft />,
  nextArrowIcon = <FiChevronRight />,
  startAutoplayIcon = <TbPlayerPlay />,
  pauseAutoplayIcon = <TbPlayerPause />,
}: Props) => {
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

  /* These const variables are ArrowIcons received to props */
  const sizedPrevArrowIcon = useMemo(() => cloneElement(prevArrowIcon), [prevArrowIcon]);
  const sizedNextArrowIcon = useMemo(() => cloneElement(nextArrowIcon), [nextArrowIcon]);

  const sizedStartAutoplayIcon = useMemo(() => cloneElement(startAutoplayIcon), [startAutoplayIcon]);
  const sizedPauseAutoplayIcon = useMemo(() => cloneElement(pauseAutoplayIcon), [pauseAutoplayIcon]);

  /* useInterval is setTimeout custom hook */
  useInterval(
    () => {
      if (autoPlayStatus) showNext();
      else return;
    },
    autoplaySpeed,
    [showIndex, autoPlayStatus, disable]
  );

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

  return (
    <Wrapper
      arrowLocation={arrowLocation}
      width={width}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {isArrowShow && (
        <div className="arrow-icon-wrapper" id="prev-button" onClick={showPrev}>
          {sizedPrevArrowIcon}
        </div>
      )}
      <Container len={itemLength} transition={transitionTime} showIndex={showIndex}>
        <div className="carousel-wrapper">
          <div className="carousel-container">
            {itemList.map((child, index) => {
              return (
                <ChildrenWrapper len={itemLength} slideToShow={slideToShow} key={index}>
                  {child}
                </ChildrenWrapper>
              );
            })}
          </div>
        </div>
      </Container>
      {isArrowShow && (
        <div className="arrow-icon-wrapper" id="next-button" onClick={showNext}>
          {sizedNextArrowIcon}
        </div>
      )}
      {isAutoplayControl && (
        <Player playerLocation={playerLocation}>
          <div className="icon-wrapper" id="start-button" onClick={playCarousel}>
            {sizedStartAutoplayIcon}
          </div>
          <div className="icon-wrapper" id="pause-button" onClick={stopPlayCarousel}>
            {sizedPauseAutoplayIcon}
          </div>
        </Player>
      )}
    </Wrapper>
  );
};

export default React.memo(Carousel);

Carousel.defaultProps = {
  transition: 1000,
  autoplaySpeed: 3000,
  slideToShow: 1,
  isArrowShow: true,
  isAutoplay: false,
  isAutoplayControl: true,
  arrowLocation: 'mid-side',
  prevArrowIcon: <FiChevronLeft />,
  nextArrowIcon: <FiChevronRight />,
  startAutoplayIcon: <TbPlayerPlay />,
  pauseAutoplayIcon: <TbPlayerPause />,
};

const Wrapper = styled.div<{
  arrowLocation: 'bottom' | 'mid-side' | 'top' | 'bottom-side' | 'top-side';
  width?: string;
}>`
  width: ${(props) => props.width || '100%'};
  position: relative;
  margin: 0 auto;
  ${({ arrowLocation }) => {
    const location: ArrowLocationType = {
      top: undefined,
      bottom: undefined,
      side: undefined,
      translateY: undefined,
    };

    const [heigthLocation, sideLocation] = arrowLocation.split('-');

    if (sideLocation === 'side') location.side = '5%';
    else location.side = '50%';

    switch (heigthLocation) {
      case 'top':
        location.bottom = '100%';
        break;
      case 'bottom':
        location.top = '100%';
        break;
      case 'mid':
        location.top = '50%';
        location.translateY = '-50%';
        break;
    }

    const { top, bottom, side, translateY } = location;

    return css`
      .arrow-icon-wrapper {
        position: absolute;
        top: ${top};
        bottom: ${bottom};
        transform: translateY(${translateY});
        z-index: 3;
        cursor: pointer;
      }
      #next-button {
        ${sideLocation === 'side' ? 'right' : 'left'}: ${side};
      }
      #prev-button {
        ${sideLocation === 'side' ? 'left' : 'right'}: ${side};
      }
    `;
  }}
  .icon-wrapper {
    font-size: 25px;
  }
`;

const Container = styled.div<{
  len: number;
  transition: number;
  showIndex: number;
}>`
  overflow: hidden;
  .carousel-wrapper {
    width: 100%;
  }
  .carousel-container {
    display: flex;
    position: relative;
    ${({ transition, len, showIndex }) => {
      return css`
        transition: ${transition / 1000}s;
        width: calc(${len} * 100%);
        transform: translateX(${(-showIndex * 100) / len}%);
      `;
    }}
  }
`;

const ChildrenWrapper = styled.div<{
  slideToShow: number;
  len: number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  ${({ len, slideToShow }) => {
    if (slideToShow === 1) {
      return css`
        width: 100%;
      `;
    } else {
      return css`
        width: calc(100% / ${len * slideToShow});
      `;
    }
  }}
`;

const Player = styled.div<{
  playerLocation: 'bottom-mid' | 'bottom-left' | 'bottom-right' | 'top-mid' | 'top-left' | 'top-right';
}>`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 15px 0;
  position: absolute;
  svg {
    margin: 0 10px;
    cursor: pointer;
  }
  ${({ playerLocation }) => {
    const [heigthLocation, sideLocation] = playerLocation.split('-');
    const location: { top?: string; bottom?: string; left?: string; right?: string; translateX?: string } = {
      top: undefined,
      bottom: undefined,
      left: undefined,
      right: undefined,
      translateX: undefined,
    };
    if (heigthLocation === 'top') {
      location.bottom = '100%';
    } else {
      location.top = '100%';
    }
    if (sideLocation === 'mid') {
      location.left = '50%';
      location.translateX = '-50%';
    } else if (sideLocation === 'left') {
      location.left = '0';
    } else {
      location.right = '0';
    }
    const { top, bottom, left, right, translateX } = location;
    return css`
      top: ${top};
      bottom: ${bottom};
      left: ${left};
      right: ${right};
      transform: translateX(${translateX});
    `;
  }}
`;
