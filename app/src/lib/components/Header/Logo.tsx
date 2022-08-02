import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { LogoOptionType } from './Header';

type LogoProps = {
  logoOption: LogoOptionType;
};

const Container = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
`;

const LogoImgContainer = styled.a<{
  logoMargin: string;
}>`
  margin: ${({ logoMargin }) => logoMargin ?? '0px 16px 0px 16px'};
`;

const Title = styled.span<{
  titleColor: string;
  titleSize: string;
  titleWeight: string;
}>`
  color: ${({ titleColor }) => titleColor ?? 'black'};
  font-size: ${({ titleSize }) => titleSize ?? '24px'};
  font-weight: ${({ titleWeight }) => titleWeight ?? 800};
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Logo = ({ logoOption }: LogoProps): React.ReactElement => {
  const {
    redirectUrl = '/',
    logoImg = "",
    logoHidden = false,
    title = 'dev-portfolio',
    logoMargin = '0px 16px 0px 16px',
    logoWidth = '50px',
    logoHeight = '50px',
    titleColor = 'black',
    titleSize = '32px',
    titleWeight = '800',
  } = logoOption;

  return (
    <Container href={redirectUrl}>
      <LogoImgContainer logoMargin={logoMargin}>
        {logoHidden ? "" : logoImg.length > 0 ? <img src={logoImg} width={logoWidth} height={logoHeight} /> : <Icon icon="simple-icons:devdotto" color="#434521" fontSize="80px" />}
      </LogoImgContainer>
      <Title titleColor={titleColor} titleSize={titleSize} titleWeight={titleWeight}>
        {title}
      </Title>
    </Container>
  );
};

export default Logo;
