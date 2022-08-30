import styled, { keyframes } from 'styled-components';
import {
  ProgressBarPropsType,
  ProgressBarCompleteStyledPropsType,
  ProgreeBarColorType,
  ProgressBarContainerStyledPropsType,
} from '../../../common/types/ComponentTypes/TechStack/ProgressBarType';

const ProgressBar = ({ rate, isHiddenRateText, colorFrom, colorTo, width, height, border }: ProgressBarPropsType) => {
  return (
    <ProgressBarContainer width={width} height={height} border={border}>
      <ProgressBarComplete progressColor={{ from: colorFrom, to: colorTo }} style={{ width: rate }}>
        <ProgressBarLiquid progressColor={{ from: colorFrom, to: colorTo }} />
      </ProgressBarComplete>
      <ProgressBarInnerText>{isHiddenRateText && rate}</ProgressBarInnerText>
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
  border: '1px solid #fff',
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

const r = keyframes`
  from { 
    transform: rotate(0deg); 
  }
  from { 
    transform: rotate(360deg); 
  }
`;

const ProgressBarContainer = styled.div<ProgressBarContainerStyledPropsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: ${({ border }) => border};
  border-radius: 10px;
  overflow: hidden;
  background: whitesmoke;
`;

const ProgressBarComplete = styled.div<ProgressBarCompleteStyledPropsType>`
  position: absolute;
  left: 0;
  top: 0px;
  height: 100%;
  background-color: #5225bd;
  border-radius: 10px;
  animation: ${({ progressColor }) => g(progressColor)} 2500ms infinite ease-in-out;
  z-index: 2;
`;

const ProgressBarLiquid = styled.div<ProgressBarCompleteStyledPropsType>`
  z-index: 1;
  width: 70px;
  height: 70px;
  animation: ${({ progressColor }) => g(progressColor)} 2500ms infinite ease-in-out,
    ${r} 3000ms infinite cubic-bezier(0.5, 0.5, 0.5, 0.5);
  position: absolute;
  right: -5px;
  top: -10px;
  background-color: #5225bd;
  border-radius: 40%;
`;

const ProgressBarInnerText = styled.span`
  z-index: 2;
`;
