import { VisitorCounterPropsType } from '../../common/types/ComponentTypes/VisitorCounterType';
import { BigSize } from './BigSize';
import Default from './Default';
import { Simple } from './Simple';

/**
 * You can use VisitorCounter for recording the number of hits of users who visit the your site.
 *
 * @props theme: You can dramatically change the UI of the VisitorCounter by choosing one of the following themes: `'default' | 'big-size' | 'simple'`. (default: 'default')
 * @props title: Hit title text used only on `'default'` and `'big-size'` themes. (default: 'hit')
 * @props todayVisitor: Number of today's visitors. (default: 0)
 * @props todayVisitorColor: todayVisitor color style. (default: 'red')
 * @props totalVisitor: Number of total visitors. (default: 123)
 * @props totalVisitorColor: totalVisitor color style. (default: 'red')
 * @props todayTitle: Title of today's the number of visitors used only on `'big-size'` and `'simple'` themes. (default: 'today')
 * @props todayTitleColor: todayTitle color style. (default: 'black')
 * @props totalTitle: Title of total's the number of visitors used only on `'big-size'` and `'simple'` themes. (default: 'total')
 * @props totalTitleColor: totalTitle color style. (default: 'black')
 * @props backgroundColor: Background color of todayTitle. (default: '#91c230c4')
 * @props size: Font size of all text used in VisitorCounter Component (default: '14px') (unit: px)
 */
const VisitorCounter = (props: VisitorCounterPropsType) => {
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
  todayVisitor: 0,
  totalVisitor: 123,
  todayTitle: 'today',
  todayTitleColor: 'black',
  totalTitle: 'total',
  totalTitleColor: 'black',
};
