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
      nameOption: { name: 'Javascript', fontSize: '18px', logoSize: '24px', iconColor: '#E2D784' },
      progressBarOption: {
        rate: '45%',
        colorTo: '#E2D784',
        colorFrom: 'whitesmoke',
        width: '100%',
        height: '40px',
      },
    },
    {
      nameOption: { name: 'HTML-5', fontSize: '18px', logoSize: '24px', iconColor: '#E34F26' },
      progressBarOption: {
        rate: '30%',
        colorTo: '#E34F26',
        colorFrom: 'whitesmoke',
        width: '100%',
        height: '40px',
      },
    },
    {
      nameOption: { name: 'Nodejs', fontSize: '18px', logoSize: '24px', iconColor: '#339933' },
      progressBarOption: {
        rate: '85%',
        colorTo: '#339933',
        colorFrom: 'whitesmoke',
        width: '100%',
        height: '40px',
      },
    },
  ];
  return (
    <>
      <Header />
      <CardWrap>
        <Card width="20vw" height="20vw" hover="down" redirectURL="/1">
          This is Card component
        </Card>
        <Card width="20vw" height="20vw" shape="round-square" hover="zoom" redirectURL="/2">
          You can use this components anyware
        </Card>
        <Card width="20vw" height="20vw" shape="round" hover="up" redirectURL="/3">
          See official documentation for details
        </Card>
      </CardWrap>
      <Intro />
      <TechStackList techStackList={techStacksDefault} />
      {/* <TechStackInput /> */}
      <Experience />
      {/* <Gallery>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Gallery> */}
      <Masonry>
        <Image src="https://picsum.photos/600/600/?random" redirectURL="/1" />
        <Image src="https://picsum.photos/600/1100/?random" redirectURL="/2" />
        <Image src="https://picsum.photos/300/400/?random" />
        <Image src="https://picsum.photos/600/400/?random" />
        <Image src="https://picsum.photos/600/900/?random" />
        <Image src="https://picsum.photos/600/300/?random" />
        <Image src="https://picsum.photos/400/100/?random" />
        <Image src="https://picsum.photos/600/600/?random" />
        <Image src="https://picsum.photos/600/800/?random" />
        <Image src="https://picsum.photos/600/1000/?random" />
        {/* <Image src="https://picsum.photos/600/500/?random" />
        <Image src="https://picsum.photos/500/600/?random" />
        <Image src="https://picsum.photos/500/600/?random" /> */}
      </Masonry>

      {/* <Carousel transition={1000} arrowLocation="mid-side">
        <Item title="1" />
        <Item title="2" />
        <Item title="3" />
      </Carousel> */}
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
