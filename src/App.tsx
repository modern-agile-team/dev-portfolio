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
  Skill,
  Channel,
  Channels,
} from './lib/index';

function App() {
  return (
    <div className="App">
      <Header id="Header" sideBarOption={{ mainTitle: 'Wellcome to my world!', iconName: 'ep:menu' }} />
      <Skill />

      <Channel />
      <Channels />

      <VisitorCounter />
      <VisitorComment id="['VisitorComment', 'akar-icons:comment-add']" />

      <CardWrap id="['CardWrap','bi:card-list']">
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

      <Intro id="['Intro', 'icon-park-outline:hi']" />

      <TechStackList id="['TechStackList', 'vscode-icons:file-type-reactjs']" />
      <TechStackInput />

      <Experience id="['Experience', 'ic:outline-work-history']" />

      <Gallery id="['Gallery', 'clarity:image-gallery-line']">
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

      <Masonry id="['Masonry', 'ri:layout-masonry-line']">
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

      <Carousel id="['Carousel', 'material-symbols:view-carousel-outline-rounded']" slideToShow={6}>
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

      <Contact id="['Contact', 'fluent:contact-card-16-regular']" />
    </div>
  );
}

export default App;

const CardWrap = styled.div`
  display: flex;
  padding: 3em;
  justify-content: space-around;
`;
