import { FaArrowCircleRight, FaArrowCircleLeft } from '@dependencies/react-icons/fa';
import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { useInterval } from './hooks';

interface Props {
  children: React.ReactNode;
  transistion?: number;
  autoplaySpeed?: number;
}

const Carousel = ({ children, transistion = 1000, autoplaySpeed = 3000 }: Props) => {
  const [showIndex, setShowIndex] = useState<number>(0);

  const childrenLen = useMemo(() => React.Children.toArray(children).length, [children]);

  const showPrev = () => {
    if (showIndex === 0) return setShowIndex(() => childrenLen - 1);
    setShowIndex((prev) => prev - 1);
  };

  const showNext = () => {
    if (showIndex === childrenLen - 1) return setShowIndex(() => 0);
    setShowIndex((prev) => prev + 1);
  };

  useInterval(showNext, autoplaySpeed);

  return (
    <Wrapper len={childrenLen} transistion={transistion}>
      <FaArrowCircleLeft id="prev-button" onClick={showPrev} />
      <div className="carousel-container" style={{ transform: `translate3d(${-showIndex * 100}vw, 0, 0)` }}>
        {React.Children.map(children, (child) => {
          return <Container key={child?.toString()}>{child}</Container>;
        })}
      </div>
      <FaArrowCircleRight id="next-button" onClick={showNext} />
    </Wrapper>
  );
};

export default Carousel;

Carousel.defaultProps = {
  transistion: 1000,
  autoplaySpeed: 3000,
};

const Wrapper = styled.div<{
  len: number;
  transistion: number;
}>`
  overflow: hidden;
  #prev-button,
  #next-button {
    z-index: 3;
    cursor: pointer;
  }

  .carousel-container {
    position: relative;
    transition: ${(props) => props.transistion / 1000}s;
    width: ${(props) => `calc(${props.len} * 100vw)`};
  }
`;

const Container = styled.div`
  float: left;
  width: 100vw;
`;
