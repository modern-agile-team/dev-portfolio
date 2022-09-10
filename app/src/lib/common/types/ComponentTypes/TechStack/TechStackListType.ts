import { TechStackPropsType } from './TechStackType';

type TechStackGapType = 'narrower' | 'narrow' | 'normal' | 'wide' | 'wider';

export interface TechStackPropsGapType {
  /**
   * Spacing between TechStacks in TechStackList (default: normal) 'narrower' | 'narrow' | 'normal' | 'wide' | 'wider'
   */
  gap?: TechStackGapType;
}

export interface TechStackListPropsType extends TechStackPropsGapType {
  /**
   * Name to be added to Sidebar
   */
  id?: string;
  /**
   * TechStack-only props such as tech name, tech logo, and progressbar, etc	({@link https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/TechStack/TechStackType.ts "See More about TechStackList's Props"})
   */
  techStackList?: TechStackPropsType[];
  /**
   * Spacing between TechStacks in TechStackList (default: normal) 'narrower' | 'narrow' | 'normal' | 'wide' | 'wider'
   */
  gap?: TechStackGapType;
}
