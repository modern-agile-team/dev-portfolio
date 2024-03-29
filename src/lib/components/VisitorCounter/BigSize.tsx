import styled from 'styled-components';
import { VisitorCounterPropsType } from '../../common/types/ComponentTypes/VisitorCounterType';

export const BigSize = (props: VisitorCounterPropsType) => {
  const {
    title,
    todayTitle,
    totalTitle,
    todayVisitor,
    todayVisitorColor,
    totalVisitor,
    totalVisitorColor,
    backgroundColor,
    size,
    titleColor,
    todayTitleColor,
    totalTitleColor,
  } = props;

  return (
    <Wrap backgroundColor={backgroundColor} size={size} titleColor={titleColor}>
      <span className="title">{title}</span>
      <Today todayVisitorColor={todayVisitorColor} todayTitleColor={todayTitleColor}>
        <span className="today">{todayTitle}</span>
        <span className="today-visitor">{todayVisitor}</span>
      </Today>
      <Total totalVisitorColor={totalVisitorColor} totalTitleColor={totalTitleColor}>
        <span className="total">{totalTitle}</span>
        <span className="total-visitor">{totalVisitor}</span>
      </Total>
    </Wrap>
  );
};

const Wrap = styled.div<VisitorCounterPropsType>`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  padding: 10px;
  background-color: ${({ backgroundColor }) => backgroundColor ?? 'whitesmoke'};
  min-height: 3em;
  font-size: ${({ size }) => size ?? '14px'};
  .title {
    padding: 10px;
    flex-grow: 1;
    font-weight: bold;
    color: ${({ titleColor }) => titleColor ?? 'black'};
  }
`;

const Today = styled.div<VisitorCounterPropsType>`
  flex-grow: 1;
  padding: 10px;
  .today {
    margin-right: 5em;
    color: ${({ todayTitleColor }) => todayTitleColor ?? 'black'};
  }
  .today-visitor {
    font-weight: bold;
    color: ${({ todayVisitorColor }) => todayVisitorColor ?? 'red'};
  }
`;

const Total = styled.div<VisitorCounterPropsType>`
  flex-grow: 1;
  padding: 10px;
  .total {
    margin-right: 5em;
    color: ${({ totalTitleColor }) => totalTitleColor ?? 'black'};
  }
  .total-visitor {
    font-weight: bold;
    color: ${({ totalVisitorColor }) => totalVisitorColor ?? 'red'};
  }
`;
