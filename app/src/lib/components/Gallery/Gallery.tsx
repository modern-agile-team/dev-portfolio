import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  children: React.ReactNode;
  col?: number;
  gap?: 'wider' | 'wide' | 'normal' | 'narrow' | 'narrower';
  theme?: 'mid-night' | 'blossom' | 'fruits' | 'bare-bare' | 'tropic-green' | 'poppy';
}

const Gallery = ({ children, col, gap, theme }: Props) => {
  return (
    <Wrapper theme={theme} col={col} gap={gap}>
      <ul>{children}</ul>
    </Wrapper>
  );
};

export default Gallery;

Gallery.defaultProps = {
  col: 3,
  gap: 'normal',
  theme: 'poppy',
};

const Wrapper = styled.div<{
  theme?: 'mid-night' | 'blossom' | 'fruits' | 'bare-bare' | 'tropic-green' | 'poppy';
  gap?: 'wider' | 'wide' | 'normal' | 'narrow' | 'narrower';
  col?: number;
}>`
  position: relative;
  display: flex;
  justify-content: center;
  width: 70vw;
  margin: 0 auto;
  border: 1px solid;
  outline: 0px;
  padding: 16px;
  border-radius: 6px;
  ul {
    display: grid;
    grid-template-columns: repeat(${(props) => props.col}, 1fr);
    padding: 0;
    margin: 0;
    ${({ gap }) => {
      switch (gap) {
        case 'narrower':
          return css`
            gap: 10px;
          `;
        case 'narrow':
          return css`
            gap: 15px;
          `;
        case 'normal':
          return css`
            gap: 20px;
          `;
        case 'wide':
          return css`
            gap: 25px;
          `;
        case 'wider':
          return css`
            gap: 30px;
          `;
      }
    }}
  }
  .gallery-item {
    .hover {
      ${({ theme }) => {
        switch (theme) {
          case 'mid-night':
            return css`
              background-color: #0c1631b9;
              color: #fff;
            `;
          case 'blossom':
            return css`
              background-color: #ffa1b2b8;
              color: #fff;
            `;
          case 'fruits':
            return css`
              background-color: #fbbd5ac5;
              color: #fa4529;
            `;
          case 'bare-bare':
            return css`
              background: linear-gradient(#c2e3f4b1, 70%, #efb630b1);
              color: #030305;
            `;
          case 'tropic-green':
            return css`
              background-color: #007f53a9;
              color: #f6f1ed;
            `;
          case 'poppy':
            return css`
              background-color: #90c8b6c0;
              color: #ff4848;
            `;
        }
      }}
    }
  }
`;
