# dev-porfolio

[![npm version](https://badge.fury.io/js/dev-portfolio.svg)](https://badge.fury.io/js/dev-portfolio)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![license_badge](https://img.shields.io/badge/license-MIT-lightgrey)
![react-iconify](https://img.shields.io/badge/iconify-react-red)

dev-portfolio is React library that helps you develop your web portfolio easily and quickly.

![ezgif com-gif-maker](https://user-images.githubusercontent.com/56839474/194718430-5404fa1f-c24b-48a0-8730-15db2d3bde00.gif)

## List

- <a href="#install">Installation</a>
- <a href="#usage">Usage</a>
- <a href="#components">Components</a>
- <a href="#example">Example</a>
- <a href="#guidelines-to-input-icons">Guidelines to input icons</a>
- <a href="#license">Licence</a>
- <a href="#contributor">Contributor</a>

## Install

1. Install only dev-portfolio library.

   `npm i dev-portfolio --save`

2. Install boiler-plate code by using `npx`.  
   If you want to see README.md of boiler-plate, go to the [create-dev-portfolio](https://github.com/modern-agile-team/create-dev-portfolio).

   `npx create-dev-portfolio <YOUR_APP_NAME>`

## Usage

```js
import { Header, Intro, Contact, ... } from 'dev-portfolio';

const App = () => {
  return (
    // The 'className' in the <div> tag surrounding the components of 'dev-portfolio' must be 'App'.
    // Only then can the SideBar in the <Header> component recognize id props and automatically assign all components into the SideBar.
    <div className="App">
      <Header />
      <Intro />
      <Contact />
      ...
    </div>
  );
}

export default App;
```

## Components

- <a href="#header">Header</a>
- <a href="#channel">Channel</a>
- <a href="#channels">Channels</a>
- <a href="#intro">Intro</a>
- <a href="#skill">Skill</a>
- <a href="#techstacklist">TechStackList</a>
- <a href="#experience">Experience</a>
- <a href="#carousel">Carousel</a>
- <a href="#gallery">Gallery</a>
- <a href="#masonry">Masonry</a>
- <a href="#image">Image</a>
- <a href="#item">Item</a>
- <a href="#card">Card</a>
- <a href="#contact">Contact</a>
- <a href="#visitorcounter">VisitorCounter</a>
- <a href="#visitorcomment">VisitorComment</a>
- <a href="#progressbar">ProgressBar</a>

### Header

<img width="1724" alt="스크린샷 2022-09-13 오전 2 05 09" src="https://user-images.githubusercontent.com/56839474/189714124-370954bf-e995-4c85-9246-36fb12732a34.png">

```js
import { Header } from 'dev-portfolio';

const logoOption = { ... };
const channels = [ ... ];
const sideBarOption = { ... };

const App = () => {
  return (
    <Header
      headerHeight="80px"
      headerWidth="100%"
      headerBackgroundColor="whitesmoke"
      logoOption={logoOption}
      channels={channels}
      sideBarOption={sideBarOption}
    />
  );
}

export default App;
```

| props                   | type                                                                                                                                                                                                                                                                                           | description                                                                                                                                 | default                         | note |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | ---- |
| `headerHeight`          | string                                                                                                                                                                                                                                                                                         | Header height style                                                                                                                         | `'80px'`                        |      |
| `headerWidth`           | string                                                                                                                                                                                                                                                                                         | Header width style                                                                                                                          | `'100%'`                        |      |
| `headerBackgroundColor` | string                                                                                                                                                                                                                                                                                         | Header background color style                                                                                                               | `'white'`                       |      |
| `logoOption`            | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/8b8f85015e356e649deee3e988cc3e33036a3b33/app/src/lib/common/types/ComponentTypes/Header/HeaderLogoType.ts#:~:text=export%20interface-,HeaderLogoPropsType,-extends%20HeaderLogoImgStyledPropsType%2C">LogoOptionPropsType</a> | You can customize the attrs such as logo and title by using logoOption props.                                                               | See "More about Header's Props" |      |
| `channels`              | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/8b8f85015e356e649deee3e988cc3e33036a3b33/app/src/lib/common/types/ComponentTypes/ChannelType.ts#:~:text=export%20interface-,ChannelType,-extends%20ChannelStyledType%20%7B">ChannelType[]</a>                                 | Enter the props of the channel components as an array of objects. Enter channel to express yourself, such as personal blog, linked-in, etc. | See "More about Header's Props" |      |
| `sideBarOption`         | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/src/lib/common/types/ComponentTypes/Header/SideBar/SideBarType.ts#1:~:text=SideBarOptionPropsType">SideBarOptionPropsType</a>                                                                                          | You can customize the attrs such as title and icon, item in sidebar by using sideBarOption props.                                           | See "More about Header's Props" |      |

### More about Header's props

#### logoOption example

<img width="180" alt="image" src="https://user-images.githubusercontent.com/83394348/193384391-ff363c34-9a28-40b1-b462-9d16a624799b.png">

```js
const logoOption = {
  redirectUrl: '/',
  logoImg: 'logo.png',
  logoHidden: false,
  title: 'dev-portfolio',
  logoMargin: '0px 16px 0px 16px',
  logoWidth: '50px',
  logoHeight: '50px',
  titleColor: 'black',
  titleSize: '24px',
  titleWeight: '800',
};
```

#### channels example

<img width="140" alt="스크린샷 2022-10-01 오후 1 55 33" src="https://user-images.githubusercontent.com/56839474/193393251-a182a876-956d-4ccf-a18d-b0f4a713ad3e.png">

For an example of channels, see: <a href="#more-about-channels-props">channels example</a>

#### sideBarOption example

<img width="45" alt="image" src="https://user-images.githubusercontent.com/83394348/193385692-028f193d-a82a-4a19-87cf-74bebfdd3cd7.png">
<img height="200px" alt="image" src="https://user-images.githubusercontent.com/83394348/193385720-7c68dc98-3264-4ea9-ba5c-1b0876347a91.png"
>

Way to change the sidebar icon, use iconName props.

Refer to the <a href="#guidelines-to-input-icons">guidelines.</a>

```js
const sideBarOption = {
  mainTitle: 'dev-portfolio',
  mainTitleSize: '24px',
  mainTitleColor: 'white',
  mainTitleAlign: 'left',
  mainTitleBorderColor: 'white',
  iconName: 'ant-design:menu-fold-outlined', //Refer to the guidelines.
  iconSize: '28px',
  iconColor: '#434521',
  iconMargin: '0px 12px 0px 12px',
  itemTextColor: 'white',
  itemTextAlign: 'left',
  itemBackgroundColor: '#434521',
  itemHoverdBackgroundColor: 'black',
  backgroundColor: '#434521',
};
```

### Channel

<img width="50" alt="스크린샷 2022-10-01 오후 1 55 20" src="https://user-images.githubusercontent.com/56839474/193393242-0aa4dabb-3de0-436d-89af-4729d9b5c36d.png">

```js
import { Channel } from 'dev-portfolio';

const App = () => {
  return <Channel redirectUrl="/" name="github" color="black" size="24px" margin="0px 6px" padding="0px" />;
};

export default App;
```

| props         | type   | description                           | default     | note |
| ------------- | ------ | ------------------------------------- | ----------- | ---- |
| `redirectUrl` | string | URL you want to redirect when clicked | `'/'`       |      |
| `name`        | string | Channel name                          | `'github'`  |      |
| `color`       | string | Channel icon color style              | `'black'`   |      |
| `size`        | string | Channel icon size style               | `'24px'`    |      |
| `margin`      | string | Channel margin style                  | `'0px 6px'` |      |
| `padding`     | string | Channel padding style                 | `'0px'`     |      |

### Channels

<img width="140" alt="스크린샷 2022-10-01 오후 1 55 33" src="https://user-images.githubusercontent.com/56839474/193393251-a182a876-956d-4ccf-a18d-b0f4a713ad3e.png">

```js
import { Channels } from 'dev-portfolio';

const channels = [ ... ];

const App = () => {
  return (
    <Channels
      channels={channels}
    />
  );
}

export default App;
```

| props      | type                                                                                                                                                                                                                                                           | description                                         | default                           | note |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | --------------------------------- | ---- |
| `channels` | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/8b8f85015e356e649deee3e988cc3e33036a3b33/app/src/lib/common/types/ComponentTypes/ChannelType.ts#:~:text=export%20interface-,ChannelType,-extends%20ChannelStyledType%20%7B">ChannelType[]</a> | Channel-only props such as Github and LinkedIn, etc | See "More about Channels's Props" |      |

### More about Channels Props

#### channels example

```js
const channels = [
  {
    redirectUrl: '/',
    name: 'github',
    color: 'black',
    size: '24px',
    margin: '0px 6px',
    padding: '0px',
  },
  {
    redirectUrl: '/',
    name: 'youtube',
    color: '#e03b35',
    size: '24px',
    margin: '0px 6px',
    padding: '0px',
  },
  {
    redirectUrl: '/',
    name: 'linkedin',
    color: '#1295cd',
    size: '24px',
    margin: '0px 6px',
    padding: '0px',
  },
];
```

### Intro

<img width="1718" alt="스크린샷 2022-09-13 오전 2 06 20" src="https://user-images.githubusercontent.com/56839474/189714308-db45a17e-02e5-4575-a616-64c2fb31cae5.png">

```js
import { Intro } from 'dev-portfolio';

const introOption = [ ... ];

const App = () => {
  return (
    <Intro
      id="Intro Component"
      textAlign="left"
      backgroundColor="whitesmoke"
      title="Introduction"
      shortIntro="Hello I am a developer enjoys growing up!"
      description="My name is OOO, BE developer good at Nodejs bla bla..."
      descriptionColor="black"
      descriptionBackgroundColor="black"
      textAlign="black"
      backgroundColor="black"
    />
  );
}

export default App;
```

| props                        | type   | description                                                                               | default                                                                                                                                                                                                                                                   | note                                                               |
| ---------------------------- | ------ | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| `id`                         | string | Name to be added to Sidebar                                                               |                                                                                                                                                                                                                                                           | See <a href="#guidelines-to-input-icons">Guideline</a> to add icon |
| `textAlign`                  | string | Intro text align style. You can choose one of the themes such as `'left'` and `'center'`. | `'left'`                                                                                                                                                                                                                                                  |                                                                    |
| `backgroundColor`            | string | Intro background color style.                                                             | `'whitesmoke'`                                                                                                                                                                                                                                            |                                                                    |
| `title`                      | string | Title of Intro section.                                                                   | `'Intro'`                                                                                                                                                                                                                                                 |                                                                    |
| `shortIntro`                 | string | Main text that can express you the best.                                                  | `'shortIntro that will captivate people'`                                                                                                                                                                                                                 |
| `description`                | string | Introduce yourself                                                                        | `'This props name is description.\nPlease write down your brief introduction here. If you want to change the line, type backslash-n between the letters. Also you want to move the letters to the center, change textAlign to center. code your dreams!'` |                                                                    |
| `titleColor`                 | string | Title text color style.                                                                   | `'black'`                                                                                                                                                                                                                                                 |                                                                    |
| `shortIntroColor`            | string | ShortIntro text color style.                                                              | `'black'`                                                                                                                                                                                                                                                 |                                                                    |
| `descriptionColor`           | string | Description text color style.                                                             | `'black'`                                                                                                                                                                                                                                                 |                                                                    |
| `descriptionBackgroundColor` | string | Description background color style.                                                       | `'white'`                                                                                                                                                                                                                                                 |                                                                    |

### Skill

<img width="200" alt="스크린샷 2022-10-01 오후 2 56 52" src="https://user-images.githubusercontent.com/56839474/193394980-6fc37f61-64f3-47b0-a2dd-be9394772de8.png">

```js
import { Skill } from 'dev-portfolio';

const App = () => {
  return (
    <Skill
      title="Javascript"
      titleSize="24px"
      isHiddenTitle={false}
      iconName="ion:logo-javascript"
      iconSize="40px"
      iconColor="#F0DB4F"
      margin="0px"
      padding="0px"
      titleColor="black"
      backgroundColor="white"
      borderColor="white"
      borderRadius="12px"
    />
  );
};

export default App;
```

| props             | type    | description                                                    | default                 | note                                                               |
| ----------------- | ------- | -------------------------------------------------------------- | ----------------------- | ------------------------------------------------------------------ |
| `title`           | string  | Main text that expresses the skill                             | `'javascript'`          |                                                                    |
| `titleSize`       | string  | Title size style                                               | `'24px'`                |                                                                    |
| `isHiddenTitle`   | boolean | If this value is set to True, you can hide the title.          | `false`                 |                                                                    |
| `iconName`        | string  | Enter the name of the icon you searched on the following site. | `'ion:logo-javascript'` | See <a href="#guidelines-to-input-icons">Guideline</a> to add icon |
| `iconSize`        | string  | Icon size style                                                | `'40px'`                |                                                                    |
| `iconColor`       | string  | Icon color style                                               | `'#F0DB4F'`             |
| `margin`          | string  | Skill margin style                                             | `'0px'`                 |                                                                    |
| `padding`         | string  | Skill padding style                                            | `'0px'`                 |                                                                    |
| `titleColor`      | string  | Title color style                                              | `'black'`               |                                                                    |
| `borderColor`     | string  | Skill border color style                                       | `'white'`               |                                                                    |
| `backgroundColor` | string  | Skill background color style                                   | `'white'`               |                                                                    |
| `borderRadius`    | string  | Skill border-radius style                                      | `'12px'`                |                                                                    |

### TechStackList

![techStackList](https://user-images.githubusercontent.com/56839474/189713771-ee5de07c-0256-464f-aa61-e5e133dda548.gif)

```js
import { TechStackList } from 'dev-portfolio';

const techStackList = [ ... ];

const App = () => {
  return (
    <TechStackList
      id="Tech Stack Component"
      gap="normal" // 'narrower' | 'narrow' | 'normal' | 'wide' | 'wider'
      techStackList={techStackList}
    />
  );
}

export default App;
```

| props           | type                                                                                                                                                                                                                  | description                                 | default                                                             | note                                                               |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------ |
| `id`            | string                                                                                                                                                                                                                | Name to be added to Sidebar                 |                                                                     | See <a href="#guidelines-to-input-icons">Guideline</a> to add icon |
| `gap`           | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/src/lib/common/types/ComponentTypes/TechStack/TechStackListType.ts#:~:text=type-,TechStackGapType,-%3D%20%27narrower%27">TechStackGapType</a> | Spacing between TechStacks in TechStackList | `'normal'`                                                          |
| `techStackList` | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/src/lib/common/types/ComponentTypes/TechStack/TechStackNameType.ts#:~:text=TechStackNamePropsType">TechStackPropsType[]</a>                   | Array of TechStacks                         | <a href="#techStackList example">See "More about techStackList"</a> |                                                                    |

### More about TechStackList's props

#### techStackList example

```js
const techStackList = [
  {
    nameOption: {
      name: 'Javascript',
      nameTextColor: 'black',
      logoName: 'Javascript',
      fontSize: '18px',
      logoSize: '24px',
    },
    progressBarOption: {
      rateText: '45%',
      rateTextColor: 'black',
      isHiddenRateText: false,
      backgroundColor: 'black',
      colorTo: '#E2D784',
      colorFrom: 'whitesmoke',
      width: '100%',
      height: '40px',
      animationType: 'fill-up-wave',
      isBlinking: true,
    },
  },
  {
    nameOption: { name: 'HTML5', nameTextColor: 'black', logoName: 'HTML-5', fontSize: '18px', logoSize: '24px' },
    progressBarOption: {
      rateText: '30%',
      rateTextColor: 'black',
      isHiddenRateText: false,
      backgroundColor: 'black',
      colorTo: '#E34F26',
      colorFrom: 'whitesmoke',
      width: '100%',
      height: '40px',
      animationType: 'fill-up-wave',
      isBlinking: true,
    },
  },
  {
    nameOption: { name: 'Nodejs', nameTextColor: 'black', logoName: 'Nodejs', fontSize: '18px', logoSize: '24px' },
    progressBarOption: {
      rateText: '85%',
      rateTextColor: 'black',
      isHiddenRateText: false,
      backgroundColor: 'black',
      colorTo: '#339933',
      colorFrom: 'whitesmoke',
      width: '100%',
      height: '40px',
      animationType: 'fill-up-wave',
      isBlinking: true,
    },
  },
];
```

#### gap example

 <img width="100%" alt="스크린샷 2022-08-20 오후 12 22 27" src="https://user-images.githubusercontent.com/56839474/185727226-b401ce50-50fb-4572-b78e-692ff6cf63ef.png">

```js
// 'narrower' | 'narrow' | 'normal' | 'wide' | 'wider';
const gap = 'normal';
```

### Experience

<img width="940" alt="image" src="https://user-images.githubusercontent.com/83394348/193396422-4c5ad8f8-d679-4575-8a78-b016cf5aee83.png">

```js
import { Experience } from 'dev-portfolio';

const historyList = [ ... ];

const App = () => {
  return (
    <Experience
      id="Experience Component"
      title="Experience Title"
      textAlign="left"
      theme="vertical" // 'basic' | 'box' | 'vertical'
      shape="square" // 'square' | 'round-square'
      headerTitleColor="black"
      historyTitleColor="black"
      dateColor="black"
      descriptionColor="black"
      historyList={historyList}
    />
  );
}

export default App;
```

| props               | type                                                                                                                                                                                                                      | description                                                                                  | default                             | note                                                               |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ----------------------------------- | ------------------------------------------------------------------ |
| `id`                | string                                                                                                                                                                                                                    | Name to be added to Sidebar                                                                  |                                     | See <a href="#guidelines-to-input-icons">Guideline</a> to add icon |
| `title`             | string                                                                                                                                                                                                                    | Main title text of Experience Component                                                      | `'Experience'`                      |
| `textAlign`         | string                                                                                                                                                                                                                    | Experience Text align                                                                        | `'left'`                            |                                                                    |
| `theme`             | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/src/lib/common/types/ComponentTypes/ExperienceType.ts#:~:text=type-,ExperienceThemeType,-%3D%20%27basic%27">ExperienceThemeType</a>               | You can decorate your experience with a variety of theme such as 'basic', 'box', 'vertical'. | `'basic'`                           |                                                                    |
| `shape`             | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/src/lib/common/types/ComponentTypes/ExperienceType.ts#:~:text=type-,ExperienceShapeType,-%3D%20%27square%27">ExperienceVerticalOptionType</a>     | Shape of card specially used in 'vertical' theme such as 'square', 'round-square'.           | `'square'`                          |                                                                    |
| `headerTitleColor`  | string                                                                                                                                                                                                                    | Color of title in Experience component                                                       | `'black'`                           |                                                                    |
| `historyTitleColor` | string                                                                                                                                                                                                                    | Color of title at historyList                                                                | `'black'`                           |                                                                    |
| `dateColor`         | string                                                                                                                                                                                                                    | Color of date in history List                                                                | `'black'`                           |                                                                    |
| `descriptionColor`  | string                                                                                                                                                                                                                    | Color of description in history List                                                         | `'black'`                           |                                                                    |
| `historyList`       | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/src/lib/common/types/ComponentTypes/ExperienceType.ts#:~:text=export%20interface-,ExperienceHistoryListType,-%7B">ExperienceHistoryListType[]</a> | You can add your history data such as date, title, description, etc.                         | See "More about Experience's Props" |                                                                    |

### More about Experience's props

#### historyList example

```js
const historyList = [
  {
    startDate: '2022.01.01',
    endDate: '2022.03.10',
    title: 'this is title',
    description:
      'This prop name is des.\nWrite down the additional explanation you want here.\nYou can break the line to backslash-n.',
  },
  {
    startDate: '2020.02',
    title: 'this is title',
    description: `If you just want to write the date and time without the text,\ndon't worry !\nYou can write a des props just by emptying it.\nAn example is shown below.`,
  },
  {
    startDate: '2018',
    endDate: '2019.12',
    title: 'this is title',
  },
];
```

### Carousel

![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/56839474/189905929-3732d317-a545-42e4-87ff-f3bb085e4063.gif)

```js
import { Carousel, Image } from 'dev-portfolio';

const App = () => {
  return (
    <Carousel
      id="Carousel Component"
      width="65%"
      transition={1000} // ms
      autoplaySpeed={3000} // ms
      slideToShow={1}
      isArrowShow={true}
      isAutoplay={false}
      isAutoplayControl={true}
      arrowLocation="mid-side" // 'bottom' | 'mid-side' | 'top' | 'bottom-side' | 'top-side'
      playerLocation="bottom-mid" // 'bottom-mid' | 'bottom-left' | 'bottom-right' | 'top-mid' | 'top-left' | 'top-right'
      prevArrowIcon={<YOUR_COMPONENT />} // ReactElement
      nextArrowIcon={<YOUR_COMPONENT />} // ReactElement
      startAutoplayIcon={<YOUR_COMPONENT />} // ReactElement
      pauseAutoplayIcon={<YOUR_COMPONENT />} // ReactElement
    >
      // Must insert components customized
      <YOUR_COMPONENT />
      <Image src="anything.png" /> // Component of dev-portfolio ...
    </Carousel>
  );
};

export default App;
```

| props               | type                                                                                                                                                                                                                                                                                                               | description                                  | default              | note                                                               |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | -------------------- | ------------------------------------------------------------------ |
| `id`                | string                                                                                                                                                                                                                                                                                                             | Name to be added to Sidebar                  |                      | See <a href="#guidelines-to-input-icons">Guideline</a> to add icon |
| `width`             | string                                                                                                                                                                                                                                                                                                             | Carousel width                               | `'100%'`             |                                                                    |
| `transition`        | number                                                                                                                                                                                                                                                                                                             | Transition animation speed                   | `1000`               | Unit : ms                                                          |
| `autoplaySpeed`     | number                                                                                                                                                                                                                                                                                                             | Time to stay in a item                       | `3000`               | Unit : ms                                                          |
| `slideToShow`       | number                                                                                                                                                                                                                                                                                                             | Number of item to show at once               | `1`                  |                                                                    |
| `isArrowShow`       | boolean                                                                                                                                                                                                                                                                                                            | Flag for whether to show buttons             | `true`               |                                                                    |
| `isAutoplay`        | boolean                                                                                                                                                                                                                                                                                                            | Flag for play carousel automatically         | `false`              |
| `isAutoplayControl` | boolean                                                                                                                                                                                                                                                                                                            | Flag for whether to show carousel player     | `true`               |
| `arrowLocation`     | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/src/lib/common/types/ComponentTypes/CarouselType.ts#:~:text=%27bottom%27%20%7C%20%27mid%2Dside%27%20%7C%20%27top%27%20%7C%20%27bottom%2Dside%27%20%7C%20%27top%2Dside%27">ArrowLocationType</a>                                            | Location of arrow icon                       | `'mid-side'`         |                                                                    |
| `playerLocation`    | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/src/lib/common/types/ComponentTypes/CarouselType.ts#:~:text=%27bottom%2Dmid%27%20%7C%20%27bottom%2Dleft%27%20%7C%20%27bottom%2Dright%27%20%7C%20%27top%2Dmid%27%20%7C%20%27top%2Dleft%27%20%7C%20%27top%2Dright%27">PlayerLocationType</a> | Location of Play icon                        | `'bottom-mid'`       |                                                                    |
| `prevArrowIcon`     | ReactElement                                                                                                                                                                                                                                                                                                       | Icon Component for moving into previous item | `<FiChevronLeft />`  |                                                                    |
| `nextArrowIcon`     | ReactElement                                                                                                                                                                                                                                                                                                       | Icon Component for moving into next item     | `<FiChevronRight />` |                                                                    |
| `startAutoplayIcon` | ReactElement                                                                                                                                                                                                                                                                                                       | Icon Component for starting autoplay         | `<TbPlayerPlay />`   |                                                                    |
| `pauseAutoplayIcon` | ReactElement                                                                                                                                                                                                                                                                                                       | Icon Component for pause autoplay            | `<TbPlayerPause />`  |                                                                    |

### Gallery

<img width="1714" alt="스크린샷 2022-09-13 오전 2 08 28" src="https://user-images.githubusercontent.com/56839474/189715251-5145031f-d602-414b-8cd7-ede5bd78c5ab.png">

```js
import { Gallery, Item } from 'dev-portfolio';

const App = () => {
  return (
    <Gallery
      id="Gallery Component"
      column={3}
      gap="normal" // 'wider' | 'wide' | 'normal' | 'narrow' | 'narrower'
      theme="mid-night" // 'mid-night' | 'blossom' | 'fruits' | 'bare-bare' | 'mint-chocolate'
      padding="2em 10em"
    >
      // Must insert components customized
      <YOUR_COMPONENT />
      <Item /> // Component of dev-portfolio ...
    </Gallery>
  );
};

export default App;
```

| props     | type                                                                                                                                                                                                  | description                                                                                                                                                                             | default       | note                                                               |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------------------ |
| `id`      | string                                                                                                                                                                                                | Name to be added to Sidebar                                                                                                                                                             |               | See <a href="#guidelines-to-input-icons">Guideline</a> to add icon |
| `column`  | number                                                                                                                                                                                                | Number of vertical lines                                                                                                                                                                | `3`           |                                                                    |
| `gap`     | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/src/lib/common/types/ComponentTypes/GalleryType.ts#:~:text=type-,GalleryGapType,-%3D%20%27wider%27">GalleryGapType</a>        | Spacing between items in Gallery                                                                                                                                                        | `'normal'`    |                                                                    |
| `theme`   | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/src/lib/common/types/ComponentTypes/GalleryType.ts#:~:text=type-,GalleryThemeType,-%3D%20%27mid%2Dnight">GalleryThemeType</a> | You can choose the color of your customized components in Gallery when they are hoverd with a variety of theme such as 'mid-night', 'blossom', 'fruits', 'bare-bare', 'mint-chocolate'. | `'mid-night'` |                                                                    |
| `padding` | string                                                                                                                                                                                                | Gallery padding                                                                                                                                                                         | `'2em 10em'`  |                                                                    |

### Masonry

<img width="1674" alt="스크린샷 2022-09-13 오전 2 08 45" src="https://user-images.githubusercontent.com/56839474/189715278-2e74562d-7d46-482b-8222-01251d538f1e.png">

```js
import { Masonry, Image } from 'dev-portfolio';

const App = () => {
  return (
    <Masonry id="Masonry Component" column={4} padding="2em 4em">
      /* Must insert components customized */
      <YOUR_COMPONENT />
      <Image src="anything.png" redirectURL="/" />
      /* Component of dev-portfolio */
      <Image src="https://picsum.photos/900/1100/?random" redirectURL="/" />
      /* Component of dev-portfolio */
    </Masonry>
  );
};

export default App;
```

| props     | type   | description                 | default     | note                                                               |
| --------- | ------ | --------------------------- | ----------- | ------------------------------------------------------------------ |
| `id`      | string | Name to be added to Sidebar |             | See <a href="#guidelines-to-input-icons">Guideline</a> to add icon |
| `column`  | number | Number of vertical lines    | `4`         |
| `padding` | string | Masonry padding             | `'2em 4em'` |                                                                    |

### Image

![ezgif com-gif-maker (5)](https://user-images.githubusercontent.com/56839474/189905432-400ef4b5-6f6f-4237-a146-d1376a3a389e.gif)

```js
import { Image } from 'dev-portfolio';

const App = () => {
  return (
    <Image
      src="https://picsum.photos/500/600/?random"
      head="Write your head"
      subhead="Write your subhead"
      redirectURL="/"
      noShowHead={false}
      zoomWhenHover={false}
      headSize="20px"
      headColor="black"
      headWeight="bold"
      subheadSize="14px"
      subheadColor="white"
    />
  );
};

export default App;
```

| props           | type    | description                                         | default                | note |
| --------------- | ------- | --------------------------------------------------- | ---------------------- | ---- |
| `src`           | string  | Image source url                                    |                        |      |
| `head`          | string  | Main Title Text                                     | `'Write your head'`    |      |
| `headSize`      | string  | Head text size style                                | `'20px'`               |      |
| `headColor`     | string  | Head color style                                    | `'black'`              |      |
| `headWeight`    | string  | Head font weight style                              | `'700'`                |      |
| `subhead`       | string  | Sub Title Text                                      | `'Write your subhead'` |      |
| `subheadSize`   | string  | Subhead text size style                             | `'14px'`               |      |
| `subheadColor`  | string  | Subhead text color style                            | `'black'`              |      |
| `redirectURL`   | string  | URL to redirect                                     | `'/'`                  |      |
| `noShowHead`    | boolean | Flag for whether to hide texts                      | `false`                |      |
| `zoomWhenHover` | boolean | Flag for whether to zoom image when hovered on item | `false`                |      |

### Item

![ezgif com-gif-maker](https://user-images.githubusercontent.com/56839474/189906937-e0645174-5473-4a70-b373-c05eefd4ac38.gif)

```js
import { Item } from 'dev-portfolio';

const App = () => {
  return (
    <Item
      src="https://picsum.photos/600/600/?random"
      title="This is title"
      description="description"
      redirectURL="/"
      textRisingSpeed={300}
      isTextRising={false}
      descriptionColor="white"
      hoverdInnerBorderColor="white"
    />
  );
};

export default App;
```

| props                    | type    | description                            | default                                   | note |
| ------------------------ | ------- | -------------------------------------- | ----------------------------------------- | ---- |
| `src`                    | string  | Image source url                       | `'https://picsum.photos/600/600/?random'` |      |
| `title`                  | string  | Main Title Text                        | `'This is title'`                         |
| `description`            | string  | Description Text                       | `'description'`                           |      |
| `redirectURL`            | string  | URL to redirect                        | `'/'`                                     |      |
| `textRisingSpeed`        | number  |                                        | `300`                                     |
| `isTextRising`           | boolean |                                        | `false`                                   |
| `descriptionColor`       | string  | Description text color style           | `'white'`                                 |      |
| `hoverdInnerBorderColor` | string  | Inner border color of item when hoverd | `'white'`                                 |      |

### Card

<img width="1716" alt="스크린샷 2022-09-13 오전 2 09 54" src="https://user-images.githubusercontent.com/56839474/189715442-c5e8b36c-b602-46e3-89f8-5c30836a60fc.png">

```js
import { Card } from 'dev-portfolio';

const App = () => {
  return (
    <Card
      width="10em"
      height="10em"
      redirectURL="/"
      shape="square" // 'square' | 'round-square' | 'round'
      hover="none" // 'up' | 'down' | 'zoom'
    />
  );
};

export default App;
```

| props         | type                                                                                                                                                                                       | description                                                                                  | default    | note |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- | ---------- | ---- |
| `width`       | string                                                                                                                                                                                     | Card width                                                                                   | `'10em'`   |      |
| `height`      | string                                                                                                                                                                                     | Card height                                                                                  | `'10em'`   |      |
| `redirectURL` | string                                                                                                                                                                                     | URL to redirect                                                                              | `'/'`      |
| `shape`       | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/src/lib/common/types/ComponentTypes/CardType.ts#:~:text=type-,CardShapeType,-%3D%20%27square%27">CardShapeType</a> | You can decorate shape of Card a variety of theme such as 'square', 'round-square', 'round'. | `'square'` |      |
| `hover`       | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/src/lib/common/types/ComponentTypes/CardType.ts#:~:text=type-,CardHoverType,-%3D%20%27up%27">CardHoverType</a>     | You can make an effect on Card a variety of theme such as 'up', 'down', 'zoom'.              | `'none'`   |      |

### Contact

<img width="100%" alt="스크린샷 2022-08-20 오후 12 32 19" src="https://user-images.githubusercontent.com/56839474/185727384-1b024c72-83e3-4ef9-84ac-68f832d8df3e.png">

```js
import { Contact } from 'dev-portfolio';

const channels = [ ... ];
const aboutMeInfos = [ ... ];

const App = () => {
  return (
    <Contact
      id="Contact Component"
      backgroundColor="whitesmoke"
      title="Hello My name is OOO"
      subTitle="If you're interested in me, please press the button below :D"
      buttonText="Want to work with me?"
      email="abc@dev-portfolio.com"
      channels={channels}
      aboutMeInfos={aboutMeInfos}
      titleColor='black'
      subTitleColor='black'
      buttonTextColor='black'
      buttonColor='black'
      buttonBorderColor='black'
    />
  );
};

export default App;
```

| props               | type                                                                                                                                                                                                                                                           | description                                          | default                                                          | note                                                               |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------ |
| `id`                | string                                                                                                                                                                                                                                                         | Name to be added to Sidebar                          |                                                                  | See <a href="#guidelines-to-input-icons">Guideline</a> to add icon |
| `backgroundColor`   | string                                                                                                                                                                                                                                                         | Contact Background Color                             | `'whitesmoke'`                                                   |                                                                    |
| `title`             | string                                                                                                                                                                                                                                                         | Main title text of your contacts                     | `'Hello, my name is DEV_PORTFOLIO'`                              |                                                                    |
| `titleColor`        | string                                                                                                                                                                                                                                                         | Title color style                                    | `'black'`                                                        |                                                                    |
| `subTitle`          | string                                                                                                                                                                                                                                                         | Sub title text                                       | `'If you're interested in me, please press the button below :D'` |                                                                    |
| `subTitleColor`     | string                                                                                                                                                                                                                                                         | Sub title text color style                           | `'black'`                                                        |                                                                    |
| `email`             | string                                                                                                                                                                                                                                                         | Your Email                                           | `'abc@dev-portfolio.com'`                                        |                                                                    |
| `buttonText`        | string                                                                                                                                                                                                                                                         | Text of button that function as a link to your email | `'Want to work with me?'`                                        |                                                                    |
| `buttonTextColor`   | string                                                                                                                                                                                                                                                         | Button text color style                              | `'white'`                                                        |                                                                    |
| `buttonBorderColor` | string                                                                                                                                                                                                                                                         | Button border color style                            | `'black'`                                                        |                                                                    |
| `channels`          | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/8b8f85015e356e649deee3e988cc3e33036a3b33/app/src/lib/common/types/ComponentTypes/ChannelType.ts#:~:text=export%20interface-,ChannelType,-extends%20ChannelStyledType%20%7B">ChannelType[]</a> | Channel-only props such as Github and LinkedIn, etc  | See "More about Contact's Props"                                 |
| `aboutMeInfos`      | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/8b8f85015e356e649deee3e988cc3e33036a3b33/app/src/lib/common/types/ComponentTypes/Contact/AboutMeInfoType.ts#:~:text=AboutMeInfoPropsType">AboutMeInfoPropsType[]</a>                          | Your personal information like TEL, Home etc         | See "More about Contact's Props"                                 |

### More about Contact's props

#### channels example

 <img width="200" alt="channels" src="https://user-images.githubusercontent.com/83394348/193384430-55a671a8-0a97-45b5-8590-f12de4526057.png">

```js
const channels = [
  { name: 'github', redirectUrl: 'https://', color: '#181717BB', size: '24px' },
  { name: 'naver', redirectUrl: 'https://', color: '#47A141BB', size: '24px' },
  { name: 'facebook', redirectUrl: 'https://', color: '#1877F2BB', size: '24px' },
  { name: 'youtube', redirectUrl: 'https://', color: '#FF0000BB', size: '24px' },
];
```

#### aboutMeInfos example

 <img width="200" alt="aboutMeInfos" src="https://user-images.githubusercontent.com/83394348/193386818-ea657a2c-0544-4eca-9225-688ce0a58958.png">

```js
const aboutMeInfos = [
    {
      title: 'Where I live',
      description: 'Gangdong-gu, Seoul, Republic of Korea',
    },
    {
      title: 'Give me a call',
      description: 'T. +82 (0)10 1234 5678',
    },
    {
      title: 'Or, why don’t you email me?',
      description: 'dev-portfolio@gmail.com',
    },
  ],
```

### VisitorCounter

<img width="200" alt="visitor-counter" src="https://user-images.githubusercontent.com/83394348/189859070-d9230ec1-4750-4e7b-870c-e21e306c1c65.png">

```js
import { VisitorCounter } from 'dev-portfolio';

const App = () => {
  return (
    <VisitorCounter
      title="hits"
      theme="big-size" // 'default' | 'big-size' | 'simple'
      todayVisitor={0} // Your fetched variable
      totalVisitor={123} // Your fetched variable
      todayTitle="today"
      totalTitle="total"
      backgroundColor="#91c230c4"
      todayVisitorColor="red"
      totalVisitorColor="red"
      todayTitleColor="black"
      totalTitleColor="black"
      size="14px" // include: px
    />
  );
};

export default App;
```

| props               | type                                                                                                                                                                                                                      | description                                                   | default       | note                      |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ------------- | ------------------------- | --- |
| `title`             | string                                                                                                                                                                                                                    | Hit title used in 'default' and 'big-size'                    | `'hits'`      |                           |
| `theme`             | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/src/lib/common/types/ComponentTypes/VisitorCounterType.ts#:~:text=type-,VisitorCounterThemeType,-%3D%20%27default%27">VisitorCounterThemeType</a> | Visitor Counter theme: 'default', 'big-size', 'simple'        | `'default'`   |                           |
| `todayVisitor`      | number                                                                                                                                                                                                                    | Number of today's visitors                                    | `0`           | fetched variable          |
| `totalVisitor`      | number                                                                                                                                                                                                                    | Number of total's visitors                                    | `123`         | fetched variable          |
| `todayTitle`        | string                                                                                                                                                                                                                    | Title of today visit count used in 'big-size' and 'simple'    | `'today'`     |                           |
| `totalTitle`        | string                                                                                                                                                                                                                    | Title of total visit count used in 'big-size' and 'simple'    | `'total'`     |                           |
| `backgroundColor`   | string                                                                                                                                                                                                                    | Background color of todayTitle                                | `'#91c230c4'` |                           |     |
| `todayVisitorColor` | string                                                                                                                                                                                                                    | Today visitor color style                                     | `'red'`       |                           |     |
| `totalVisitorColor` | string                                                                                                                                                                                                                    | Total visitor color style                                     | `'red'`       |                           |     |
| `todayTitleColor`   | string                                                                                                                                                                                                                    | Today title color style                                       | `'black'`     |                           |     |
| `totalTitleColor`   | string                                                                                                                                                                                                                    | Total title color style                                       | `'black'`     |                           |     |
| `size`              | string                                                                                                                                                                                                                    | Font size and component size in the visitor counter component | `'14px'`      | Make sure to include 'px' |

### More about VisitorCounter's props

#### theme example

```js
// 'default' | 'big-size' | 'simple'
const theme = 'default';
```

#### VisitorCounter example

```js
const visitorCounter = {
  title: 'hits',
  todayTitle: 'today',
  totalTitle: 'total',
};
```

### VisitorComment

![visitor-comment](https://user-images.githubusercontent.com/83394348/189853162-d52851eb-bfbe-4bc7-9024-e592c4057cbb.gif)

```js
import { VisitorComment } from 'dev-portfolio';

const commentList = [ ... ];

const App = () => {
  return (
    <VisitorComment
      id="VisitorComment Component"
      theme="basic" // 'basic' | 'box' | 'vertical'
      backgroundColor="whitesmoke"
      inputBackgroundColor="White"
      inputFontColor="black"
      inputPlacehoderColor="black"
      userInputLineColor="#b4b4b4a2"
      buttonColor="#1877f2"
      listBackgroundColor="white"
      listCommentColor="black"
      listNicknameColor="#959595"
      listDateColor="#959595"
      progressbarColor="#5f5f5f"
      isShowScrollDownIcon={true}
      scrollDownIconColor='black'
      descriptionPlaceholder='write your description...'
      nicknamePlaceholder='ID'
      passwordPlaceholder='PW'
      commentList={commentList} // Your fetched variable
      comment='this portfolio is very nice' // Data you entered in comment-input
      nickname='dev-portfolio' // Data you entered in comment-input
      password='1234' // Data you entered in comment-input
      handleCreateComment={handleCreateComment} // Event handling variable
      handleChangeDescription={handleChangeDescription} // Event handling variable
      handleChangeNickname={handleChangeNickname} // Event handling variable
      handleChangePassword={handleChangePassword} // Event handling variable
    />
  );
}

export default App;
```

| props                     | type                                                                                                                                                                                                                    | description                                                                                                                                  | default                                 | note                                                               |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | ------------------------------------------------------------------ |
| `id`                      | string                                                                                                                                                                                                                  | Name to be added to Sidebar                                                                                                                  |                                         | See <a href="#guidelines-to-input-icons">Guideline</a> to add icon |
| `theme`                   | <a href='https://github.com/modern-agile-team/dev-portfolio/blob/master/src/lib/common/types/ComponentTypes/VisitorCommentType.ts#:~:text=type-,VisitorCommentThemeType,-%3D%20%27basic%27'>VisitorCommentThemeType</a> | Visitor Comment theme: 'basic', 'box', 'vertical'                                                                                            | `'basic'`                               |                                                                    |
| `backgroundColor`         | string                                                                                                                                                                                                                  | VisitorComment background-color                                                                                                              | `'whitesmoke'`                          |                                                                    |
| `inputBackgroundColor`    | string                                                                                                                                                                                                                  | Background color of guest book preparation column                                                                                            | `'White'`                               |                                                                    |
| `inputFontColor`          | string                                                                                                                                                                                                                  | Font Color in input box when create comment, user infomation                                                                                 | `'Black'`                               |                                                                    |
| `inputPlacehoderColor`    | string                                                                                                                                                                                                                  | Placehoder font Color in input comment, user infomation boxes                                                                                | `'Black'`                               |                                                                    |
| `userInputLineColor`      | string                                                                                                                                                                                                                  | Underline color in the User Information field                                                                                                | `'#b4b4b4a2'`                           |                                                                    |
| `buttonColor`             | string                                                                                                                                                                                                                  | Font color of send button                                                                                                                    | `'#1877f'`                              |                                                                    |
| `listBackgroundColor`     | string                                                                                                                                                                                                                  | Background color of comment list                                                                                                             | `'white'`                               |                                                                    |
| `listCommentColor`        | string                                                                                                                                                                                                                  | Color of comment in comment list                                                                                                             | `'black'`                               |                                                                    |
| `listNicknameColor`       | string                                                                                                                                                                                                                  | Color of nickname in comment list                                                                                                            | `'#959595'`                             |                                                                    |
| `listDateColor`           | string                                                                                                                                                                                                                  | Color of date in comment list                                                                                                                | `'#959595'`                             |                                                                    |
| `progressbarColor`        | string                                                                                                                                                                                                                  | The color of the progress bar that is generated when a scroll event occurs                                                                   | `'#5f5f5f'`                             |                                                                    |
| `isShowScrollDownIcon`    | boolean                                                                                                                                                                                                                 | Whether to display icons that are generated when a scroll event occurs                                                                       | `true`                                  |                                                                    |
| `scrollDownIconColor`     | string                                                                                                                                                                                                                  | Color in ScrollDown Icon                                                                                                                     | `'black'`                               | Only works when isShowScrollDownIcon is true                       |
| `descriptionPlaceholder`  | string                                                                                                                                                                                                                  | Placeholder of description area                                                                                                              | `'write your description...'`           |                                                                    |
| `nicknamePlaceholder`     | string                                                                                                                                                                                                                  | Placeholder of nickname area                                                                                                                 | `'ID'`                                  |                                                                    |
| `passwordPlaceholder`     | string                                                                                                                                                                                                                  | Placeholder of password area                                                                                                                 | `'PW'`                                  |                                                                    |
| `commentList`             | <a href='https://github.com/modern-agile-team/dev-portfolio/blob/master/src/lib/common/types/ComponentTypes/VisitorCommentType.ts#:~:text=export%20interface-,VisitorCommentListType,-%7B'>VisitorCommentListType</a>   | List of Comment such as description, nickname, date                                                                                          | See "More about VisitorComment's Props" | fetched variable                                                   |
| `comment`                 | string                                                                                                                                                                                                                  | Please put the data you entered in the comment-input into this props. This will sends an http request to the server and be stored in the DB  | `'this portfolio is very nice'`         | Data you entered in comment-input                                  |
| `nickname`                | string                                                                                                                                                                                                                  | Please put the data you entered in the nickname-input into this props. This will sends an http request to the server and be stored in the DB | `'dev-portfolio'`                       | Data you entered in nickname-input                                 |
| `password`                | string                                                                                                                                                                                                                  | Please put the data you entered in the password-input into this props. This will sends an http request to the server and be stored in the DB | `'1234'`                                | Data you entered in password-input                                 |
| `handleCreateComment`     | (e?: React.MouseEvent<HTMLButtonElement>) => void                                                                                                                                                                       | Comments Props for event handling                                                                                                            |                                         |                                                                    |
| `handleChangeDescription` | (e?: React.ChangeEvent<HTMLElement>) => void                                                                                                                                                                            | Description Props for event handling                                                                                                         |                                         |                                                                    |
| `handleChangeNickname`    | (e?: React.ChangeEvent<HTMLElement>) => void                                                                                                                                                                            | Nickname Props for event handling                                                                                                            |                                         |                                                                    |
| `handleChangePassword`    | (e?: React.ChangeEvent<HTMLElement>) => void                                                                                                                                                                            | Password Props for event handling                                                                                                            |                                         |                                                                    |

### More about VisitorComment's props

#### commentList example

List of Comment such as description, nickname, date.  
This props is fetched datas from the backend.

```js
const commentList: [
    {
      description: `The scroll customization method is the same as the teckstack component progress bar, so please use it!`,
      nickname: 'woorim960',
      date: '2022-08-26',
    },
    {
      description: `Progress bar customization is also possible when creating a scroll.`,
      nickname: 'seohyunsim',
      date: '2022-08-26',
    },
    {
      description: `Likewise, there are three types of themes: basic, box, and vertical.`,
      nickname: 'jisu3817',
      date: '2022-08-26',
    },
    {
      description: 'Refer to dev-portfolio README.md for instructions on building a personal server.',
      nickname: 'soonki-98',
      date: '2022-08-26',
    },
    {
      description: `A personal server can be built through environmental variables, and visitors can write their text and nicknames.`,
      nickname: 'woorim960',
      date: '2022-08-26',
    },
    {
      description: 'By looking at your portfolio, visitors can leave a guest book.',
      nickname: 'seohyunsim',
      date: '2022-08-26',
    },
  ],
};
```

### ProgressBar

```js
import { ProgressBar } from 'dev-portfolio';

const App = () => {
  return (
    <ProgressBar
      rateText="100%"
      rateTextColor="black"
      isHiddenRateText={false}
      backgroundColor="whitesmoke"
      colorFrom="white"
      colorTo="red"
      width="100%"
      height="40px"
      animationType="wave" // "wave" | "fill-up" | "fill-up-wave" | "none"
      isBlinking={false}
    />
  );
};

export default App;
```

| props              | type                                                                                                                                                                                                | description                                      | default      | note |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ------------ | ---- |
| `rateText`         | string                                                                                                                                                                                              | How well you handle the skill (unit: %)          | `'100%'`     |      |
| `rateTextColor`    | string                                                                                                                                                                                              | rateText color style                             | `'black'`    |      |
| `isHiddenRateText` | boolean                                                                                                                                                                                             | Whether show rate in progressbar                 | `true`       |      |
| `backgroundColor`  | string                                                                                                                                                                                              | ProgressBar's background color style             | `whitesmoke` |      |
| `colorFrom`        | string                                                                                                                                                                                              | Start color of blinking animation of progressbar | `'white'`    |      |
| `colorTo`          | string                                                                                                                                                                                              | End color of blinking animation of progressbar   | `'red'`      |
| `width`            | string                                                                                                                                                                                              | Progressbar css width                            | `'100%'`     |      |
| `height`           | string                                                                                                                                                                                              | Progressbar css width                            | `'40px'`     |      |
| `animationType`    | <a href="https://github.com/modern-agile-team/dev-portfolio/edit/feature/msk/%23152/README.md?pr=%2Fmodern-agile-team%2Fdev-portfolio%2Fpull%2F174#more-about-progressbars-props">animationType</a> | Progressbar animation                            | `'wave'`     |      |
| `isBlinking`       | boolean                                                                                                                                                                                             | Progressbar blinking state                       | `false`      |      |

### More about ProgressBar's props

#### animationType

```ts
type amimationType = 'wave' | 'fill-up' | 'fill-up-wave' | 'none';
```

# Example

1. <[dev-portfolio-app](https://github.com/modern-agile-team/dev-portfolio-app)> http://52.78.64.144/

![ezgif com-gif-maker](https://user-images.githubusercontent.com/56839474/194718430-5404fa1f-c24b-48a0-8730-15db2d3bde00.gif)

<br>

2. <[woorim960](https://github.com/woorim960/woorim-personal-website)> http://152.70.89.184/

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/56839474/194719475-1cc2469e-7b7b-4ef0-8f87-236fa3aefbe1.gif)

<br>

3. <[seohyunsim](https://github.com/seohyunsim/seohyunsim-portfolio)> https://seohyunsim-portfolio.vercel.app/

<img width="1000" alt="스크린샷 2022-09-12 오후 8 52 52" src="https://user-images.githubusercontent.com/56839474/189646646-7faf4842-e881-42bc-bcb9-422975adac95.png">

## Guidelines to input icons

Enter the name of the icon you searched on the following <a href='https://icon-sets.iconify.design/'>site.</a>

(example: 'simple-icons:devdotto')

### More about used props

- id example

```js
const id = "['ID_NAME', 'ICON_NAME']";
```

- iconName example

```js
const iconName =  'ICON_NAME',
```

## License

MIT

## Contributor

- [seohyunsim](https://github.com/seohyunsim)
- [soonki-98](https://github.com/soonki-98)
- [woorim960](https://github.com/woorim960)
