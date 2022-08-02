import React, { Children } from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  padding?: string;
  column?: number;
}

const Masonry = ({ children, padding, column }: Props) => {
  const count = Children.count(children);

  if (count <= 6) column = 3;
  if (count <= 4) column = 2;
  if (count <= 2) column = 1;

  return (
    <Wrap padding={padding} column={column}>
      {children}
    </Wrap>
  );
};

export default Masonry;

const Wrap = styled.div<{
  padding?: string;
  column?: number;
}>`
  padding: ${({ padding }) => padding ?? '2em 4em'};
  column-count: ${({ column }) => column ?? 4};
  column-gap: 1.5em;
  @media screen and (max-width: 500px) {
    padding: 1em 2em;
    column-count: 2;
  }
`;
