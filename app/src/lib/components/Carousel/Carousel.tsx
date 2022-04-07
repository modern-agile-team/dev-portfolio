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
      <button type="button" onClick={showPrev}>
        prev
      </button>
      {React.Children.map(children, (child, idx) => {
        return (
          <Container transistion={transistion} currentIndex={idx} showIndex={showIndex}>
            {child}
          </Container>
        );
      })}
      <button type="button" onClick={showNext}>
        next
      </button>
    </Wrapper>
  );
};

export default Carousel;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  background-color: lightcoral;
  overflow-x: hidden;
`;

const Container = styled.div<{
  currentIndex: number;
  showIndex: number;
  transistion: number;
}>`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: ${(props) => props.transistion / 1000}s;
  ${({ currentIndex, showIndex }) => {
    // this present current component
    if (currentIndex === showIndex) {
      return css`
        left: 50%;
      `;
    } else if (showIndex > currentIndex) {
      // this present previous component
      const difference = currentIndex - showIndex * 50;
      return css`
        left: ${difference}%;
      `;
    } else {
      // this present next component
      const difference = showIndex - currentIndex * 50;
      return css`
        right: ${difference}%;
      `;
    }
  }}
`;
