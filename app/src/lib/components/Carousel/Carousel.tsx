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
}

const Carousel = React.forwardRef(
  ({
    children,
    transition = 1000,
    autoplaySpeed = 3000,
    slideToShow = 1,
    isArrowShow = true,
    isAutoplay = false,
  }: Props) => {
    const [showIndex, setShowIndex] = useState<number>(0);

    const childrenLen = useMemo(() => React.Children.toArray(children).length, [children]);

    const showPrev = () => {
      if (showIndex === 0) return setShowIndex(() => Math.floor((childrenLen - 1) / slideToShow));
      setShowIndex((prev) => prev - 1);
    };

    const showNext = () => {
      if (showIndex === Math.floor((childrenLen - 1) / slideToShow)) return setShowIndex(() => 0);
      setShowIndex((prev) => prev + 1);
    };

    isAutoplay && useInterval(showNext, autoplaySpeed, [showIndex]);

    return (
      <Wrapper len={childrenLen} transition={transition} showIndex={showIndex}>
        {isArrowShow && <FaArrowCircleLeft id="prev-button" onClick={showPrev} />}
        <div className="carousel-wrapper">
          <div className="carousel-container">
            {React.Children.map(children, (child) => {
              return (
                <Container len={childrenLen} slideToShow={slideToShow} key={child?.toString()}>
                  {child}
                </Container>
              );
            })}
          </div>
        </div>
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
};

const Wrapper = styled.div<{
  len: number;
  transition: number;
  showIndex: number;
}>`
  overflow: hidden;
  position: relative;
  #prev-button,
  #next-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;
    cursor: pointer;
  }
  #next-button {
    right: 0;
  }
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

const Container = styled.div<{
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
