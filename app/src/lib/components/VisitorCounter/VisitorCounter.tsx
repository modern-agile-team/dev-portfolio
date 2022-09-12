import React from 'react';
import { IndexPropsType } from '../../common/types/ComponentTypes/VisitorCounterType';
import { BigSize } from './BigSize';
import Default from './Default';
import { Simple } from './Simple';

/**
 *
 * @props title: Hit title used in 'default' and 'big-size' (default: hit)
 * @props theme: Visitor Counter theme 'default' | 'big-size' | 'simple' (default: 'default')
 * @props todayVisitor: Number of today's visitors (default: 0)
 * @props totalVisitor: Number of total visitors (default: 123)
 * @props todayTitle: Title of today's visit count used in 'big-size' and 'simple' (default: today)
 * @props totalTitle: Title of totla visit count used in 'big-size' and 'simple'(default: total)
 * @props backgroundColor: Background color of todayTitle (default: #91c230c4)
 * @props size: Font size of all text used in VisitorCounter Component (default: 14px) (unit: px)
 * @props todayBoldColor: Color of today's visit count used in 'big-size' and 'simple' (default: red)
 * @props totalBoldColor: Color of total visit count used in 'big-size' and 'simple' (default: red)
 */
const VisitorCounter = (props: IndexPropsType) => {
  const { theme } = props;

  switch (theme) {
    case 'default':
      return <Default {...props} />;
    case 'big-size':
      return <BigSize {...props} />;
    case 'simple':
      return <Simple {...props} />;
    default:
      return <Default {...props} />;
  }
};

export default VisitorCounter;

VisitorCounter.defaultProps = {
  title: 'hits',
  todayVisitor: '0',
  totalVisitor: '123',
  todayTitle: 'today',
  totalTitle: 'total',
};
