import styled from 'styled-components';

const Basic = () => {
  return (
    <Wrap>
      <span className="des">정말 멋진 라이브러리군요</span>
      <div className="info">
        <span className="nickname">nickname</span>
        <span className="date">date</span>
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
`;
