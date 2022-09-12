import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import {
  TechStackInputContainerStyledPropsType,
  TechStackInputStyledPropsType,
} from '../../common/types/ComponentTypes/TechStack/TechStackInputType';
import { MAIN } from '../../common/theme';

const TechStackInput = () => {
  const [_, setInputValue] = useState('');
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [icons, setIcons] = useState([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    value.length >= 1 ? setIsFocus(true) : setIsFocus(false);

    if (value.length >= 2) {
      fetch(`https://api.iconify.design/search?query=logos:${value}`)
        .then((res) => res.json())
        .then((res) => setIcons(res.icons));
    }
  };

  return (
    <Container>
      <Input type="text" placeholder="Please write the tech-stack" onChange={onChange} isFocus={isFocus} />
      {isFocus && (
        <>
          <Modal onClick={() => setIsFocus(false)}>
            {icons?.length >= 1
              ? icons.map((icon, idx) => {
                  return (
                    <TechStackEachBoxContainer key={idx}>
                      <TechStackEachBox>
                        <Icon icon={icon} fontSize={'50px'} />
                        <TechStackName>{(icon as string).replace('logos:', '')}</TechStackName>
                      </TechStackEachBox>
                    </TechStackEachBoxContainer>
                  );
                })
              : 'There are no icons you entered.'}
          </Modal>
          <ModalBackground onClick={() => setIsFocus(false)} />
        </>
      )}
    </Container>
  );
};

export default TechStackInput;

const Container = styled.div<TechStackInputContainerStyledPropsType>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${({ headerHeight }) => headerHeight ?? '100px'};
  width: ${({ headerWidth }) => headerWidth ?? '100%'};
  /* background-color: ${({ headerBackgroundColor }) => headerBackgroundColor ?? 'purple'}; */
`;

const Input = styled.input<TechStackInputStyledPropsType>`
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
  width: 90%;
  padding: 16px;
  background-color: whitesmoke;
  border-radius: 12px;
  white-space: normal;
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

const TechStackEachBoxContainer = styled.div`
  display: inline-block;
  margin: 16px 16px 16px 0px;
  border-radius: 4px;
`;

const TechStackEachBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 4px 0px 4px;
  padding: 8px;
  border: 1px solid ${MAIN.MAIN_COLOR_TRANSPARENT};
  border-radius: 4px;
`;

const TechStackName = styled.span`
  margin-top: 8px;
  font-weight: bold;
`;
