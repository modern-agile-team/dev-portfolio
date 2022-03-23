import React from "react";
import styled from "styled-components";

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

const AboutMeDescription = styled.div``;

const AboutMe = ({ aboutMeInfos }) => {
  return (
    <Container>
      {aboutMeInfos.map(({ title, description }, idx) => (
        <AboutMeEachContainer key={idx}>
          <AboutMeTitle>{title}</AboutMeTitle>
          <AboutMeDescription>{description}</AboutMeDescription>
        </AboutMeEachContainer>
      ))}
    </Container>
  );
};

export default AboutMe;
