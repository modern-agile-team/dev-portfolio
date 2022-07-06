import styled from 'styled-components';
import ContactForm from './ContactForm';
import AboutMe from './AboutMe';

const Contact = ({ contactOption = contactOptionDefault }) => {
  const { aboutMeInfos } = contactOption;
  return (
    <Container id="Contact">
      <ContactForm contactOption={contactOption} />
      <AboutMe aboutMeInfos={aboutMeInfos} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: whitesmoke;
  padding: 10px 10px;
`;

const contactOptionDefault = {
  title: 'Hello, my name is DEV_PORTFOLIO',
  subTitle: `If you're interested in me, please press the button below :D`,
  buttonText: 'Want to work with me?',
  email: 'abc@dev-portfolio.com',
  channels: [
    {
      name: 'github',
      uriToMove: 'https://',
      color: '#181717BB',
      size: '18px',
      margin: '0px 12px 0px 0px',
    },
    {
      name: 'naver',
      uriToMove: 'https://',
      color: '#47A141BB',
      size: '18px',
      margin: '0px 12px 0px 0px',
    },
    {
      name: 'facebook',
      uriToMove: 'https://',
      color: '#1877F2BB',
      size: '18px',
      margin: '0px 12px 0px 0px',
    },
    {
      name: 'youtube',
      uriToMove: 'https://',
      color: '#FF0000BB',
      size: '18px',
      margin: '0px 12px 0px 0px',
    },
  ],
  aboutMeInfos: [
    {
      title: 'Where I live',
      description: 'Gangdong-gu, Seoul, Republic of Korea',
    },
    {
      title: 'Give me a call',
      description: 'T. +82 (0)10 1234 5678',
    },
    {
      title: 'Or, why don’t you email me?',
      description: 'dev-portfolio@gmail.com',
    },
  ],
};

export default Contact;
