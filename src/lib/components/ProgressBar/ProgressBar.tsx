import styled, { css, keyframes } from 'styled-components';
import {
  ProgressBarPropsType,
  ProgressBarCompleteStyledPropsType,
  ProgreeBarColorType,
  ProgressBarContainerStyledPropsType,
} from '../../common/types/ComponentTypes/TechStack/ProgressBarType';

const ProgressBar = ({
  rate,
  isHiddenRateText,
  colorFrom,
  colorTo,
  width,
  height,
  animationType = 'wave',
  isBlinking = false,
}: ProgressBarPropsType) => {
  return (
    <ProgressBarContainer width={width} height={height}>
      <ProgressBarComplete progressColor={{ from: colorFrom, to: colorTo }} rate={rate || '0'} isBlinking={isBlinking}>
        {animationType === 'wave' && (
          <ProgressBarLiquid progressColor={{ from: colorFrom, to: colorTo }} isBlinking={isBlinking} />
        )}
      </ProgressBarComplete>
      {isHiddenRateText && <ProgressBarInnerText>{rate}</ProgressBarInnerText>}
    </ProgressBarContainer>
  );
};

export default ProgressBar;

ProgressBar.defaultProps = {
  rate: '100%',
  isHiddenRateText: true,
  colorFrom: 'red',
  colorTo: 'white',
  width: '100%',
  height: '40px',
};

const g = ({ from, to }: ProgreeBarColorType) => keyframes`
  0% { 
    background-color: ${to || '#434521'}; 
  }
  50% { 
    background-color: ${from || '#607e9e'}; 
  }
  100% { 
    background-color: ${to || '#434521'}; 
  }
`;

const wave = keyframes`
  from { 
    transform: rotate(0deg); 
  }
  from { 
    transform: rotate(360deg); 
  }
`;

const fillUp = (width: string) => keyframes`
    from {
        transform: translateX(-100%);
    }
    to {
       transform: translateX(calc(-100% + ${width}));
    }
`;

const ProgressBarContainer = styled.div<ProgressBarContainerStyledPropsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 10px;
  overflow: hidden;
  background: whitesmoke;
`;

const ProgressBarComplete = styled.div<ProgressBarCompleteStyledPropsType & { isBlinking?: boolean; rate: string }>`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0px;
  height: 100%;
  border-radius: 10px;
  ${({ progressColor, isBlinking, rate }) => {
    return css`
      background-color: ${progressColor.to};
      animation: ${isBlinking && g(progressColor)} 2500ms infinite ease-in-out, ${fillUp(rate)} 1.5s ease-in-out;
      transform: translateX(calc(-100% + ${rate}));
    `;
  }}
  z-index: 2;
`;

const ProgressBarLiquid = styled.div<ProgressBarCompleteStyledPropsType & { isBlinking?: boolean }>`
  z-index: 1;
  width: 70px;
  height: 70px;

  position: absolute;
  right: -5px;
  top: -10px;
  border-radius: 40%;
  ${({ progressColor, isBlinking }) => {
    return css`
      animation: ${isBlinking && g(progressColor)} 2500ms infinite ease-in-out,
        ${wave} 3000ms infinite cubic-bezier(0.5, 0.5, 0.5, 0.5);
      background-color: ${progressColor.to || '#5225bd'};
    `;
  }}
`;

const ProgressBarInnerText = styled.span`
  z-index: 2;
`;
