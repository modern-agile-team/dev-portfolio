export interface ProgressBarPropsType extends ProgressBarContainerStyledPropsType, ProgressBarAnimationType {
  /**
   * How well you handle the skill (default: 100%) (unit: %)
   */
  rate?: string;
  /**
   * Whether show text of rate (default: false)
   */
  isHiddenRateText?: boolean;
  /**
   * Start color of blinking animation of progressbar (default: white)
   */
  colorFrom?: string;
  /**
   * End color of blinking animation of progressbar (default: red)
   */
  colorTo?: string;
  /**
   * Progressbar blinking state (default: false)
   */
  isBlinking?: boolean;
}

export type ProgressBarAnimationType = {
  /**
   * Progressbar animation <'wave' | 'fill-up' | 'fill-up-wave' | 'none'> (default: 'wave')
   */
  animationType?: 'wave' | 'fill-up' | 'fill-up-wave' | 'none';
};

export interface ProgressBarContainerStyledPropsType {
  /**
   * Progressbar css width (default: 100%)
   */
  width?: string;
  /**
   * Progressbar css height (default: 40px)
   */
  height?: string;
}

export interface ProgreeBarColorType {
  from?: string;
  to?: string;
}

export interface ProgressBarCompleteStyledPropsType {
  progressColor: ProgreeBarColorType;
}
