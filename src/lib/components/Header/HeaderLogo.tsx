import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import {
  HeaderLogoPropsType,
  HeaderLogoImgStyledPropsType,
  HeaderLogoTitleStyledPropsType,
} from '../../common/types/ComponentTypes/Header/HeaderLogoType';

const HeaderLogo = ({
  redirectUrl = '/',
  logoImg = '',
  logoHidden = false,
  title = 'dev-portfolio',
  logoMargin = '0px 16px 0px 16px',
  logoWidth = '50px',
  logoHeight = '50px',
  titleColor = 'black',
  titleSize = '24px',
  titleWeight = '800',
}: HeaderLogoPropsType): React.ReactElement => {
  return (
    <Container href={redirectUrl}>
      <HeaderLogoImgContainer logoMargin={logoMargin}>
        {logoHidden ? (
          ''
        ) : logoImg.length > 0 ? (
          <img src={logoImg} width={logoWidth} height={logoHeight} />
        ) : (
          <Icon icon="simple-icons:devdotto" color="#434521" fontSize={logoWidth} />
        )}
      </HeaderLogoImgContainer>
      <Title titleColor={titleColor} titleSize={titleSize} titleWeight={titleWeight}>
        {title}
      </Title>
    </Container>
  );
};

export default HeaderLogo;

const Container = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
`;

const HeaderLogoImgContainer = styled.a<HeaderLogoImgStyledPropsType>`
  margin: ${({ logoMargin }) => logoMargin ?? '0px 16px 0px 16px'};
`;

const Title = styled.span<HeaderLogoTitleStyledPropsType>`
  color: ${({ titleColor }) => titleColor ?? 'black'};
  font-size: ${({ titleSize }) => titleSize ?? '24px'};
  font-weight: ${({ titleWeight }) => titleWeight ?? 800};
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
