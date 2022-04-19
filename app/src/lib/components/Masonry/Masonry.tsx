import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  children: React.ReactNode;
  padding?: string;
  column?: number;
  theme?: 'mid-night' | 'blossom' | 'fruits' | 'bare-bare' | 'tropic-green' | 'poppy';
}

const Masonry = ({ children, padding, column, theme }: Props) => {
  return (
    <Wrap theme={theme} padding={padding} column={column}>
      {children}
    </Wrap>
  );
};

export default Masonry;

Masonry.defaultProps = {
  theme: 'poppy',
};

const Wrap = styled.div<{
  padding?: string;
  column?: number;
  theme?: 'mid-night' | 'blossom' | 'fruits' | 'bare-bare' | 'tropic-green' | 'poppy';
}>`
  padding: ${({ padding }) => padding ?? '4em'};
  column-count: ${({ column }) => column ?? 4};
  column-gap: 1.5em;
  .masonry-item {
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
