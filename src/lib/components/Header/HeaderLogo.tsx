import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import {
  HeaderLogoPropsType,
  HeaderLogoImgStyledPropsType,
  HeaderLogoTitleStyledPropsType,
} from '../../common/types/ComponentTypes/Header/HeaderLogoType';
import { MAIN } from '../../common/theme';

const HeaderLogo = ({
  redirectUrl,
  logoImg = '',
  logoHidden,
  title,
  logoMargin,
  logoWidth,
  logoHeight,
  titleColor,
  titleSize,
  titleWeight,
}: HeaderLogoPropsType): React.ReactElement => {
  return (
    <Container href={redirectUrl}>
      <HeaderLogoImgContainer logoMargin={logoMargin}>
        {logoHidden ? (
          ''
        ) : logoImg.length > 0 ? (
          <img src={logoImg} width={logoWidth} height={logoHeight} />
        ) : (
          <Icon icon="simple-icons:devdotto" color={MAIN.MAIN_COLOR} fontSize={logoWidth} />
        )}
      </HeaderLogoImgContainer>
      <Title titleColor={titleColor} titleSize={titleSize} titleWeight={titleWeight}>
        {title}
      </Title>
    </Container>
  );
};

export default HeaderLogo;

HeaderLogo.defaultProps = {
  redirectUrl: '/',
  logoImg: '',
  logoHidden: false,
  title: 'dev-portfolio',
  logoMargin: '0px 16px',
  logoWidth: '50px',
  logoHeight: '50px',
  titleColor: 'black',
  titleSize: '24px',
  titleWeight: '800',
};

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
