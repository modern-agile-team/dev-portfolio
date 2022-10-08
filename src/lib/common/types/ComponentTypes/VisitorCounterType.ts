export interface VisitorCounterPropsType {
  /**
   * You can dramatically change the UI of the VisitorCounter by choosing one of the following themes: `'default' | 'big-size' | 'simple'`. (default: 'default')
   *
   * @type `'default' | 'big-size' | 'simple'`
   */
  theme?: VisitorCounterThemeType;
  /**
   * Hit title text used only on `'default'` and `'big-size'` themes. (default: 'hit')
   */
  title?: string;
  /**
   * title color style. (default: 'black')
   */
  titleColor?: string;
  /**
   * Number of today's visitors. (default: 0)
   */
  todayVisitor?: number;
  /**
   * todayVisitor color style. (default: 'red')
   */
  todayVisitorColor?: string;
  /**
   * Number of total visitors. (default: 123)
   */
  totalVisitor?: number;
  /**
   * totalVisitor color style. (default: 'red')
   */
  totalVisitorColor?: string;
  /**
   * Title of today's the number of visitors used only on `'big-size'` and `'simple'` themes. (default: 'today')
   */
  todayTitle?: string;
  /**
   * todayTitle color style. (default: 'black')
   */
  todayTitleColor?: string;
  /**
   * Title of total's the number of visitors used only on `'big-size'` and `'simple'` themes. (default: 'total')
   */
  totalTitle?: string;
  /**
   * totalTitle color style. (default: 'black')
   */
  totalTitleColor?: string;
  /**
   * Background color of todayTitle. (default: '#91c230c4')
   */
  backgroundColor?: string;
  /**
   * Font size of all text used in VisitorCounter Component (default: '14px') (unit: px)
   */
  size?: string;
}

/**
 * You can dramatically change the UI of the VisitorCounter by choosing one of the following themes: `'default' | 'big-size' | 'simple'`.
 *
 * @type `'default' | 'big-size' | 'simple'`
 */
type VisitorCounterThemeType = 'default' | 'big-size' | 'simple';
