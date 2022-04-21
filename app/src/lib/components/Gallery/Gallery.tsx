import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  padding?: string;
  children: React.ReactNode;
  col?: number;
  gap?: 'wider' | 'wide' | 'normal' | 'narrow' | 'narrower';
  theme?: 'mid-night' | 'blossom' | 'fruits' | 'bare-bare' | 'tropic-green' | 'mint-chocolate';
}

const Gallery = ({ children, col, gap, theme, padding }: Props) => {
  return (
    <Wrap padding={padding}>
      <Wrapper theme={theme} col={col} gap={gap}>
        <ul>{children}</ul>
      </Wrapper>
    </Wrap>
  );
};

export default Gallery;

Gallery.defaultProps = {
  col: 3,
  gap: 'normal',
  theme: 'mid-night',
};

const Wrap = styled.div<{
  padding?: string;
}>`
  padding: ${({ padding }) => padding ?? '2em 10em'};
`;

const Wrapper = styled.div<{
  theme?: 'mid-night' | 'blossom' | 'fruits' | 'bare-bare' | 'tropic-green' | 'mint-chocolate';
  gap?: 'wider' | 'wide' | 'normal' | 'narrow' | 'narrower';
  col?: number;
}>`
  position: relative;
  display: flex;
  justify-content: center;
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
              background-color: #333333a8;
              color: #e7e7e7;
            `;
          case 'blossom':
            return css`
              background-color: #b156676e;
              color: #fff;
            `;
          case 'fruits':
            return css`
              background-color: #e99f2982;
              color: #fff;
            `;
          case 'bare-bare':
            return css`
              background: linear-gradient(#c2e3f4b1, 70%, #efb630b1);
              color: #030305;
            `;
          case 'mint-chocolate':
            return css`
              background-color: #90c8b64a;
              color: #530f0f;
            `;
        }
      }}
    }
  }
`;
