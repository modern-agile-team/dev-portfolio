export interface ProgressBarPropsType extends ProgressBarContainerStyledPropsType, ProgressBarAnimationType {
  /**
   * How well you handle the skill (unit: %)
   */
  rate?: string;
  /**
   * Whether show rate in progressbar
   */
  isHiddenRateText?: boolean;
  /**
   * End color of wave animation of progressbar
   */
  colorFrom?: string;
  /**
   * Start color of wave animation of progressbar
   */
  colorTo?: string;
  /**
   * progressbar blinking state (default: false);
   */
  isBlinking?: boolean;
}

export type ProgressBarAnimationType = {
  /**
   * progressbar animation <'wave' | 'fill-up' | 'fill-up-wave' | 'none'> (default: "wave");
   */
  animationType?: 'wave' | 'fill-up' | 'fill-up-wave' | 'none';
};

export interface ProgressBarContainerStyledPropsType {
  /**
   * Width of progressbar
   */
  width?: string;
  /**
   * Height of progressbar
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
