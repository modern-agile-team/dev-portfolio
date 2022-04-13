import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  padding?: string;
  count?: number;
}

const Masonry = ({ children, padding, count }: Props) => {
  return (
    <Wrap padding={padding} count={count}>
      {children}
    </Wrap>
  );
};

export default Masonry;

const Wrap = styled.div<{
  padding?: string;
  count?: number;
}>`
  padding: ${({ padding }) => padding ?? '2em'};
  column-count: ${({ count }) => count ?? 4};
  column-gap: 1.5em;
`;
