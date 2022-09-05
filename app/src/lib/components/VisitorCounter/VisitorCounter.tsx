import React from 'react';
import { IndexPropsType } from '../../common/types/ComponentTypes/VisitorCounterType';
import { BigSize } from './BigSize';
import Default from './Default';
import { Simple } from './Simple';

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
