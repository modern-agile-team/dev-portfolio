import React from 'react';
import styled from 'styled-components';
import {
  VisitorCommentPropsType,
  VisitorCommentThemeStyledPropsType,
} from '../../common/types/ComponentTypes/VisitorCommentType';

const CommentInput = (props: VisitorCommentPropsType) => {
  const { theme } = props;

  return (
    <Wrap theme={theme}>
      <input className="des" type="text" placeholder="write your description" />
      <InfoWrap>
        <UserInfo>
          <input className="nickname" type="text" placeholder="ID" />
          <input className="date" type="password" placeholder="PW" />
        </UserInfo>
        <SubmitBtn>
          <span>send</span>
        </SubmitBtn>
      </InfoWrap>
    </Wrap>
  );
};

export default CommentInput;

const Wrap = styled.div<VisitorCommentThemeStyledPropsType>`
  margin: 1em;
  display: flex;
  align-items: center;
  background-color: white;
  padding-left: 5vw;
  border-radius: ${({ theme }) => (theme === 'box' ? '5px' : 'none')};
  border: ${({ theme }) => (theme === 'box' ? 'none' : '0.2px solid #b4b4b4a2')};
  box-shadow: ${({ theme }) => (theme === 'box' ? '0px 1px 3px 1px rgba(0, 0, 0, 0.14)' : 'none')};
  input {
    outline: none;
    border: none;
    padding: 0;
    height: 25px;
    font-size: 15px;
    :focus::-webkit-input-placeholder {
      opacity: 0;
    }
    @media screen and (max-width: 768px) {
      height: 15px;
      font-size: 1vw;
    }
    @media screen and (max-width: 500px) {
      margin: 10px;
      width: 100%;
    }
  }
  .des {
    flex-grow: 3;
    width: 5vw;
    max-width: 50em;
    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    padding: 1em;
    align-items: flex-start;
  }
`;

const UserInfo = styled.div`
  flex-grow: 1;
  width: 5vw;
  margin: 0 2vw;
  display: flex;
  flex-direction: column;
  gap: 1vw;
  font-size: 14px;
  color: #959595;
  .nickname {
    font-weight: bold;
  }
  input {
    text-align: right;
  }
  @media screen and (max-width: 500px) {
    flex-direction: row;
    width: 100%;
    input {
      text-align: left;
      width: 20%;
      margin: 2vw 0;
      padding-right: 2vw;
    }
  }
`;

const SubmitBtn = styled.div`
  flex-grow: 1.5;
  text-align: center;
  padding: 2vw 0;
  margin-left: 2vw;
  border-left: 0.2px solid #b4b4b4a2;
  color: #1877f2; //props
  span {
    cursor: pointer;
  }
  @media screen and (max-width: 500px) {
    font-size: 1vw;
    border: none;
    margin: 0;
    margin-right: 3em;
  }
`;

const InfoWrap = styled.div`
  display: flex;
  flex-grow: 3;
  align-items: center;
`;
