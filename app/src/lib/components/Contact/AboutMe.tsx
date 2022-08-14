import styled from 'styled-components';
import { AboutMeInfoPropsType } from '../../common/types/ComponentTypes/Contact/AboutMeInfoType';

const Container = styled.div`
  margin: 10px 0px;
`;

const AboutMeEachContainer = styled.div`
  margin: 10px 0px 10px 10px;
`;

const AboutMeTitle = styled.div`
  font-weight: bold;
  color: #00000066;
`;

const AboutMe = ({ aboutMeInfos }: any) => {
  return (
    <Container>
      {aboutMeInfos.map(({ title, description }: AboutMeInfoPropsType, idx: number) => (
        <AboutMeEachContainer key={idx}>
          <AboutMeTitle>{title}</AboutMeTitle>
          <div>{description}</div>
        </AboutMeEachContainer>
      ))}
    </Container>
  );
};

export default AboutMe;
