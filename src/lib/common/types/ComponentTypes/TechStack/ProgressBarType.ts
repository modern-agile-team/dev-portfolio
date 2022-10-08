export interface ProgressBarPropsType {
  /**
   * How well you handle the skill. (default: '100%') (unit: %)
   */
  rateText?: string;
  /**
   * rateText color style. (default: 'black')
   */
  rateTextColor?: string;
  /**
   * Whether show text of rate. (default: false)
   */
  isHiddenRateText?: boolean;
  /**
   * ProgressBar's background color style. (default: 'whitesmoke')
   */
  backgroundColor?: string;
  /**
   * Progressbar css width. (default: '100%')
   */
  width?: string;
  /**
   * Progressbar css height. (default: '40px')
   */
  height?: string;
  /**
   * Start color of blinking animation of progressbar. (default: 'white')
   */
  colorFrom?: string;
  /**
   * End color of blinking animation of progressbar. (default: 'red')
   */
  colorTo?: string;
  /**
   * Progressbar animation <'wave' | 'fill-up' | 'fill-up-wave' | 'none'> (default: 'wave')
   *
   * @type `'wave' | 'fill-up' | 'fill-up-wave' | 'none'`
   */
  animationType?: 'wave' | 'fill-up' | 'fill-up-wave' | 'none';
  /**
   * Progressbar blinking state. (default: false)
   */
  isBlinking?: boolean;
}

export interface ProgreeBarColorType {
  from?: string;
  to?: string;
}

export interface ProgressBarCompleteStyledPropsType {
  progressColor: ProgreeBarColorType;
}
