import styled from 'styled-components';
import { VisitorCommentListType } from '../../../common/types/ComponentTypes/VisitorCommentType';

const Basic = (props: VisitorCommentListType) => {
  const { des, nickname, date } = props;

  return (
    <Wrap>
      <span className="des">{des}</span>
      <div className="info">
        <span className="nickname">{nickname}</span>
        <span className="date">{date}</span>
      </div>
    </Wrap>
  );
};
export default Basic;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 0.2px solid #b4b4b4a2;
  background-color: white;
  padding: 1em 5em;
  height: 80px;
  .des {
    flex-grow: 2;
    max-width: 50em;
  }
  .info {
    flex-grow: 1;
    padding-left: 10em;
    display: flex;
    flex-direction: column;
    text-align: right;
    gap: 10px;
    font-size: 14px;
    color: #959595;
    .nickname {
      font-weight: bold;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1em;
    .info {
      width: 100%;
      flex-direction: row-reverse;
      justify-content: flex-start;
      padding: 10px 0;
    }
  }
`;
