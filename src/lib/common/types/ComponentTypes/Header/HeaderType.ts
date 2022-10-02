import { SideBarOptionPropsType } from './SideBar/SideBarType';
import { ChannelsPropsType } from '../ChannelType';
import { HeaderLogoPropsType } from './HeaderLogoType';

export interface HeaderPropsType extends HeaderStyledPropsType, ChannelsPropsType {
  /**
   * You can customize the attrs such as logo and title by using logoOption props.
   *
   * @props redirectUrl: URL you want to redirect when clicked (default: '/')
   * @props logoImg: Logo Image URL (default: DEV icon)
   * @props logoHidden: If this value is set to True, you can hide the logo image. (default: false)
   * @props logoMargin: Logo margin style (defualt: '0px 16px')
   * @props logoWidth: Logo width style (default: '50px)
   * @props logoHeight: Logo height style (default: '50px)
   * @props title: Main text that expresses your site (default: 'dev-portfolio')
   * @props titleColor: Title color style (default: 'black')
   * @props titleSize:  Title size style (default: '24px')
   * @props titleWeight: Title weight style (default: '800')
   */
  logoOption?: HeaderLogoPropsType;
  /**
   * You can customize the attrs such as title and icon, item in sidebar by using sideBarOption props.
   *
   * @props mainTitle: Main text that expresses your site (default: 'Wellcome to dev-portfolio')
   * @props mainTitleSize: mainTitle size style (default: '20px')
   * @props mainTitleColor: mainTitle color style (default: 'white')
   * @props mainTitleAlign: mainTitle align style (default: 'left')
   * @props mainTitleBorderColor: mainTitle border color style (default: 'white')
   * @props backgroundColor: Header's sidebar background color style (default: #434521)
   * @props iconName: Enter the name of the icon you searched on the following site. (default: 'ant-design:menu-fold-outlined') {@link https://icon-sets.iconify.design/}
   * @props iconSize: Icon size style (default: '30px')
   * @props iconColor: Icon color style (default: '#434521')
   * @props iconMargin: Icon margin style (default: '0px 12px')
   * @props itemTextColor: Item text color style (default: 'white')
   * @props itemTextAlign: Item text align style (default: 'left')
   * @props itemBackgroundColor: Item background color style (default: #434521)
   * @props itemHoverdBackgroundColor: Item background color style when hoverd (default: 'black')
   */
  sideBarOption?: SideBarOptionPropsType;
}

export interface HeaderStyledPropsType {
  /**
   * Header height style (default: '80px')
   */
  headerHeight?: string;
  /**
   * Header Width style (default: '100%')
   */
  headerWidth?: string;
  /**
   * Header background color style (default: 'white')
   */
  headerBackgroundColor?: string;
}
