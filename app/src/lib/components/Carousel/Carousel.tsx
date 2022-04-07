import { FaArrowCircleRight, FaArrowCircleLeft } from '@dependencies/react-icons/fa';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  children: React.ReactNode;
  transistion?: number;
}

const Carousel = ({ children, transistion = 2000 }: Props) => {
  const [showIndex, setShowIndex] = useState<number>(0);

  const showPrev = () => {
    const len = React.Children.toArray(children).length;
    if (showIndex === 0) setShowIndex(len - 1);
    else setShowIndex(showIndex - 1);
  };

  const showNext = () => {
    const len = React.Children.toArray(children).length;
    if (showIndex === len - 1) setShowIndex(0);
    else setShowIndex(showIndex + 1);
  };

  return (
    <Wrapper>
      <FaArrowCircleLeft id="prev-button" onClick={showPrev} />
      {React.Children.map(children, (child, idx) => {
        return (
          <Container transistion={transistion} currentIndex={idx} showIndex={showIndex}>
            {child}
          </Container>
        );
      })}
      <FaArrowCircleRight id="next-button" onClick={showNext} />
    </Wrapper>
  );
};

export default Carousel;

const Wrapper = styled.div`
  min-height: 500px;
  display: flex;
  position: relative;
  justify-content: space-between;
  background-color: lightcoral;
  overflow-x: hidden;
  #prev-button,
  #next-button {
    position: absolute;
    font-size: 25px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  #next-button {
    right: 0;
  }
`;

const Container = styled.div<{
  currentIndex: number;
  showIndex: number;
  transistion: number;
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  transition: ${(props) => props.transistion / 1000}s;
  ${({ currentIndex, showIndex }) => {
    const width = document.documentElement.clientWidth;
    // this present current component
    if (currentIndex === showIndex) {
      return css`
        transform: translate(-50%, -50%);
      `;
    } else if (showIndex > currentIndex) {
      // this present previous component
      return css`
        transform: translate(-${width * 2}%, -50%);
      `;
    } else {
      // this present next component
      return css`
        transform: translate(${width * 2}%, -50%);
      `;
    }
  }}
`;
