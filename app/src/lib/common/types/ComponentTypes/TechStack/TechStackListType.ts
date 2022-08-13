import { TechStackPropsType } from './TechStackType';

type TechStackGapType = 'narrower' | 'narrow' | 'normal' | 'wide' | 'wider';

export interface TechStackPropsGapType {
  gap?: TechStackGapType;
}

export interface TechStackListPropsType extends TechStackPropsGapType {
  id?: string;
  techStackList?: TechStackPropsType[];
  gap?: TechStackGapType;
}
