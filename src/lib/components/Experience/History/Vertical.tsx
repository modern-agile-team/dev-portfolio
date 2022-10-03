import styled, { css } from 'styled-components';
import { VerticalPropsType, ExperiencePropsType } from '../../../common/types/ComponentTypes/ExperienceType';

const Vertical = (props: VerticalPropsType) => {
  const { startDate, endDate, title, des, shape, historyTitleColor, dateColor, descriptionColor } = props;

  return (
    <Wrap shape={shape} historyTitleColor={historyTitleColor} dateColor={dateColor} descriptionColor={descriptionColor}>
      <div className="intro">
        <div className="date">
          <span className="start-date">{startDate}</span>
          <span className="end-date">{endDate}</span>
        </div>
        <div className="child-title">{title}</div>
      </div>
      <span className="des">{des}</span>
    </Wrap>
  );
};

export default Vertical;

Vertical.defaultProps = {
  shape: 'square',
  historyTitleColor: 'black',
};

const Wrap = styled.div<ExperiencePropsType>`
  width: 25em;
  padding: 10px 2em 1.2em 2em;
  margin: 1em auto;
  border: 1px solid #b4b4b4a2;
  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.04);
  ${({ shape }) => {
    switch (shape) {
      case 'square':
        return css`
          border-radius: 0px;
        `;
      case 'round-square':
        return css`
          border-radius: 10px;
        `;
    }
  }}
  text-align: center;
  .intro {
    margin: 10px;
    .date {
      color: ${({ dateColor }) => dateColor ?? 'black'};
      margin: 15px 0px 10px 0px;
      font-size: 13px;
      .start-date {
        ::after {
          content: '-';
          margin: 0px 7px;
        }
      }
      .end-date {
        margin-left: 5px;
      }
    }
    .child-title {
      color: ${({ historyTitleColor }) => historyTitleColor ?? 'black'};
      font-size: 25px;
      font-weight: 600;
      padding: 7px;
      border-bottom: 1px solid #b4b4b4a2;
    }
    .des {
      color: ${({ descriptionColor }) => descriptionColor ?? 'black'};
    }
  }
`;
