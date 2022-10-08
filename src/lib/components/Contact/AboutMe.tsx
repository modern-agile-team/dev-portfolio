import styled from 'styled-components';
import { AboutMeInfoPropsType } from '../../common/types/ComponentTypes/Contact/AboutMeInfoType';
import { uuidv4 } from '../../common/utils';

const AboutMe = ({ aboutMeInfos }: any) => {
  return (
    <Container>
      {aboutMeInfos.map(({ title, titleColor, description, descriptionColor }: AboutMeInfoPropsType, idx: number) => (
        <AboutMeEachContainer key={uuidv4()}>
          <AboutMeTitle titleColor={titleColor}>{title}</AboutMeTitle>
          <AboutMeDescription descriptionColor={descriptionColor}>{description}</AboutMeDescription>
        </AboutMeEachContainer>
      ))}
    </Container>
  );
};

export default AboutMe;

const Container = styled.div`
  margin: 10px 0px;
`;

const AboutMeEachContainer = styled.div`
  margin: 10px 0px 10px 10px;
`;

const AboutMeTitle = styled.div<AboutMeInfoPropsType>`
  font-weight: bold;
  color: ${({ titleColor }) => titleColor};
`;

const AboutMeDescription = styled.div<AboutMeInfoPropsType>`
  color: ${({ descriptionColor }) => descriptionColor};
`;
