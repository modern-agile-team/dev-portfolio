import styled, { css } from 'styled-components';
import { MAIN } from '../../common/theme';
import { CardPropsType, CardStyledPropsType } from '../../common/types/ComponentTypes/CardType';

/**
 *
 * @props width: Card width	(default: 10em)
 * @props height: Card height	(default: 10em)
 * @props redirectURL: URL to redirect (default: /)
 * @props shape: You can decorate shape of Card a variety of theme such as 'square', 'round-square', 'round'.	(default: square)
 * @props hover: You can make an effect on Card a variety of theme such as 'up', 'down', 'zoom'.	(default: none)
 */
const Card = ({ children, width, height, shape, hover, redirectURL }: CardPropsType) => {
  return (
    <CardWrap width={width} height={height} shape={shape} hover={hover}>
      <a href={redirectURL}>
        <div className="child">{children}</div>
      </a>
    </CardWrap>
  );
};

export default Card;

const CardWrap = styled.div<CardStyledPropsType>`
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
