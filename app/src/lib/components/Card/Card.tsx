import React from 'react';
import styled, { css } from 'styled-components';
import { MAIN } from '../../common/theme';

interface Props {
  children?: React.ReactChild;
  width?: string;
  height?: string;
  shape?: 'square' | 'round-square' | 'round';
  hover?: 'up' | 'down' | 'zoom';
  redirectURL?: string;
}

const Card = ({ children, width, height, shape, hover, redirectURL }: Props) => {
  return (
    <CardWrap width={width} height={height} shape={shape} hover={hover}>
      <a href={redirectURL}>
        <div className="child">{children}</div>
      </a>
    </CardWrap>
  );
};

export default Card;

const CardWrap = styled.div<{
  width?: string;
  height?: string;
  shape?: 'square' | 'round-square' | 'round';
  hover?: 'up' | 'down' | 'zoom';
}>`
  width: ${({ width }) => width ?? '10em'};
  height: ${({ height }) => height ?? '10em'};
  box-shadow: 0px 2px 7px 1px rgba(0, 0, 0, 0.14);
  padding: 16px;
  transition: 0.4s;
  ${({ shape }) => {
    switch (shape) {
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
            transform: scale(105%);
          `;
      }
    }}
  }

  a {
    text-decoration-line: none;
    color: black;
    :hover {
      color: ${MAIN.MAIN_COLOR};
    }
  }

  .child {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
