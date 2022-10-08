import styled, { css, keyframes } from 'styled-components';
import { MAIN } from '../../common/theme';
import {
  ProgressBarPropsType,
  ProgressBarCompleteStyledPropsType,
  ProgreeBarColorType,
} from '../../common/types/ComponentTypes/TechStack/ProgressBarType';

/**
 * This is ProgressBar component that shows progress rate.
 *
 * @props rateText: How well you handle the skill. (default: '100%') (unit: %)
 * @props rateTextColor: rateText color style. (default: 'black')
 * @props isHiddenRateText: Whether show text of rate. (default: false)
 * @props backgroundColor: ProgressBar's background color style. (default: 'whitesmoke')
 * @props colorFrom: Start color of blinking animation of progressbar. (default: 'white')
 * @props colorTo: End color of blinking animation of progressbar. (default: 'red')
 * @props width: Progressbar css width. (default: '100%')
 * @props height: Progressbar css height. (default: '40px')
 * @props animationType: Progressbar animation. <'wave' | 'fill-up' | 'fill-up-wave' | 'none'> (default: 'wave')
 * @props isBlinking: Progressbar blinking state. (default: false)
 */
const ProgressBar = ({
  rateText,
  rateTextColor,
  isHiddenRateText,
  backgroundColor,
  colorFrom,
  colorTo,
  width,
  height,
  animationType,
  isBlinking,
}: ProgressBarPropsType) => {
  return (
    <ProgressBarContainer backgroundColor={backgroundColor} width={width} height={height}>
      <ProgressBarComplete
        animationType={animationType}
        progressColor={{ from: colorFrom, to: colorTo }}
        rateText={rateText || '0'}
        isBlinking={isBlinking}
      >
        {animationType?.includes('wave') && (
          <ProgressBarLiquid progressColor={{ from: colorFrom, to: colorTo }} isBlinking={isBlinking} />
        )}
      </ProgressBarComplete>
      <ProgressBarInnerText rateTextColor={rateTextColor} isHiddenRateText={isHiddenRateText}>
        {rateText}
      </ProgressBarInnerText>
    </ProgressBarContainer>
  );
};

export default ProgressBar;

ProgressBar.defaultProps = {
  rateText: '100%',
  rateTextColor: 'black',
  isHiddenRateText: false,
  backgroundColor: 'whitesmoke',
  colorFrom: 'white',
  colorTo: MAIN.MAIN_COLOR,
  width: '100%',
  height: '40px',
  animationType: 'wave',
  isBlinking: false,
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

const fillUp = (width: string | undefined) => keyframes`
    from {
        transform: translateX(-100%);
    }
    to {
       transform: translateX(calc(-100% + ${width}));
    }
`;

const ProgressBarContainer = styled.div<ProgressBarPropsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 10px;
  overflow: hidden;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const ProgressBarComplete = styled.div<ProgressBarPropsType & ProgressBarCompleteStyledPropsType>`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0px;
  height: 100%;
  border-radius: 10px;
  ${({ progressColor, isBlinking, rateText, animationType }) => {
    return css`
      background-color: ${progressColor.to || '#5225bd'};
      animation: ${isBlinking && g(progressColor)} 2500ms infinite ease-in-out,
        ${animationType?.includes('fill-up') && fillUp(rateText)} 1.5s ease-in-out;
      transform: translateX(calc(-100% + ${rateText}));
    `;
  }}
  z-index: 2;
`;

const ProgressBarLiquid = styled.div<ProgressBarPropsType & ProgressBarCompleteStyledPropsType>`
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

const ProgressBarInnerText = styled.span<ProgressBarPropsType>`
  display: ${({ isHiddenRateText }) => (isHiddenRateText ? 'none' : 'inline')};
  color: ${({ rateTextColor }) => rateTextColor};
  z-index: 2;
`;
