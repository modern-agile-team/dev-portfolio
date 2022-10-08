import styled from 'styled-components';
import { VisitorCounterPropsType } from '../../common/types/ComponentTypes/VisitorCounterType';

const Default = (props: VisitorCounterPropsType) => {
  const { title, todayVisitor, todayVisitorColor, totalVisitor, totalVisitorColor, backgroundColor, size, titleColor } =
    props;

  return (
    <Wrap size={size}>
      <Counter backgroundColor={backgroundColor} titleColor={titleColor}>
        <span className="title">{title}</span>
        <div className="count">
          <span className="today" style={{ color: `${todayVisitorColor}` }}>
            {todayVisitor}
          </span>
          <span className="total" style={{ color: `${totalVisitorColor}` }}>
            {totalVisitor}
          </span>
        </div>
      </Counter>
    </Wrap>
  );
};

export default Default;

const Wrap = styled.div<VisitorCounterPropsType>`
  display: flex;
  align-items: center;
  font-size: ${({ size }) => size ?? '14px'};
`;

const Counter = styled.div<VisitorCounterPropsType>`
  border-radius: 5px;
  background-color: white;
  display: flex;
  .title {
    background-color: ${({ backgroundColor }) => backgroundColor ?? '#91c230c4'};
    color: ${({ titleColor }) => titleColor ?? 'black'};
    border: 1px solid #989898;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 5px 10px;
  }
  .count {
    border: 1px solid #989898;
    border-left: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 5px 10px;
  }
  .today {
    padding-right: 0px;
    :after {
      content: '/';
      margin: 0px 5px;
    }
  }
  .total {
    padding-left: 0px;
  }
`;
