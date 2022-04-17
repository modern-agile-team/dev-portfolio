import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  padding?: string;
  column?: number;
}

const Masonry = ({ children, padding, column }: Props) => {
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
  padding: ${({ padding }) => padding ?? '2em'};
  column-count: ${({ column }) => column ?? 4};
  column-gap: 1.5em;
`;
