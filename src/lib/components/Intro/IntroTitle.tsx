import styled from 'styled-components';
import { IntroPropsType } from '../../common/types/ComponentTypes/IntroType';

const IntroTitle = ({ title, titleColor, shortIntro, shortIntroColor }: IntroPropsType) => {
  return (
    <Wrap>
      <Title titleColor={titleColor}>{title}</Title>
      <ShortIntro shortIntroColor={shortIntroColor}>{shortIntro}</ShortIntro>
    </Wrap>
  );
};

export default IntroTitle;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.div<IntroPropsType>`
  padding: 0px 5px;
  font-size: 35px;
  font-weight: 800;
  color: ${({ titleColor }) => titleColor};
`;

const ShortIntro = styled.div<IntroPropsType>`
  padding: 10px 5px 20px 5px;
  font-size: 17.5px;
  font-weight: bold;
  color: ${({ shortIntroColor }) => shortIntroColor};
  animation: slide 2s;
  @keyframes slide {
    from {
      margin-left: 50%;
      width: 300%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }
`;
