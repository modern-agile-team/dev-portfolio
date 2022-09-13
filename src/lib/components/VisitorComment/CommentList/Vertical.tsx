import styled from 'styled-components';
import { VisitorCommentListType } from '../../../common/types/ComponentTypes/VisitorCommentType';

const Vertical = (props: VisitorCommentListType) => {
  const { description, nickname, date } = props;

  return (
    <Wrap>
      <span className="des">{description}</span>
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
  width: 20vw;
  min-height: 10em;
  max-height: 50%;
  padding: 1em 2em;
  margin: 1em 0;
  display: flex;
  flex-direction: column;
  border: 1px solid #b4b4b4a2;
  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.04);
  background-color: white;
  text-align: center;
  justify-content: center;
  gap: 10px;
  .des {
    padding-bottom: 1.5em;
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
  @media screen and (max-width: 550px) {
    width: 50vw;
  }
`;
