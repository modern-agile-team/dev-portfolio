import { FaArrowCircleRight, FaArrowCircleLeft, FaPlay, FaStop } from 'react-icons/fa';
import React, { cloneElement, ReactElement, useEffect, useMemo, useState } from 'react';
import styled, { css } from 'styled-components';
import { useInterval } from './hooks';

interface Props {
  children: React.ReactNode;
  width?: string;
  transition?: number;
  autoplaySpeed?: number;
  slideToShow?: number;
  isArrowShow?: boolean;
  isAutoplay?: boolean;
  arrowLocation?: 'bottom' | 'mid-side' | 'top' | 'bottom-side' | 'top-side';
  prevArrowIcon?: ReactElement<{ size: number }>;
  nextArrowIcon?: ReactElement<{ size: number }>;
}

type ArrowLocationType = {
  top?: string;
  bottom?: string;
  side?: string;
  translateY?: string;
};

const Carousel = React.forwardRef(
  (
    {
      children,
      width,
      transition = 1000,
      autoplaySpeed = 3000,
      slideToShow = 1,
      isArrowShow = true,
      isAutoplay = false,
      arrowLocation = 'mid-side',
      prevArrowIcon = <FaArrowCircleLeft />,
      nextArrowIcon = <FaArrowCircleRight />,
    }: Props,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [itemList, setItemList] = useState<any[]>([]);
    const [showIndex, setShowIndex] = useState<number>(1);
    const [coordinateX, setCoordinateX] = useState(0);
    const [autoPlayStatus, setAutoPlayStatus] = useState<boolean>(isAutoplay);
    const [transitionTime, setTransitionTime] = useState(0);

    const childrenLen = useMemo(() => itemList.length, [itemList]);
    const lastChildIndex = useMemo(() => Math.floor((childrenLen - 1) / slideToShow), [childrenLen, slideToShow]);

    const showPrev = () => {
      setTransitionTime(transition);
      setShowIndex(showIndex - 1);
      if (showIndex === 1) {
        return setTimeout(() => {
          setTransitionTime(0);
          setShowIndex(lastChildIndex - 1);
        }, transition);
      }
    };

    const showNext = () => {
      setTransitionTime(transition);
      setShowIndex(showIndex + 1);
      if (showIndex === lastChildIndex - 1) {
        return setTimeout(() => {
          setTransitionTime(0);
          setShowIndex(1);
        }, transition);
      }
    };

    /* These const variables are ArrowIcons received to props */
    const sizedPrevArrowIcon = useMemo(() => cloneElement(prevArrowIcon), [prevArrowIcon]);
    const sizedNextArrowIcon = useMemo(() => cloneElement(nextArrowIcon), [nextArrowIcon]);

    /* useInterval is setTimeout custom hook */
    useInterval(showNext, autoplaySpeed, autoPlayStatus, [showIndex, autoPlayStatus]);

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
      const firstChild = list[0];
      const lastChild = list[list.length - 1];
      list.push(firstChild);
      list.unshift(lastChild);
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
          <div className="icon-wrapper" id="prev-button" onClick={showPrev}>
            {sizedPrevArrowIcon}
          </div>
        )}
        <Container ref={ref} len={childrenLen} transition={transitionTime} showIndex={showIndex}>
          <div className="carousel-wrapper">
            <div className="carousel-container">
              {itemList.map((child) => {
                return (
                  <ChildrenWrapper len={childrenLen} slideToShow={slideToShow} key={child?.toString()}>
                    {child}
                  </ChildrenWrapper>
                );
              })}
            </div>
          </div>
        </Container>
        {isArrowShow && (
          <div className="icon-wrapper" id="next-button" onClick={showNext}>
            {sizedNextArrowIcon}
          </div>
        )}
        <Player>
          <FaPlay onClick={playCarousel} />
          <FaStop onClick={stopPlayCarousel} />
        </Player>
      </Wrapper>
    );
  }
);

export default React.memo(Carousel);

Carousel.defaultProps = {
  transition: 1000,
  autoplaySpeed: 3000,
  slideToShow: 1,
  isArrowShow: true,
  isAutoplay: false,
  arrowLocation: 'mid-side',
  prevArrowIcon: <FaArrowCircleLeft />,
  nextArrowIcon: <FaArrowCircleRight />,
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
      .icon-wrapper {
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
  padding: 20px;
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

const Player = styled.div`
  text-align: center;
  margin: 15px 0;
  svg {
    margin: 0 10px;
    transform: scale(1.5);
    cursor: pointer;
  }
`;
