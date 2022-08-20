import Basic from './Basic';
import Box from './Box';
import Vertical from './Vertical';
import React from 'react';

interface Props {
  theme?: 'basic' | 'box' | 'vertical';
}

const CommentList = (props: Props) => {
  const { theme } = props;

  switch (theme) {
    case 'basic':
      return <Basic />;
    case 'box':
      return <Box />;
    case 'vertical':
      return <Vertical />;
    default:
      return <Basic />;
  }
};

export default CommentList;
