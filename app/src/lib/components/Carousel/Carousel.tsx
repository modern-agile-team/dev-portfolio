import { FaArrowCircleRight, FaArrowCircleLeft } from '@dependencies/react-icons/fa';
import React, { useMemo, useState } from 'react';
import styled, { css } from 'styled-components';
import { useInterval } from './hooks';

interface Props {
  children: React.ReactNode;
  width?: string;
  padding?: string;
  transition?: number;
  autoplaySpeed?: number;
  slideToShow?: number;
  isArrowShow?: boolean;
  isAutoplay?: boolean;
  arrowLocation?: 'bottom' | 'mid-side' | 'top' | 'bottom-side' | 'top-side';
}

const Carousel = React.forwardRef(
  (
    {
      children,
      width,
      padding,
      transition = 1000,
      autoplaySpeed = 3000,
      slideToShow = 1,
      isArrowShow = true,
      isAutoplay = false,
      arrowLocation = 'mid-side',
    }: Props,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [showIndex, setShowIndex] = useState<number>(0);

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

    isAutoplay && useInterval(showNext, autoplaySpeed, [showIndex]);

    return (
      <Wrapper arrowLocation={arrowLocation} width={width} padding={padding}>
        {isArrowShow && <FaArrowCircleLeft id="prev-button" onClick={showPrev} />}
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
        {isArrowShow && <FaArrowCircleRight id="next-button" onClick={showNext} />}
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
};

const Wrapper = styled.div<{
  arrowLocation: 'bottom' | 'mid-side' | 'top' | 'bottom-side' | 'top-side';
  width?: string;
  padding?: string;
}>`
  width: ${(props) => props.width || '100%'};
  padding: ${(props) => props.padding || 0};
  position: relative;

  ${({ arrowLocation }) => {
    type locationType = {
      top?: string;
      bottom?: string;
      side?: string;
      translateY?: string;
    };

    const location: locationType = {
      top: undefined,
      bottom: undefined,
      side: undefined,
      translateY: undefined,
    };

    const [heigthLocation, sideLocation] = arrowLocation.split('-');

    if (sideLocation === 'side') location.side = '15%';
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
      #prev-button,
      #next-button {
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
