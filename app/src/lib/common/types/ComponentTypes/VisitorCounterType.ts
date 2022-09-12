export interface VisitorCounterPropsType {
  /**
   * Hit title used in 'default' and 'big-size' (default: hit)
   */
  title: string;
  /**
   * Number of today's visitors (default: 0)
   */
  todayVisitor: number;
  /**
   * Number of total visitors (default: 123)
   */
  totalVisitor: number;
  /**
   * Title of today's visit count used in 'big-size' and 'simple' (default: today)
   */
  todayTitle?: string;
  /**
   * Title of totla visit count used in 'big-size' and 'simple'(default: total)
   */
  totalTitle?: string;
  /**
   * Background color of todayTitle (default: #91c230c4)
   */
  backgroundColor?: string;
  /**
   * Font size of all text used in VisitorCounter Component (default: 14px) (unit: px)
   */
  size?: string;
  /**
   * Color of today's visit count used in 'big-size' and 'simple' (default: red)
   */
  todayBoldColor?: string;
  /**
   * Color of total visit count used in 'big-size' and 'simple' (default: red)
   */
  totalBoldColor?: string;
}

export interface IndexPropsType extends VisitorCounterPropsType {
  /**
   * Visitor Counter theme 'default' | 'big-size' | 'simple' (default: 'default')
   */
  theme?: VisitorCounterThemeType;
}

type VisitorCounterThemeType = 'default' | 'big-size' | 'simple';

export interface VisitorCounterStylePropsType {
  /**
   * Background color of todayTitle (default: #91c230c4)
   */
  backgroundColor?: string;
  /**
   * Font size of all text used in VisitorCounter Component (default: 14px) (unit: px)
   */
  size?: string;
  /**
   * Color of today's visit count used in 'big-size' and 'simple' (default: red)
   */
  todayBoldColor?: string;
  /**
   * Color of total visit count used in 'big-size' and 'simple' (default: red)
   */
  totalBoldColor?: string;
}
