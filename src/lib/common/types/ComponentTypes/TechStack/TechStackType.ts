import { TechStackPropsGapType } from './TechStackListType';
import { TechStackNamePropsType } from './TechStackNameType';
import { ProgressBarPropsType } from './ProgressBarType';

export interface TechStackPropsType extends TechStackPropsGapType {
  /**
   * You can show off the skills by customizing the props such as the name, logoName, fontSize, logoSize etc.
   *
   * @props name: The main tech-name that will be shown to other users. (default: 'Tech-name that will be shown to other users')
   * @props fontSize: name text size style. (default: '16px')
   * @props nameTextColor: name text color style (defualt: 'black')
   * @props logoName: The actual name of the technology that you want to use as your logo. (default: 'javascript')
   * @props logoSize: logoName icon size style. (default: '24px')
   */
  nameOption: TechStackNamePropsType;
  /**
   * This is ProgressBar component that shows progress rate.
   *
   * @props rateText: How well you handle the skill. (default: '100%') (unit: %)
   * @props rateTextColor: rateText color style. (default: 'black')
   * @props isHiddenRateText: Whether show text of rate. (default: false)
   * @props backgroundColor: ProgressBar's background color style. (default: 'whitesmoke')
   * @props colorFrom: Start color of blinking animation of progressbar. (default: 'white')
   * @props colorTo: End color of blinking animation of progressbar. (default: 'red')
   * @props width: Progressbar css width. (default: '100%')
   * @props height: Progressbar css height. (default: '40px')
   * @props animationType: Progressbar animation. <'wave' | 'fill-up' | 'fill-up-wave' | 'none'> (default: 'wave')
   * @props isBlinking: Progressbar blinking state. (default: false)
   */
  progressBarOption: ProgressBarPropsType;
}

export type TechStackStyledPropsType = TechStackPropsGapType;
