import styled, { css } from 'styled-components';
import TechStackName from './TechStackName';
import {
  TechStackPropsType,
  TechStackStyledPropsType,
} from '../../../common/types/ComponentTypes/TechStack/TechStackType';
import { ProgressBar } from '../../ProgressBar';

const TechStack = ({ nameOption, progressBarOption, gap }: TechStackPropsType) => {
  return (
    <Wrapper gap={gap}>
      <TechStackName {...nameOption} />
      <ProgressBar {...progressBarOption} />
    </Wrapper>
  );
};

export default TechStack;

TechStack.defaultProps = {
  gap: 'normal',
};

const Wrapper = styled.div<TechStackStyledPropsType>`
  ${({ gap }) => {
    switch (gap) {
      case 'narrower':
        return css`
          margin: 0px 30px;
        `;
      case 'narrow':
        return css`
          margin: 10px 30px;
        `;
      case 'normal':
        return css`
          margin: 20px 30px;
        `;
      case 'wide':
        return css`
          margin: 30px 30px;
        `;
      case 'wider':
        return css`
          margin: 40px 30px;
        `;
    }
  }}
`;
