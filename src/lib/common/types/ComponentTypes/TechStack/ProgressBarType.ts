export interface ProgressBarPropsType extends ProgressBarContainerStyledPropsType {
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
   *
   */
  animationType?: 'wave' | 'none';
  /**
   *
   */
  isBlinking?: boolean;
}

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
