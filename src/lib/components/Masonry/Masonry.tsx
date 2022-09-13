import { Children } from 'react';
import styled from 'styled-components';
import { MasonryPropsType, MasonryStyledPropsType } from '../../common/types/ComponentTypes/MasonryType';

/**
 *
 * @props id: Name to be added to Sidebar
 * @props column: Number of vertical lines (default: 4)
 * @props padding: Masonry padding (default: 2em 4em)
 */
const Masonry = ({ id, children, padding, column }: MasonryPropsType) => {
  const count = Children.count(children);

  if (count <= 6) column = 3;
  if (count <= 4) column = 2;
  if (count <= 2) column = 1;

  return (
    <Wrap id={id} padding={padding} column={column}>
      {children}
    </Wrap>
  );
};

export default Masonry;

const Wrap = styled.div<MasonryStyledPropsType>`
  padding: ${({ padding }) => padding ?? '2em 4em'};
  column-count: ${({ column }) => column ?? 4};
  column-gap: 1.5em;
  @media screen and (max-width: 500px) {
    padding: 1em 2em;
    column-count: 2;
  }
`;
