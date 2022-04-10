import { FaArrowCircleRight, FaArrowCircleLeft } from '@dependencies/react-icons/fa';
import React, { useMemo, useRef, useState, useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  children: React.ReactNode;
  transistion?: number;
}

const Carousel = ({ children, transistion = 2000 }: Props) => {
  const [showIndex, setShowIndex] = useState<number>(0);

  const len = useMemo(() => React.Children.toArray(children).length, [children]);

  const ref = useRef<HTMLDivElement>(null);

  const showPrev = useCallback(() => {
    if (showIndex === 0) {
      setShowIndex(() => len);
      if (ref.current) {
        ref.current.style.transform = `translate(${-100 * len}vw)`;
      }
    } else {
      setShowIndex((prev) => prev - 1);
      if (ref.current) {
        ref.current.style.transform = `translate(${-100 * showIndex}vw)`;
      }
    }
  }, [len, showIndex]);

  const showNext = useCallback(() => {
    if (showIndex === len) {
      setShowIndex(0);
      if (ref.current) {
        ref.current.style.transform = `translate(${100 * len}vw)`;
      }
    } else {
      setShowIndex((prev) => prev + 1);
      if (ref.current) {
        ref.current.style.transform = `translate(${-100 * showIndex}vw)`;
      }
    }
  }, [len, showIndex]);

  return (
    <Wrapper len={len} transistion={transistion}>
      <FaArrowCircleLeft id="prev-button" onClick={showPrev} />
      <div ref={ref} className="carousel-container">
        {React.Children.map(children, (child, idx) => {
          return <Container key={idx}>{child}</Container>;
        })}
      </div>
      <FaArrowCircleRight id="next-button" onClick={showNext} />
    </Wrapper>
  );
};

export default Carousel;

const Wrapper = styled.div<{
  len: number;
  transistion: number;
}>`
  overflow: hidden;
  #prev-button,
  #next-button {
    cursor: pointer;
    z-index: 3;
  }
  #next-button {
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
