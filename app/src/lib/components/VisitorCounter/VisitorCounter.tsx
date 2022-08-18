import React from 'react';
import { BigSize } from './BigSize';
import Default from './Default';

interface themeProps {
  theme?: 'default' | 'big-size';
}

const VisitorCounter = (props: themeProps) => {
  const { theme } = props;

  switch (theme) {
    case 'default':
      return <Default />;
    case 'big-size':
      return <BigSize />;
    default:
      return <Default />;
  }
};

export default VisitorCounter;
