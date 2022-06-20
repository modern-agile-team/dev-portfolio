import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../dependencies/@iconify/react/dist/iconify';
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
  titleWeight: number;
}>`
  color: ${({ titleColor }) => titleColor ?? 'black'};
  font-size: ${({ titleSize }) => titleSize ?? '24px'};
  font-weight: ${({ titleWeight }) => titleWeight ?? 800};
`;

const Logo = ({ logoOption }: LogoProps): React.ReactElement => {
  const { uriToMove, logoImg, title, styles } = logoOption;
  const { logoMargin, titleColor, titleSize, titleWeight } = styles;
  return (
    <Container href={uriToMove}>
      <LogoImgContainer logoMargin={logoMargin}>
        {logoImg ? <img src={logoImg} /> : <Icon icon="simple-icons:devdotto" color="#434521" fontSize="80px" />}
      </LogoImgContainer>
      <Title titleColor={titleColor} titleSize={titleSize} titleWeight={titleWeight}>
        {title}
      </Title>
    </Container>
  );
};

export default Logo;
