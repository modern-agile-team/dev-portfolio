import React from 'react';
import styled from 'styled-components';
import { MAIN } from './lib/common/theme';
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
      <Header
        id="Header"
        sideBarOption={{
          mainTitle: 'dev-portfolio',
          mainTitleColor: 'white',
          mainTitleAlign: 'center',
          mainTitleBorderColor: 'white',
          itemTextColor: 'white',
          itemTextAlign: 'left',
          itemBackgroundColor: MAIN.MAIN_COLOR,
          itemHoverdBackgroundColor: 'black',
        }}
      />
      <VisitorCounter />
      <VisitorComment id="VisitorComment" />
      <CardWrap id="CardWrap">
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
      <Intro id="Intro " />
      <TechStackList id="TechStackList" />
      <TechStackInput />
      <Experience id="Experience" />
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
      <Masonry id="Masonry">
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

      <Carousel id="Carousel">
        <Item title="1" />
        <Item title="2" />
        <Item title="3" />
      </Carousel>
      <Contact id="Contact1" />
      <Contact id="Contact2" />
      <Contact id="Contact3" />
      <Contact id="Contact4" />
      <Contact id="Contact5" />
      <Contact id="Contact6" />
      <Contact id="Contact7" />
      <Contact id="Contact8" />
      <Contact id="Contact9" />
      <Contact id="Contact10" />
      <Contact id="Contact11" />
      <Contact id="Contact12" />
      <Contact id="Contact13" />
      <Contact id="Contact14" />
      <Contact id="Contact15" />
      <Contact id="Contact16" />
      <Contact id="Contact17" />
      <Contact id="Contact18" />
      <Contact id="Contact19" />
      <Contact id="Contact20" />
    </div>
  );
}

export default App;

const CardWrap = styled.div`
  display: flex;
  padding: 3em;
  justify-content: space-around;
`;
