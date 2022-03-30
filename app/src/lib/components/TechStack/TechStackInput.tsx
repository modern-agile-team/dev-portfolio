import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../../dependencies/@iconify/react/dist/iconify';

const TechStackInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    e.target.value.length >= 1 ? setIsFocus(true) : setIsFocus(false);
  };

  return (
    <Container id="TechStackInput">
      <Input type="text" placeholder="Please write the tech-stack" onChange={onChange} isFocus={isFocus} />
      {isFocus && (
        <>
          <Modal onClick={() => setIsFocus(false)}>
            <TechStackEachBox>
              <Icon icon={`simple-icons:${inputValue}`} color={'black'} fontSize={'80px'} />
              <TechStackName>{inputValue}</TechStackName>
            </TechStackEachBox>
          </Modal>
          <ModalBackground onClick={() => setIsFocus(false)} />
        </>
      )}
    </Container>
  );
};

export default TechStackInput;

const Container = styled.div<{
  headerHeight?: string;
  headerWidth?: string;
  headerBackgroundColor?: string;
}>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${({ headerHeight }) => headerHeight ?? '100px'};
  width: ${({ headerWidth }) => headerWidth ?? '100%'};
  /* background-color: ${({ headerBackgroundColor }) => headerBackgroundColor ?? 'purple'}; */
`;

const Input = styled.input<{
  isFocus?: boolean;
}>`
  color: black;
  font-size: 24px;
  width: 50%;
  height: 50%;
  padding: 0px 0px 0px 20px;
  margin: 0px 0px 0px 30px;
  z-index: ${({ isFocus }) => (isFocus ? 1011 : 0)};
  border-radius: 6px;
`;

const Modal = styled.div`
  position: absolute;
  top: 120%;
  left: 30px;
  z-index: 1011;
  padding: 16px;
  background-color: white;
  border-radius: 12px;
`;

const ModalBackground = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 1010;
  background-color: rgba(0, 0, 0, 0.65);
`;

const TechStackEachBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 110px;
  padding-top: 10px;
  border: 1px solid black;
  border-radius: 4px;
`;

const TechStackName = styled.span`
  margin: 8px 0px;
  font-weight: bold;
`;
