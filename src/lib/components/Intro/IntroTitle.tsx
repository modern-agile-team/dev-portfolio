import styled from 'styled-components';
import { IntroTitlePropsType } from '../../common/types/ComponentTypes/IntroType';

const IntroTitle = ({ title, shortIntro }: IntroTitlePropsType) => {
  return (
    <Wrap>
      <Title>{title}</Title>
      <ShortIntro>{shortIntro}</ShortIntro>
    </Wrap>
  );
};

export default IntroTitle;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.div`
  padding: 0px 5px;
  font-size: 35px;
  font-weight: 800;
`;

const ShortIntro = styled.div`
  padding: 10px 5px 20px 5px;
  font-size: 17.5px;
  font-weight: bold;
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
