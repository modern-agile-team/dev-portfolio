import styled from 'styled-components';
import { ContactPropsType } from '../../common/types/ComponentTypes/Contact/ContactType';
import Channels from '../Channels/Channels';

const ContactForm = ({
  title,
  titleColor,
  subTitle,
  subTitleColor,
  buttonText,
  buttonTextColor,
  buttonColor,
  buttonBorderColor,
  channels,
  email,
}: ContactPropsType) => {
  return (
    <Container>
      <Channels channels={channels} />
      <TitleContainer>
        <Title titleColor={titleColor}>{title}</Title>
        <SubTitle subTitleColor={subTitleColor}>{subTitle}</SubTitle>
      </TitleContainer>
      <SendEmailButton
        href={`mailto:${email}`}
        buttonTextColor={buttonTextColor}
        buttonColor={buttonColor}
        buttonBorderColor={buttonBorderColor}
      >
        {buttonText?.length ? buttonText : email}
      </SendEmailButton>
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

const Title = styled.div<ContactPropsType>`
  font-weight: bold;
  font-size: 18px;
  color: ${({ titleColor }) => titleColor};
`;

const SubTitle = styled.span<ContactPropsType>`
  color: ${({ subTitleColor }) => subTitleColor};
`;

const SendEmailButton = styled.a<ContactPropsType>`
  color: ${({ buttonTextColor }) => buttonTextColor};
  background-color: ${({ buttonColor }) => buttonColor};

  padding: 10px 10px;
  text-decoration: none;
  text-align: center;
  border-radius: 4px;
  border: 0.5px solid ${({ buttonBorderColor }) => buttonBorderColor};
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
