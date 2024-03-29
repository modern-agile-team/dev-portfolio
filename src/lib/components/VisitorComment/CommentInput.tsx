import React, { useRef } from 'react';
import styled from 'styled-components';
import {
  VisitorCommentPropsType,
  VisitorCommentStyledPropsType,
} from '../../common/types/ComponentTypes/VisitorCommentType';

const CommentInput = (props: VisitorCommentPropsType) => {
  const {
    theme,
    buttonColor,
    descriptionPlaceholder,
    nicknamePlaceholder,
    passwordPlaceholder,
    inputBackgroundColor,
    userInputLineColor,
    handleCreateComment,
    handleChangeDescription,
    handleChangeNickname,
    handleChangePassword,
    comment,
    nickname,
    password,
    inputFontColor,
    inputPlacehoderColor,
  } = props;

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const onKeyDown = () => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = 'auto';
    const height = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = `${height + 8}px`;
  };

  return (
    <Wrap
      theme={theme}
      inputBackgroundColor={inputBackgroundColor}
      userInputLineColor={userInputLineColor}
      inputFontColor={inputFontColor}
      inputPlacehoderColor={inputPlacehoderColor}
    >
      <textarea
        ref={textareaRef}
        onKeyDown={onKeyDown}
        onChange={handleChangeDescription}
        className="des"
        placeholder={descriptionPlaceholder}
        value={comment}
      />
      <InfoWrap>
        <UserInfo inputPlacehoderColor={inputPlacehoderColor}>
          <input
            className="nickname"
            type="text"
            onChange={handleChangeNickname}
            placeholder={nicknamePlaceholder}
            value={nickname}
          />
          <input
            className="password"
            type="password"
            onChange={handleChangePassword}
            placeholder={passwordPlaceholder}
            value={password}
          />
        </UserInfo>
        <SubmitBtn inputBackgroundColor={inputBackgroundColor} buttonColor={buttonColor} onClick={handleCreateComment}>
          <span>send</span>
        </SubmitBtn>
      </InfoWrap>
    </Wrap>
  );
};

export default CommentInput;

CommentInput.defaultProps = {
  descriptionPlaceholder: 'write your description...',
  nicknamePlaceholder: 'ID',
  passwordPlaceholder: 'PW',
};

const Wrap = styled.div<VisitorCommentStyledPropsType>`
  margin: 1em 0;
  padding: 1.5em 3em 0em 3em;
  background-color: ${({ inputBackgroundColor }) => inputBackgroundColor ?? 'white'};
  border-radius: ${({ theme }) => (theme === 'box' ? '5px' : 'none')};
  border: ${({ inputBackgroundColor }) => inputBackgroundColor ?? '0.2px solid #b4b4b4a2'};
  box-shadow: ${({ theme }) => (theme === 'box' ? '0px 0px 5px 0px rgba(83, 83, 83, 0.14)' : 'none')};
  textarea {
    color: ${({ inputFontColor }) => inputFontColor ?? 'black'};
    background-color: ${({ inputBackgroundColor }) => inputBackgroundColor ?? 'white'};
    outline: none;
    border: none;
    resize: none;
    padding: 10px 0 0 0;
    width: 100%;
    height: 50px;
    align-items: center;
    font-size: 16px;
    overflow: hidden;
    ::placeholder {
      color: ${({ inputPlacehoderColor }) => inputPlacehoderColor ?? 'black'};
    }
    :focus::-webkit-input-placeholder {
      opacity: 0;
    }
    @media screen and (max-width: 768px) {
      height: 30px;
    }
    @media screen and (max-width: 500px) {
      width: 100%;
      height: 25px;
    }
  }
  input {
    background-color: ${({ inputBackgroundColor }) => inputBackgroundColor ?? 'white'};
    color: ${({ inputFontColor }) => inputFontColor ?? 'black'};
    outline: none;
    border: none;
    padding: 0;
    height: 25px;
    border-bottom: 1px solid;
    border-bottom-color: ${({ userInputLineColor }) => userInputLineColor ?? '#b4b4b4a2'};
    :focus::-webkit-input-placeholder {
      opacity: 0;
    }
    @media screen and (max-width: 768px) {
      height: 15px;
      width: 10vw;
    }
    @media screen and (max-width: 500px) {
      margin: 10px 0;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 10px 2em;
  }
`;

const UserInfo = styled.div<VisitorCommentStyledPropsType>`
  flex-grow: 3;
  display: flex;
  font-size: 14px;
  color: #959595;
  gap: 30px;
  input {
    ::placeholder {
      color: ${({ inputPlacehoderColor }) => inputPlacehoderColor ?? 'black'};
    }
  }
  @media screen and (max-width: 500px) {
    flex-direction: row;
    width: 100%;
    input {
      width: 20%;
      font-size: 12px;
    }
  }
`;

const SubmitBtn = styled.button<VisitorCommentStyledPropsType>`
  border: none;
  background-color: ${({ inputBackgroundColor }) => inputBackgroundColor ?? 'white'};
  flex-grow: 1;
  text-align: center;
  padding: 2vw 0;
  margin-left: 2vw;
  color: ${({ buttonColor }) => buttonColor ?? '#1877f2'};
  span {
    cursor: pointer;
  }
  @media screen and (max-width: 760px) {
    border: none;
    margin: 0;
    text-align: right;
    padding-right: 5px;
  }
`;

const InfoWrap = styled.div`
  display: flex;
  align-items: center;
`;
