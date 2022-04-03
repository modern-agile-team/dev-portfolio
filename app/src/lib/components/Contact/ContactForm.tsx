import React from 'react';
import styled from 'styled-components';
import Channels from '../Channels/Channels';
import { ContactOptionTypes } from './Contact';

interface ContactOptionProps {
  contactOption: ContactOptionTypes;
}

const ContactForm = ({ contactOption }: ContactOptionProps) => {
  const { title, subTitle, buttonText, channels } = contactOption;

  return (
    <Container>
      <Channels channels={channels} />
      <TitleContainer>
        <Title>{title}</Title>
        <span>{subTitle}</span>
      </TitleContainer>
      <SendEmailButton>{buttonText}</SendEmailButton>
    </Container>
  );
};

export default ContactForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 40%;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

const SendEmailButton = styled.button`
  padding: 10px 10px;
  margin: 10px 0px 0px 0px;
  background-color: white;
  border-radius: 4px;
  border: 0.5px solid #00000033;
  cursor: pointer;
  &active {
    background-color: red;
  }
`;
