export interface ProgressBarPropsType extends ProgressBarContainerStyledPropsType, ProgressBarAnimationType {
  /**
   * How well you handle the skill (unit: %)
   */
  rate?: string;
  /**
   * boolean whether show text of rate (default: false)
   */
  isHiddenRateText?: boolean;
  /**
   * animation start color if isBlinking true (default: white)
   */
  colorFrom?: string;
  /**
   * animation finished color if isBlinking true (default: red)
   */
  colorTo?: string;
  /**
   * progressbar blinking state (default: false);
   */
  isBlinking?: boolean;
}

export type ProgressBarAnimationType = {
  /**
   * progressbar animation <'wave' | 'fill-up' | 'fill-up-wave' | 'none'> (default: "wave")
   */
  animationType?: 'wave' | 'fill-up' | 'fill-up-wave' | 'none';
};

export interface ProgressBarContainerStyledPropsType {
  /**
   * progressbar css width (default: 100%)
   */
  width?: string;
  /**
   * progressbar css height (default: 40px)
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
