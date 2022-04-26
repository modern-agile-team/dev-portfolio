import { FaArrowCircleRight, FaArrowCircleLeft } from '@dependencies/react-icons/fa';
import React, { useMemo, useState } from 'react';
import styled, { css } from 'styled-components';
import { useInterval } from './hooks';

interface Props {
  children: React.ReactNode;
  transition?: number;
  autoplaySpeed?: number;
  slideToShow?: number;
  isArrowShow?: boolean;
  isAutoplay?: boolean;
  arrowLocation?: 'bottom' | 'side';
}

const Carousel = React.forwardRef(
  (
    {
      children,
      transition = 1000,
      autoplaySpeed = 3000,
      slideToShow = 1,
      isArrowShow = true,
      isAutoplay = false,
      arrowLocation = 'side',
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
      <Wrapper arrowLocation={arrowLocation}>
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
  arrowLocation: 'side',
};

const Wrapper = styled.div<{
  arrowLocation: 'bottom' | 'side';
}>`
  position: relative;
  #prev-button,
  #next-button {
    position: absolute;
    z-index: 3;
    cursor: pointer;
  }

  ${({ arrowLocation }) => {
    switch (arrowLocation) {
      case 'side':
        return css`
          #prev-button,
          #next-button {
            top: 50%;
            transform: translateY(-50%);
          }
          #next-button {
            right: 0;
          }
        `;
      case 'bottom':
        return css`
          #prev-button,
          #next-button {
            top: 100%;
          }
          #next-button {
            left: 50%;
          }
          #prev-button {
            right: 50%;
          }
        `;
    }
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
