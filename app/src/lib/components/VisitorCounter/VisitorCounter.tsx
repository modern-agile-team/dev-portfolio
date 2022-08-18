import React from 'react';
import { BigSize } from './BigSize';
import Default from './Default';
import { Simple } from './Simple';

interface themeProps {
  theme?: 'default' | 'big-size' | 'simple';
}

const VisitorCounter = (props: themeProps) => {
  const { theme } = props;

  switch (theme) {
    case 'default':
      return <Default />;
    case 'big-size':
      return <BigSize />;
    case 'simple':
      return <Simple />;
    default:
      return <Default />;
  }
};

export default VisitorCounter;
