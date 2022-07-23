import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import React, { cloneElement, ReactElement, useMemo, useState } from 'react';
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
    const [showIndex, setShowIndex] = useState<number>(0);
    const [coordinateX, setCoordinateX] = useState(0);

    const childrenLen = useMemo(() => React.Children.toArray(children).length, [children]);
    const lastChildIndex = useMemo(() => Math.floor((childrenLen - 1) / slideToShow), [childrenLen, slideToShow]);

    const showPrev = () => {
      if (showIndex === 0) return setShowIndex(() => lastChildIndex);
      setShowIndex((prev) => prev - 1);
    };

    const showNext = () => {
      if (showIndex === lastChildIndex) return setShowIndex(() => 0);
      setShowIndex((prev) => prev + 1);
    };

    /* These const variables are ArrowIcons received to props */
    const sizedPrevArrowIcon = useMemo(() => cloneElement(prevArrowIcon), [prevArrowIcon]);
    const sizedNextArrowIcon = useMemo(() => cloneElement(nextArrowIcon), [nextArrowIcon]);

    /* useInterval is setTimeout custom hook */
    isAutoplay && useInterval(showNext, autoplaySpeed, [showIndex]);

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
        <Container ref={ref} len={childrenLen} transition={transition} showIndex={showIndex}>
          <div className="carousel-wrapper">
            <div className="carousel-container">
              {React.Children.map(children, (child) => {
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
    transition: ${(props) => props.transition / 1000}s;
    width: ${(props) => `calc(${props.len} * 100%)`};
    transform: ${(props) => `translateX(${(-props.showIndex * 100) / props.len}%)`};
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
