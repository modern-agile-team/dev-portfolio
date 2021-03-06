import React from 'react';
import styled from 'styled-components';
import { IntroOptionType } from '../../../../src/lib/common/types/intro';

interface IntroDesProps {
  introDes: IntroOptionType;
}

const IntroForm = ({ introDes }: IntroDesProps) => {
  const { description } = introDes;

  return (
    <Wrap>
      <IntroBox>{description}</IntroBox>
    </Wrap>
  );
};

export default IntroForm;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

const IntroBox = styled.div`
  width: 95vw;
  min-height: 10em;
  border-radius: 10px;
  padding: 50px;
  background-color: white;
  display: grid;
  align-items: center;
  box-shadow: 0px 5px 8px 2px rgba(0, 0, 0, 0.1);
`;
