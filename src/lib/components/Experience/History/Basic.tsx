import styled from 'styled-components';
import { ExperienceHistoryListType, ExperienceStyledPropsType } from '../../../common/types/ComponentTypes/ExperienceType';

const Basic = (props: ExperienceHistoryListType) => {
  const { startDate, endDate, title, des, historyTitleColor, dateColor, descriptionColor } = props;

  return (
    <div>
      <Wrap historyTitleColor={historyTitleColor} dateColor={dateColor} descriptionColor={descriptionColor}>
        <div className="date">
          <span className="start-date">{startDate}</span>
          <span className="end-date">{endDate}</span>
        </div>
        <span className="child-title">{title}</span>
        <span className="des">{des}</span>
      </Wrap>
    </div>
  );
};
export default Basic;

const Wrap = styled.div<ExperienceStyledPropsType>`
  margin: 0 auto;
  padding: 0em 4vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 0.2px solid #b4b4b4a2;
  .date {
    color: ${({ dateColor }) => dateColor ?? 'black'};
    width: 15%;
    padding: 2em;
    flex-grow: 1;
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
