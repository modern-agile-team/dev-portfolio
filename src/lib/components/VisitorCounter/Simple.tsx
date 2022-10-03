import styled from 'styled-components';
import { VisitorCounterPropsType } from '../../common/types/ComponentTypes/VisitorCounterType';

export const Simple = (props: VisitorCounterPropsType) => {
  const {
    todayTitle,
    todayVisitor,
    totalTitle,
    totalVisitor,
    size,
    todayVisitorColor,
    totalVisitorColor,
    todayTitleColor,
    totalTitleColor,
  } = props;

  return (
    <Wrap
      size={size}
      todayVisitorColor={todayVisitorColor}
      totalVisitorColor={totalVisitorColor}
      todayTitleColor={todayTitleColor}
      totalTitleColor={totalTitleColor}
    >
      <span className="today">{todayTitle}</span>
      <span className="today-visitor">{todayVisitor}</span>
      <span className="total">{totalTitle}</span>
      <span className="total-visitor">{totalVisitor}</span>
    </Wrap>
  );
};

const Wrap = styled.div<VisitorCounterPropsType>`
  font-size: ${({ size }) => size ?? '14px'};
  span {
    padding: 3px;
  }
  .today {
    color: ${({ todayTitleColor }) => todayTitleColor ?? 'black'};
  }
  .today-visitor {
    font-weight: bold;
    color: ${({ todayVisitorColor }) => todayVisitorColor ?? 'red'};
    ::after {
      content: '|';
      margin-left: 8px;
      font-weight: normal;
      color: black;
    }
  }
  .total {
    color: ${({ totalTitleColor }) => totalTitleColor ?? 'black'};
  }
  .total-visitor {
    font-weight: bold;
    color: ${({ totalVisitorColor }) => totalVisitorColor ?? 'black'};
  }
`;
