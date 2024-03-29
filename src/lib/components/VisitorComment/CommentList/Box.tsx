import styled from 'styled-components';
import {
  VisitorCommentListType,
  VisitorCommentStyledPropsType,
} from '../../../common/types/ComponentTypes/VisitorCommentType';

const Box = (props: VisitorCommentListType) => {
  const { description, nickname, date, listBackgroundColor, listNicknameColor, listDateColor } = props;

  return (
    <Wrap listBackgroundColor={listBackgroundColor} listNicknameColor={listNicknameColor} listDateColor={listDateColor}>
      <span className="des">{description}</span>
      <div className="info">
        <span className="nickname">{nickname}</span>
        <span className="date">{date}</span>
      </div>
    </Wrap>
  );
};
export default Box;

const Wrap = styled.div<VisitorCommentStyledPropsType>`
  margin: 15px 5px;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.14);
  background-color: ${({ listBackgroundColor }) => listBackgroundColor ?? 'white'};
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
      color: ${({ listNicknameColor }) => listNicknameColor ?? '#959595'};
    }
    .date {
      color: ${({ listDateColor }) => listDateColor ?? '#959595'};
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
