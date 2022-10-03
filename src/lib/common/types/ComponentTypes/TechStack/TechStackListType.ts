import { TechStackPropsType } from './TechStackType';

type TechStackGapType = 'narrower' | 'narrow' | 'normal' | 'wide' | 'wider';

export interface TechStackPropsGapType {
  /**
   * Spacing between technical-stack elements in TechStackList. (default: 'normal')
   *
   * @type `'narrower' | 'narrow' | 'normal' | 'wide' | 'wider'`
   */
  gap?: TechStackGapType;
}

export interface TechStackListPropsType extends TechStackPropsGapType {
  /**
   * Name to be added to Sidebar
   */
  id?: string;
  /**
   * Enter the properties such as nameOption, progressBarOption and click the {@link https://github.com/modern-agile-team/dev-portfolio#techstacklist link} if you want to see the README.md about TechStackList.
   *
   * @props nameOption: You can show off the skills by customizing the props such as the name, logoName, fontSize, logoSize etc.
   * @props progressBarOption: This is ProgressBar component that shows progress rate.
   * 
   * @example techStackList
   * ```ts
     [{
        nameOption: { name: 'Javascript', logoName: 'Javascript', fontSize: '18px', logoSize: '24px', nameTextColor: '#20232a' },
        progressBarOption: { rateText: '45%', rateTextColor: '#61dafb', isHiddenRateText: false, backgroundColor: '#20232a', colorTo: '#61dafb', colorFrom: 'whitesmoke', width: '100%', height: '40px', animationType: 'fill-up-wave', isBlinking: false }
      },]
   * ```
   */
  techStackList?: TechStackPropsType[];
}
