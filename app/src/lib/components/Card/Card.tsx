import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  children?: React.ReactChild;
  width?: string;
  height?: string;
  radius?: 'square' | 'round-square' | 'round';
  hover?: 'up' | 'down' | 'zoom';
}

const Card = ({ children, width, height, radius, hover }: Props) => {
  return (
    <CardWrap width={width} height={height} radius={radius} hover={hover}>
      <div className="child">{children}</div>
    </CardWrap>
  );
};

export default Card;

const CardWrap = styled.div<{
  width?: string;
  height?: string;
  radius?: 'square' | 'round-square' | 'round';
  hover?: 'up' | 'down' | 'zoom';
}>`
  width: ${({ width }) => width ?? '20%'};
  height: ${({ height }) => height ?? '30%'};
  box-shadow: 0px 2px 7px 1px rgba(0, 0, 0, 0.14);
  padding: 16px;
  ${({ radius }) => {
    switch (radius) {
      case 'square':
        return css`
          border-radius: 0px;
        `;
      case 'round-square':
        return css`
          border-radius: 13px;
        `;
      case 'round':
        return css`
          border-radius: 50%;
        `;
    }
  }}
  &:hover {
    ${({ hover }) => {
      switch (hover) {
        case 'up':
          return css`
            transform: translateY(-5%);
          `;
        case 'down':
          return css`
            transform: translateY(5%);
          `;
        case 'zoom':
          return css`
            zoom: 1.05;
          `;
      }
    }}
  }
  .child {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
