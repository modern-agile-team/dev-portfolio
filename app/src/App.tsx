import React from 'react';
import { Header, TechStackInput, TechStackList, Contact, Intro, Gallery, Item, Card } from './lib/index';

function App() {
  const techStacksDefault = [
    {
      nameOption: { name: 'Javascript', size: '24px', iconColor: '#E2D784' },
      progressBarOption: { rate: '45%' },
    },
    {
      nameOption: { name: 'HTML-5', size: '24px', iconColor: '#E34F26' },
      progressBarOption: { rate: '30%' },
    },
    {
      nameOption: { name: 'Nodejs', size: '24px', iconColor: '#339933' },
      progressBarOption: {
        rate: '85%',
        colorTo: '#339933',
        colorFrom: 'whitesmoke',
      },
    },
  ];
  return (
    <>
      <Header />
      <Card shape="square" width="150px" height="150px" hover="up">
        이거슨 카드이다
      </Card>
      <Gallery>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Gallery>
      <Intro />
      <TechStackInput />
      <TechStackList techStackList={techStacksDefault} />
      <Contact />
    </>
  );
}

export default App;
