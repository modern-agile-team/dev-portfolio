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
  VisitorCounter,
  VisitorComment,
} from './lib/index';

function App() {
  return (
    <div className="App">
      <Header />
      <VisitorCounter />
      <VisitorComment />
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
      <TechStackList />
      <TechStackInput />
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
        <Image src="https://picsum.photos/500/600/?random" />
      </Masonry>

      <Carousel slideToShow={6}>
        <Card>0</Card>
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
        <Card>4</Card>
        <Card>5</Card>
        <Card>6</Card>
        <Card>7</Card>
        <Card>8</Card>
        <Card>9</Card>
      </Carousel>
      <Contact />
    </div>
  );
}

export default App;

const CardWrap = styled.div`
  display: flex;
  padding: 3em;
  justify-content: space-around;
`;
