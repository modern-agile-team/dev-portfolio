import React from 'react';
import styled from 'styled-components';
import './App.css';
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
      <Header />
      <div style={{ margin: '10px', display: 'flex' }}>
        <Skill
          titleColor="red"
          padding="50px"
          borderRadius="200px"
          borderColor="blue"
          iconColor="red"
          backgroundColor="#bddaf7"
          isHiddenTitle={true}
        />
      </div>
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

      <Intro
        id="['Intro', 'icon-park-outline:hi']"
        title="꿈을 꾸는 개발자"
        titleColor="white"
        shortIntro="안녕하세요 꿈꾸개 박우림이라고 합니다요옹"
        shortIntroColor="white"
        description={`네 그렇습니다.\n저는 꿈꾸개입니다\n이번에도 1등할거예요\n아자아자!!`}
        descriptionColor="black"
        descriptionBackgroundColor="#d5eaff"
        textAlign="left"
        backgroundColor="#091c18"
      />

      <TechStackList id="['TechStackList', 'vscode-icons:file-type-reactjs']" />
      <TechStackInput />

      <Experience id="['Experience', 'ic:outline-work-history']" historyTitleColor="red" headerTitleColor="red" dateColor="red" descriptionColor="red" />

      <Gallery id="['Gallery', 'clarity:image-gallery-line']" theme="mint-chocolate">
        <Item
          src="https://picsum.photos/500/300/?random"
          title="안녕하세요"
          titleColor="red"
          description="첫번째 아이템입니다."
          descriptionColor="orange"
          hoverdInnerBorderColor="red"
          redirectURL="/"
          textRisingSpeed={300}
          isTextRising={false}
        />
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
        <Image
          subhead="hi"
          subheadColor="red"
          subheadSize="16px"
          head="HEAD"
          headColor="blue"
          headSize="20px"
          headWeight="700"
        />
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

      <Contact
        id="['Contact', 'fluent:contact-card-16-regular']"
        titleColor="red"
        subTitleColor="red"
        buttonTextColor="red"
        buttonColor="black"
        buttonBorderColor="red"
        backgroundColor="black"
        channels={[
          { redirectUrl: '/', name: 'github', color: 'red', size: '24px', margin: '0px 6px', padding: '0px' },
          { redirectUrl: '/', name: 'youtube', color: 'red', size: '24px', margin: '0px 6px', padding: '0px' },
          { redirectUrl: '/', name: 'linkedin', color: 'red', size: '24px', margin: '0px 6px', padding: '0px' },
        ]}
        aboutMeInfos={[
          {
            title: 'Where I live',
            titleColor: 'red',
            description: 'Seoul, Republic of Korea',
            descriptionColor: 'red',
          },
          {
            title: 'Give me a call',
            titleColor: 'red',
            description: 'T. +82 (0)10 1234 5678',
            descriptionColor: 'red',
          },
          {
            title: 'Or, why don’t you email me?',
            titleColor: 'red',
            description: 'dev-portfolio@gmail.com',
            descriptionColor: 'red',
          },
        ]}
      />
    </div>
  );
}
export default App;

const CardWrap = styled.div`
  display: flex;
  padding: 3em;
  justify-content: space-around;
`;
