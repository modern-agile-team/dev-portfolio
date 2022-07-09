import React from 'react';
import styled from 'styled-components';
import Channels from '../Channels/Channels';
import { ContactOptionTypes } from '../../../../src/lib/common/types/contact';

interface ContactOptionProps {
  contactOption: ContactOptionTypes;
}

const ContactForm = ({ contactOption }: ContactOptionProps) => {
  const { title, subTitle, buttonText, channels, email } = contactOption;

  return (
    <Container>
      <Channels channels={channels} />
      <TitleContainer>
        <Title>{title}</Title>
        <span>{subTitle}</span>
      </TitleContainer>
      <SendEmailButton href={`mailto:${email}`}>{buttonText?.length ? buttonText : email}</SendEmailButton>
    </Container>
  );
};

export default ContactForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 40%;
  @media screen and (max-width: 500px) {
    max-width: 100%;
    padding: 10px;
    gap: 10px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

const SendEmailButton = styled.a`
  color: black;
  padding: 10px 10px;
  text-decoration: none;
  text-align: center;
  border-radius: 4px;
  border: 0.5px solid #00000033;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    transition: 1ms;
  }

  &:active {
    transform: scale(1);
    transition: 1ms;
  }
`;
