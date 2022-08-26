import styled from 'styled-components';
import { VisitorCommentListType } from '../../../common/types/ComponentTypes/VisitorCommentType';

const Vertical = (props: VisitorCommentListType) => {
  const { des, nickname, date } = props;

  return (
    <Wrap>
      <span className="des">{des}</span>
      <span className="nickname">{nickname}</span>
      <span className="date">{date}</span>
    </Wrap>
  );
};

export default Vertical;

Vertical.defaultProps = {
  shape: 'square',
  titleColor: 'black',
};

const Wrap = styled.div`
  width: 20em;
  padding: 1em 2em;
  margin: 1em auto;
  display: flex;
  flex-direction: column;
  border: 1px solid #b4b4b4a2;
  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.04);
  background-color: white;
  text-align: center;
  justify-content: center;
  .des {
    padding: 1em;
    border-bottom: 1px solid #b4b4b4a2;
  }
  .nickname {
    padding: 5px;
    font-size: 14px;
    color: #959595;
    font-weight: bold;
  }
  .date {
    font-size: 14px;
    color: #959595;
  }
  @media screen and (max-width: 768px) {
    font-size: 1vw;
    width: 40%;
    margin: 3em auto;
    .nickname {
      font-size: 1vw;
    }
    .date {
      font-size: 1vw;
    }
  }
`;
