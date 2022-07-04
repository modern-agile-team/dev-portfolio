import { FaSuse } from 'react-icons/fa';
import { FaStickerMule } from 'react-icons/fa';
import React from 'react';
import styled from 'styled-components';
import {
  Header,
  TechStackInput,
  TechStackList,
  Contact,
  Intro,
  Gallery,
  Item,
  Card,
  Masonry,
  Image,
  Carousel,
  Experience,
} from './lib/index';

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
      <TechStackList techStackList={techStacksDefault} />
      <TechStackInput />
      <Intro />
      <Experience />
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
      <Masonry>
        <Image src="https://picsum.photos/600/600/?random" />
        <Image src="https://picsum.photos/600/1100/?random" />
        <Image src="https://picsum.photos/300/400/?random" />
        <Image src="https://picsum.photos/600/400/?random" />
        <Image src="https://picsum.photos/600/900/?random" />
        <Image src="https://picsum.photos/600/300/?random" />
        <Image src="https://picsum.photos/400/100/?random" />
        <Image src="https://picsum.photos/600/600/?random" />
        <Image src="https://picsum.photos/600/800/?random" />
        <Image src="https://picsum.photos/600/1000/?random" />
        <Image src="https://picsum.photos/600/500/?random" />
        <Image src="https://picsum.photos/500/600/?random" />
      </Masonry>

      <Carousel
        transition={1000}
        width="500px"
        arrowLocation="mid-side"
        prevArrowIcon={<FaStickerMule size={50} />}
        nextArrowIcon={<FaSuse size={50} />}
      >
        <div style={{ width: '200px', padding: '15px' }}>
          <Item title="1" />
        </div>
        <Item title="2" />
        <Item title="3" />
      </Carousel>
      <CardWrap>
        <Card width="20em" height="20em" hover="down">
          This is Card component
        </Card>
        <Card width="20em" height="20em" shape="round-square" hover="zoom">
          You can use this components anyware
        </Card>
        <Card width="20em" height="20em" shape="round" hover="up">
          See official documentation for details
        </Card>
      </CardWrap>
      <Contact />
    </>
  );
}

export default App;

const CardWrap = styled.div`
  display: flex;
  padding: 3em;
  justify-content: space-around;
`;
