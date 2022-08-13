export interface HeaderLogoPropsType extends HeaderLogoImgStyledPropsType, HeaderLogoTitleStyledPropsType {
  redirectUrl: string;
  title: string;
  logoImg?: string;
  logoHidden?: boolean;
  logoWidth?: string;
  logoHeight?: string;
}

export interface HeaderLogoImgStyledPropsType {
  logoMargin?: string;
}

export interface HeaderLogoTitleStyledPropsType {
  titleColor?: string;
  titleSize?: string;
  titleWeight?: string;
}
