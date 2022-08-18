import React from 'react';
import Default from './Default';

interface themeProps {
  theme?: 'default' | 'undefined';
}

const VisitorCounter = (props: themeProps) => {
  const { theme } = props;

  switch (theme) {
    case 'default':
      return <Default />;
    default:
      return <Default />;
  }
};

export default VisitorCounter;
