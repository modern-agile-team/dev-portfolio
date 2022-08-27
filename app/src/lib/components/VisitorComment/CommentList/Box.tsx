import styled from 'styled-components';
import { VisitorCommentListType } from '../../../common/types/ComponentTypes/VisitorCommentType';

const Box = (props: VisitorCommentListType) => {
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
export default Box;

const Wrap = styled.div`
  margin: 15px 0;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.14);
  background-color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 1em 5em;
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
    font-size: 1vw;
    flex-direction: column;
    align-items: flex-start;
    padding: 4em 5em;
    .info {
      width: 100%;
      font-size: 1vw;
      flex-direction: row-reverse;
      justify-content: flex-start;
      padding: 0;
    }
  }
`;
