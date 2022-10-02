import styled from 'styled-components';
import { IntroPropsType } from '../../common/types/ComponentTypes/IntroType';

const IntroForm = ({ description, descriptionColor, descriptionBackgroundColor }: IntroPropsType) => {
  return (
    <Wrap>
      <IntroBox descriptionColor={descriptionColor} descriptionBackgroundColor={descriptionBackgroundColor}>
        {description}
      </IntroBox>
    </Wrap>
  );
};

export default IntroForm;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

const IntroBox = styled.div<IntroPropsType>`
  width: 95vw;
  min-height: 10em;
  padding: 50px;
  color: ${({ descriptionColor }) => descriptionColor};
  background-color: ${({ descriptionBackgroundColor }) => descriptionBackgroundColor};
  border-radius: 10px;
  display: grid;
  align-items: center;
  box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.1);
`;
