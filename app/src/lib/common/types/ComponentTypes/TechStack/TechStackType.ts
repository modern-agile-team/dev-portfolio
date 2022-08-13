import { TechStackPropsGapType } from './TechStackListType';
import { TechStackNamePropsType } from './TechStackNameType';
import { ProgressBarPropsType } from './ProgressBarType';

export interface TechStackPropsType extends TechStackPropsGapType {
  nameOption: TechStackNamePropsType;
  progressBarOption: ProgressBarPropsType;
}

export interface TechStackStyledPropsType extends TechStackPropsGapType {}
