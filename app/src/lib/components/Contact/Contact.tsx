import React from 'react';
import styled from 'styled-components';

import ContactForm from './ContactForm';
import AboutMe from './AboutMe';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: whitesmoke;
  padding: 10px 10px;
`;

const contactOptionDefault = {
  title: '안녕하세요 풀스택 개발자 박우림입니다.',
  subTitle: '저에게 관심이 생기신 분들은 아래 버튼을 눌러주세요 :D',
  buttonText: 'Want to work with me?',
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

const Contact = ({ contactOption = contactOptionDefault }) => {
  const { aboutMeInfos } = contactOption;
  return (
    <Container id="Contact">
      <ContactForm contactOption={contactOption} />
      <AboutMe aboutMeInfos={aboutMeInfos} />
    </Container>
  );
};

export default Contact;
