import Carousel from '@components/Carousel/Carousel';
import React from 'react';
import { Header, TechStackInput, TechStackList, Contact, Intro, Gallery, Item } from './lib/index';

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
      <Carousel transistion={1000}>
        <Item title="1" />
        <Item title="2" />
        <Item title="3" />
      </Carousel>
    </>
  );
}

export default App;
