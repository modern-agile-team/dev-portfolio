import { TechStackPropsGapType } from './TechStackListType';
import { TechStackNamePropsType } from './TechStackNameType';
import { ProgressBarPropsType } from './ProgressBarType';

export interface TechStackPropsType extends TechStackPropsGapType {
  /**
   * Choose name, logo and each size of techStack
   */
  nameOption: TechStackNamePropsType;
  /**
   * State of progressbar
   */
  progressBarOption: ProgressBarPropsType;
}

export interface TechStackStyledPropsType extends TechStackPropsGapType {}
