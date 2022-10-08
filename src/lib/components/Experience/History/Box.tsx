import styled from 'styled-components';
import { ExperienceHistoryListType, ExperienceStyledPropsType } from '../../../common/types/ComponentTypes/ExperienceType';

const Box = (props: ExperienceHistoryListType) => {
  const { startDate, endDate, title, description, historyTitleColor, dateColor, descriptionColor } = props;

  return (
    <div>
      <Wrap historyTitleColor={historyTitleColor} dateColor={dateColor} descriptionColor={descriptionColor}>
        <div className="date">
          <span className="start-date">{startDate}</span>
          <span className="end-date">{endDate}</span>
        </div>
        <span className="child-title">{title}</span>
        <span className="des">{description}</span>
      </Wrap>
    </div>
  );
};
export default Box;

const Wrap = styled.div<ExperienceStyledPropsType>`
  margin: 10px;
  padding: 0em 4vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.14);
  border-radius: 5px;
  .date {
    width: 15%;
    padding: 2em;
    flex-grow: 1;
    color: ${({ dateColor }) => dateColor ?? 'black'};
    @media screen and (max-width: 800px) {
      width: 100%;
      text-align: center;
    }
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
    width: 15%;
    flex-grow: 1;
    font-size: 22px;
    font-weight: 600;
    border-right: 1px solid #b4b4b4a2;
    @media screen and (max-width: 800px) {
      width: 100%;
      text-align: center;
      border: none;
    }
  }
  .des {
    color: ${({ descriptionColor }) => descriptionColor ?? 'black'};
    padding: 2em;
    flex-grow: 2;
    width: 30%;
    @media screen and (max-width: 800px) {
      width: 100%;
      text-align: center;
    }
  }
`;
