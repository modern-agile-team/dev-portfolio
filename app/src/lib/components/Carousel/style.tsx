import styled, { css } from 'styled-components';

type ArrowLocationType = {
  top?: string;
  bottom?: string;
  side?: string;
  translateY?: string;
};

export const Wrapper = styled.div<{
  arrowLocation: 'bottom' | 'mid-side' | 'top' | 'bottom-side' | 'top-side';
  width?: string;
}>`
  width: ${(props) => props.width || '100%'};
  position: relative;
  margin: 0 auto;
  ${({ arrowLocation }) => {
    const location: ArrowLocationType = {
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
}>`
  overflow: hidden;
  .carousel-wrapper {
    width: 100%;
  }
  .carousel-container {
    display: flex;
    position: relative;
    ${({ transition, len, showIndex }) => {
      return css`
        transition: ${transition / 1000}s;
        width: calc(${len} * 100%);
        transform: translateX(${(-showIndex * 100) / len}%);
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
  playerLocation: 'bottom-mid' | 'bottom-left' | 'bottom-right' | 'top-mid' | 'top-left' | 'top-right';
}>`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 15px 0;
  position: absolute;
  svg {
    margin: 0 10px;
    cursor: pointer;
  }
  ${({ playerLocation }) => {
    const [heigthLocation, sideLocation] = playerLocation.split('-');
    const location: { top?: string; bottom?: string; left?: string; right?: string; translateX?: string } = {
      top: undefined,
      bottom: undefined,
      left: undefined,
      right: undefined,
      translateX: undefined,
    };
    if (heigthLocation === 'top') {
      location.bottom = '100%';
    } else {
      location.top = '100%';
    }
    if (sideLocation === 'mid') {
      location.left = '50%';
      location.translateX = '-50%';
    } else if (sideLocation === 'left') {
      location.left = '0';
    } else {
      location.right = '0';
    }
    const { top, bottom, left, right, translateX } = location;
    return css`
      top: ${top};
      bottom: ${bottom};
      left: ${left};
      right: ${right};
      transform: translateX(${translateX});
    `;
  }}
`;
