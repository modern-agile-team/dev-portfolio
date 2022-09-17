import styled, { css } from 'styled-components';
import {
  ArrowLocationType,
  PlayerLocationType,
  ArrowLocationStyledType,
} from '../../common/types/ComponentTypes/CarouselType';

export const Wrapper = styled.div<{
  arrowLocation: ArrowLocationType;
  width?: string;
}>`
  width: ${(props) => props.width || '100%'};
  position: relative;
  margin: 0 auto;
  ${({ arrowLocation }) => {
    const location: ArrowLocationStyledType = {
      top: undefined,
      bottom: undefined,
      side: undefined,
      translateY: undefined,
    };

    const [heigthLocation, sideLocation] = arrowLocation.split('-');

    if (sideLocation === 'side') location.side = '5%';
    else location.side = '50%';

    switch (heigthLocation) {
      case 'top':
        location.bottom = '100%';
        break;
      case 'bottom':
        location.top = '100%';
        break;
      case 'mid':
        location.top = '50%';
        location.translateY = '-50%';
        break;
    }

    const { top, bottom, side, translateY } = location;

    return css`
      .arrow-icon-wrapper {
        position: absolute;
        top: ${top};
        bottom: ${bottom};
        transform: translateY(${translateY});
        z-index: 3;
        transition: 0.3s scale;
        &:hover {
          scale: 1.1;
        }
        &:active {
          scale: 1;
        }
        cursor: pointer;
      }
      #next-button {
        ${sideLocation === 'side' ? 'right' : 'left'}: ${side};
      }
      #prev-button {
        ${sideLocation === 'side' ? 'left' : 'right'}: ${side};
      }
    `;
  }}
  .icon-wrapper {
    font-size: 25px;
  }
`;

export const Container = styled.div<{
  len: number;
  transition: number;
  showIndex: number;
  slideToShow: number;
}>`
  overflow: hidden;
  .carousel-wrapper {
    width: 100%;
  }
  .carousel-container {
    display: flex;
    position: relative;
    ${({ transition, len, showIndex, slideToShow }) => {
      return css`
        transition: ${transition / 1000}s;
        width: calc(${len} * 100%);
        transform: translateX(${(-showIndex * 100) / len / slideToShow}%);
      `;
    }}
  }
`;

export const ChildrenWrapper = styled.div<{
  slideToShow: number;
  len: number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  ${({ len, slideToShow }) => {
    if (slideToShow === 1) {
      return css`
        width: 100%;
      `;
    } else {
      return css`
        width: calc(100% / ${len * slideToShow});
      `;
    }
  }}
`;

export const Player = styled.div<{
  playerLocation: PlayerLocationType;
}>`
  display: flex;
  svg {
    margin: 0 10px;
    cursor: pointer;
  }
  ${({ playerLocation }) => {
    const sideLocation = playerLocation.split('-')[1];
    switch (sideLocation) {
      case 'right':
        return css`
          justify-content: flex-end;
        `;
      case 'left':
        return css`
          justify-content: flex-start;
        `;
      default:
        return css`
          justify-content: center;
        `;
    }
  }}
  .icon-wrapper {
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(1);
    }
    transition: 0.3s;
  }
`;
