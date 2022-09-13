# dev-porfolio
![npm_package_badge](https://img.shields.io/badge/npm-v0.4.*-brightgreen)
![license_badge](https://img.shields.io/badge/license-MIT-lightgrey)

An open source component library for React that helps you develop your web portfolio easily and quickly.

![ezgif com-gif-maker](https://user-images.githubusercontent.com/56839474/189902674-bb3593a2-b388-42ab-98fa-6acb65f04588.gif)

## List

  * <a href="#install">Installation</a>
  * <a href="#usage">Usage</a>
  * <a href="#components">Components</a>
  * <a href="#example">Example</a>
  * <a href="#license">Licence</a>
  * <a href="#contributor">Contributor</a>

## Install

`npm i dev-portfolio --save`

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

  * <a href="#header">Header</a>
  * <a href="#intro">Intro</a>
  * <a href="#techstacklist">TechStackList</a>
  * <a href="#experience">Experience</a>
  * <a href="#carousel">Carousel</a>
  * <a href="#gallery">Gallery</a>
  * <a href="#masonry">Masonry</a>
  * <a href="#image">Image</a>
  * <a href="#item">Item</a>
  * <a href="#card">Card</a>
  * <a href="#contact">Contact</a>
  * <a href="#visitorcounter">VisitorCounter</a>
  * <a href="#visitorcomment">VisitorComment</a>
  
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
      id="Header Component"
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

| props | type | description | default | note
| - | - | - | - | - |
| ```id``` | string | Name to be added to Sidebar | | |
| ```headerHeight``` | string | Header Height | 80px | |
| ```headerWidth``` | string | Header Width | 100% | |
| ```headerBackgroundColor``` | string | CSS for Background color of Header Component | white | |
| ```logoOption``` | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/8b8f85015e356e649deee3e988cc3e33036a3b33/app/src/lib/common/types/ComponentTypes/Header/HeaderLogoType.ts#:~:text=export%20interface-,HeaderLogoPropsType,-extends%20HeaderLogoImgStyledPropsType%2C">LogoOptionPropsType</a> | Logo & Header_Title only props | See "More about Header's Props" |  |
| ```channels``` | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/8b8f85015e356e649deee3e988cc3e33036a3b33/app/src/lib/common/types/ComponentTypes/ChannelType.ts#:~:text=export%20interface-,ChannelType,-extends%20ChannelStyledType%20%7B">ChannelType[]</a> | Channel-only props such as Github and LinkedIn, etc | See "More about Header's Props" |  |
| ```sideBarOption``` | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/Header/SideBar/SideBarType.ts#1:~:text=SideBarOptionPropsType">SideBarOptionPropsType</a> | Sidebar-only props such as Sidebar's Icon, etc | See "More about Header's Props" |  |

<details>
<summary>More about Header's props</summary>

  #### logoOption example
 <img height="50px" alt="스크린샷 2022-08-20 오후 12 12 53" src="https://user-images.githubusercontent.com/56839474/185726844-534bec07-f460-4d38-8747-8ef3b7187a86.png">

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
 <img height="50px" alt="스크린샷 2022-08-20 오후 12 14 35" src="https://user-images.githubusercontent.com/56839474/185726889-8806c049-46b6-4aac-aff4-cf100a54364c.png">

  ```js
  const channels = [
    { name: 'github', redirectUrl: 'https://', color: '#181717BB', size: '24px' },
    { name: 'naver', redirectUrl: 'https://', color: '#47A141BB', size: '24px' },
    { name: 'facebook', redirectUrl: 'https://', color: '#1877F2BB', size: '24px' },
    { name: 'youtube', redirectUrl: 'https://', color: '#FF0000BB', size: '24px' },
  ];
  ```
  
  #### sideBarOption example
 <img height="50px" alt="스크린샷 2022-08-20 오후 12 15 02" src="https://user-images.githubusercontent.com/56839474/185726904-c09dc836-ddf3-4a62-afbe-54eed722d7ef.png">
<img height="50px" alt="스크린샷 2022-08-20 오후 12 15 32" src="https://user-images.githubusercontent.com/56839474/185726921-f67e9969-8ad4-4061-a6ea-88440ad0c23c.png">

  ```js
  const sideBarOption = {
    mainTitle: 'dev-portfolio',
    iconSize: '28px',
    iconColor: '#181717BB',
    iconMargin: '0px 12px 0px 12px',
  };
  ```
  
</details>

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
      introOption={introOption}
    />
  );
}

export default App;
```
| props | type | description | default | note |
| - | - | - | - | - |
| ```id``` | string | Name to be added to Sidebar | | |
| ```textAlign``` | string | Intro Text align | center | |
| ```backgroundColor``` | string | Intro Background color | whitesmoke | |
| ```introOption``` | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/IntroType.ts#:~:text=export%20interface-,IntroOptionType,-extends%20IntroTitlePropsType%2C">IntroOptionType</a> | Intro-only props such as title, description, etc | See "More about Intro's Props" | |

<details>
<summary>More about Intro's props</summary>

  #### introOption example
  ```js
  const IntroOption = {
    title: 'Intro',
    shortIntro: 'shortIntro that will captivate people',
    description:
      'This props name is description.\nPlease write down your brief introduction here.\nIf you want to change the line, type backslash-n between the letters.\nAlso you want to move the letters to the center, change textAlign to center.\n\nSpread your dreams!',
  };
  ```
 
</details>

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

| props | type | description | default | note |
| - | - | - | - | - |
| ```id``` | string | Name to be added to Sidebar | | |
| ```gap``` | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/TechStack/TechStackListType.ts#:~:text=type-,TechStackGapType,-%3D%20%27narrower%27">TechStackGapType</a> | Spacing between TechStacks in TechStackList | normal | |
| ```techStackList``` | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/TechStack/TechStackType.ts#:~:text=export%20interface-,TechStackPropsType,-extends%20TechStackPropsGapType%20%7B">TechStackPropsType[]</a> | TechStack-only props such as tech name, tech logo, and progressbar, etc | See "More about TechStackList's Props" | |

<details>
<summary>More about TechStackList's props</summary>

  #### techStackList example
  ```js
  const techStackList = [
    {
      nameOption: { name: 'Javascript', logoName: 'Javascript', fontSize: '18px', logoSize: '24px' },
      progressBarOption: {
        rate: '45%',
        isHiddenRateText: false,
        colorTo: '#E2D784',
        colorFrom: 'whitesmoke',
        width: '100%',
        height: '40px',
      },
    },
    {
      nameOption: { name: 'HTML5', logoName: 'HTML-5', fontSize: '18px', logoSize: '24px' },
      progressBarOption: {
        rate: '30%',
        isHiddenRateText: false,
        colorTo: '#E34F26',
        colorFrom: 'whitesmoke',
        width: '100%',
        height: '40px',
      },
    },
    {
      nameOption: { name: 'Nodejs', logoName: 'Nodejs', fontSize: '18px', logoSize: '24px' },
      progressBarOption: {
        rate: '85%',
        isHiddenRateText: true,
        colorTo: '#339933',
        colorFrom: 'whitesmoke',
        width: '100%',
        height: '40px',
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
 
</details>

### Experience

<img width="100%" alt="스크린샷 2022-08-20 오후 3 44 56" src="https://user-images.githubusercontent.com/56839474/185732886-24c87c7f-dd2a-459e-80f9-514f3e205158.png">

```js
import { Experience } from 'dev-portfolio';

const verticalOption = { ... };
const historyList = [ ... ];

const App = () => {
  return (
    <Experience 
      id="Experience Component"
      title="Experience Title"
      textAlign="left"
      theme="vertical" // 'basic' | 'box' | 'vertical'
      verticalOption={verticalOption}
      historyList={historyList}
    />
  );
}

export default App;
```

| props | type | description | default | note |
| - | - | - | - | - |
| ```id``` | string | Name to be added to Sidebar | | |
| ```title``` | string | Main title text of Experience Component | Experience | |
| ```textAlign``` | string | Experience Text align | left | |
| ```theme``` | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/ExperienceType.ts#:~:text=type-,ExperienceThemeType,-%3D%20%27basic%27">ExperienceThemeType</a> | You can decorate your experience with a variety of theme such as 'basic', 'box', 'vertical'. | basic | |
| ```verticalOption``` | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/ExperienceType.ts#:~:text=export%20interface-,ExperienceVerticalOptionType,-%7B">ExperienceVerticalOptionType</a> | Special settings can be added when the theme is 'vertical'. | See "More about Experience's Props" | |
| ```historyList``` | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/ExperienceType.ts#:~:text=export%20interface-,ExperienceHistoryListType,-%7B">ExperienceHistoryListType[]</a> | You can add your history data such as date, title, description, etc. | See "More about Experience's Props" | |

<details>
<summary>More about Experience's props</summary>

  #### theme example
 
  ```js
  const theme = "basic"; // 'basic' | 'box' | 'vertical'
  ```
  
  #### verticalOption example
  
  ```js
  const verticalOption = { 
    titleColor: "#000000",
    shape: "round-square" // 'square' | 'round-square'
  };
  ```
  
  #### historyList example
  
  ```js
  const historyList = [
    {
      startDate: '2022.01.01',
      endDate: '2022.03.10',
      title: 'this is title',
      des: 'This prop name is des.\nWrite down the additional explanation you want here.\nYou can break the line to backslash-n.',
    },
    {
      startDate: '2020.02',
      title: 'this is title',
      des: `If you just want to write the date and time without the text,\ndon't worry !\nYou can write a des props just by emptying it.\nAn example is shown below.`,
    },
    {
      startDate: '2018',
      endDate: '2019.12',
      title: 'this is title',
    },
  ];
  ```
 
</details>

### Carousel

![ezgif com-gif-maker](https://user-images.githubusercontent.com/56839474/189904601-e113242c-f104-48a9-9111-18167f2e1b87.gif)


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
      <Image src="anything.png" /> // Component of dev-portfolio
      ...
    </Carousel>
  );
}

export default App;
```

| props | type | description | default | note |
| - | - | - | - | - |
| ```id``` | string | Name to be added to Sidebar | | |
| ```width``` | string | Carousel width | 100% | |
| ```transition``` | number | Transition animation speed | 1000 | Unit : ms |
| ```autoplaySpeed``` | number | Time to stay in a item | 3000 | Unit : ms |
| ```slideToShow``` | number | Number of item to show at once | 1 |  |
| ```isArrowShow``` | boolean | Flag for whether to show buttons | true | |
| ```isAutoplay``` | boolean | Flag for play carousel automatically | false |
| ```isAutoplayControl``` | boolean | Flag for whether to show carousel player | true |
| ```arrowPosition``` | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/CarouselType.ts#:~:text=%27bottom%27%20%7C%20%27mid%2Dside%27%20%7C%20%27top%27%20%7C%20%27bottom%2Dside%27%20%7C%20%27top%2Dside%27">ArrowLocationType</a> | Position of arrow icon | mid-side | |
| ```playerLocation``` | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/CarouselType.ts#:~:text=%27bottom%2Dmid%27%20%7C%20%27bottom%2Dleft%27%20%7C%20%27bottom%2Dright%27%20%7C%20%27top%2Dmid%27%20%7C%20%27top%2Dleft%27%20%7C%20%27top%2Dright%27">PlayerLocationType</a> | Position of Play icon  | bottom-mid | |
| ```prevArrowIcon``` | ReactElement | Icon Component for moving into previous item | ```<FiChevronLeft />``` | |
| ```nextArrowIcon``` | ReactElement | Icon Component for moving into next item | ```<FiChevronRight />``` | |
| ```startAutoplayIcon``` | ReactElement | Icon Component for starting autoplay | ```<TbPlayerPlay />``` | |
| ```pauseAutoplayIcon``` | ReactElement | Icon Component for pause autoplay | ```<TbPlayerPause />``` | |


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
      <Item /> // Component of dev-portfolio
      ...
    </Gallery>
  );
}

export default App;
```

| props | type | description | default | note |
| - | - | - | - | - |
| ```id``` | string | Name to be added to Sidebar | | |
| ```column``` | number | Number of vertical lines | 3 |  |
| ```gap``` | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/GalleryType.ts#:~:text=type-,GalleryGapType,-%3D%20%27wider%27">GalleryGapType</a> | Spacing between items in Gallery | normal |  |
| ```theme``` | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/GalleryType.ts#:~:text=type-,GalleryThemeType,-%3D%20%27mid%2Dnight">GalleryThemeType</a> | You can decorate your Gallery with a variety of theme such as 'mid-night', 'blossom', 'fruits', 'bare-bare', 'mint-chocolate'. | mid-night | |
| ```padding``` | string | Gallery padding | 2em 10em | |

<details>
<summary>More about Gallery's props</summary>
  
  #### gap example
  
  ```js
  // 'wider' | 'wide' | 'normal' | 'narrow' | 'narrower'
  const gap = 'normal';
  ```
 
  #### theme example
  
  ```js
  // 'mid-night' | 'blossom' | 'fruits' | 'bare-bare' | 'mint-chocolate'
  const theme = 'mid-night';
  ```
 
</details>

### Masonry

<img width="1674" alt="스크린샷 2022-09-13 오전 2 08 45" src="https://user-images.githubusercontent.com/56839474/189715278-2e74562d-7d46-482b-8222-01251d538f1e.png">


```js
import { Masonry, Image } from 'dev-portfolio';

const App = () => {
  return (
    <Masonry 
      id="Masonry Component"
      column={4}
      padding="2em 4em"
    >
      // Must insert components customized
      <YOUR_COMPONENT />
      <Image src="anything.png" redirectURL="/" /> // Component of dev-portfolio
      <Image src="https://picsum.photos/900/1100/?random" redirectURL="/" /> // Component of dev-portfolio
      ...
    </Masonry>
  );
}

export default App;
```

| props | type | description | default | note |
| - | - | - | - | - |
| ```id``` | string | Name to be added to Sidebar | | |
| ```column``` | number | Number of vertical lines | 4 |  |
| ```padding``` | string | Masonry padding | 2em 4em | |


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
    />
  );
}

export default App;
```

| props | type | description | default | note |
| - | - | - | - | - |
| ```src``` | string | Image source url |  | |
| ```head``` | string | Main Title Text | Write your head | |
| ```subhead``` | string | Sub Title Text | Write your subhead | |
| ```redirectURL``` | string | URL to redirect | / | |
| ```noShowHead``` | boolean | Flag for whether to hide texts | false | |
| ```zoomWhenHover``` | boolean | Flag for whether to zoom image when hovered on item | false | |

### Item

![ezgif com-gif-maker](https://user-images.githubusercontent.com/56839474/189904427-02dbdc99-5ff8-4522-8c8a-373dbf0b0035.gif)


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
    />
  );
}

export default App;
```

| props | type | description | default | note |
| - | - | - | - | - |
| ```src``` | string | Image source url | https://picsum.photos/600/600/?random | |
| ```title``` | string | Main Title Text | This is title | |
| ```description``` | string | Description Text | description | |
| ```redirectURL``` | string | URL to redirect | / | |
| ```textRisingSpeed``` | number |  | 300 | |
| ```isTextRising``` | boolean |  | false | |

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
}

export default App;
```

| props | type | description | default | note |
| - | - | - | - | - |
| ```width``` | string | Card width | 10em | |
| ```height``` | string | Card height | 10em | |
| ```redirectURL``` | string | URL to redirect | / | |
| ```shape``` | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/CardType.ts#:~:text=type-,CardShapeType,-%3D%20%27square%27">CardShapeType</a> | You can decorate shape of Card a variety of theme such as 'square', 'round-square', 'round'. | square | |
| ```hover``` | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/CardType.ts#:~:text=type-,CardHoverType,-%3D%20%27up%27">CardHoverType</a> | You can make an effect on Card a variety of theme such as 'up', 'down', 'zoom'. | none | |

<details>
<summary>More about Card's props</summary>

  #### shape example
 
  ```js
  // 'square' | 'round-square' | 'round'
  const shape = "square";
  ```
 
  #### hover example
 
  ```js
  // 'up' | 'down' | 'zoom'
  const hover = "zoom";
  ```
 
</details>

### Contact
<img width="100%" alt="스크린샷 2022-08-20 오후 12 32 19" src="https://user-images.githubusercontent.com/56839474/185727384-1b024c72-83e3-4ef9-84ac-68f832d8df3e.png">

```js
import { Contact } from 'dev-portfolio';

const contactOption = { ... };

const App = () => {
  return (
    <Contact 
      id="Contact Component"
      backgroundColor="whitesmoke"
      contactOption={contactOption}
    />
  );
}

export default App;
```

| props | type | description | default | note |
| - | - | - | - | - |
| ```id``` | string | Name to be added to Sidebar | | |
| ```backgroundColor``` | string | Contact Background Color | whitesmoke | |
| ```contactOption``` | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/Contact/ContactType.ts#:~:text=interface-,ContactOptionType,-%7B">ContactOptionType</a> | Contact-only props such as title, email button, channels and my personal info, etc | See "More about Contact's Props" | |

<details>
<summary>More about Contact's props</summary>

  #### contactOption example
  ```js
  const contactOption = {
    title: 'Hello, I'm dev-portfolio.',
    subTitle: 'If you're interested in me, please press the button below :D',
    buttonText: 'Want to work with me?',
    channels: [
      {
        name: 'github',
        redirectUrl: 'https://',
        color: '#181717BB',
        size: '18px',
        margin: '0px 12px 0px 0px',
      },
      {
        name: 'naver',
        redirectUrl: 'https://',
        color: '#47A141BB',
        size: '18px',
        margin: '0px 12px 0px 0px',
      },
      {
        name: 'facebook',
        redirectUrl: 'https://',
        color: '#1877F2BB',
        size: '18px',
        margin: '0px 12px 0px 0px',
      },
      {
        name: 'youtube',
        redirectUrl: 'https://',
        color: '#FF0000BB',
        size: '18px',
        margin: '0px 12px 0px 0px',
      },
    ],
    aboutMeInfos: [
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
  };  
  ```
</details>

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
      size="14px" // include: px
      todayBoldColor="red"
      totalBoldColor="red"
    />
  );
}

export default App;
```

| props | type | description | default | note |
| - | - | - | - | - |
| ```title``` | string | Hit title used in 'default' and 'big-size' | hits | |
| ```theme``` | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/VisitorCounterType.ts#:~:text=type-,VisitorCounterThemeType,-%3D%20%27default%27">VisitorCounterThemeType</a> | Visitor Counter theme: 'default',  'big-size', 'simple' | default | |
| ```todayVisitor``` | number | Number of today's visitors | 0 | fetched variable |
| ```totalVisitor``` | number | Number of total's visitors | 123 | fetched variable |
| ```todayTitle``` | string | Title of today visit count used in 'big-size' and 'simple' | today | |
| ```totalTitle``` | string | Title of total visit count used in 'big-size' and 'simple' | total | |
| ```backgroundColor``` | string | Background color of todayTitle |#91c230c4 |  | |
| ```size``` | string | Font size and component size in the visitor counter component | 14px | Make sure to include 'px' |
| ```todayBoldColor``` | string | Color of today's visit count used in 'big-size' and 'simple' | red | |
| ```totalBoldColor``` | string | Color of total visit count used in 'big-size' and 'simple' | red | |

<details>
<summary>More about VisitorCounter's props</summary>

  #### theme example
 
  ```js
  // 'default' | 'big-size' | 'simple'
  const theme = "default";
  ```

  #### VisitorCounter example

  ```js
  const visitorCounter = {
     title: 'hits',
     todayTitle: 'today',
     totalTitle: 'total',
  }
  ```
 
</details>

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
      userInputLineColor="#b4b4b4a2"
      buttonColor="#1877f2"
      progressbarColor="#5f5f5f"
      isShowScrollDownIcon={true}
      scrollDownIconColor='black'
      commentInputPlacehoder={commentInputPlacehoder}
      comment='this portfolio is very nice' // Your fetched variable
      nickname='dev-portfolio' // Your fetched variable
      password='1234' // Your fetched variable
      commentList={commentList} // Your fetched variable
      handleCreateComment={handleCreateComment} // Event handling variable
      handleChangeDescription={handleChangeDescription} // Event handling variable
      handleChangeNickname={handleChangeNickname} // Event handling variable
      handleChangePassword={handleChangePassword} // Event handling variable
    />
  );
}

export default App;
```

| props | type | description | default | note |
| - | - | - | - | - |
| ```id``` | string | Name to be added to Sidebar | | |
| ```theme``` | <a href='https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/VisitorCommentType.ts#:~:text=type-,VisitorCommentThemeType,-%3D%20%27basic%27'>VisitorCommentThemeType</a> | Visitor Comment theme: 'basic', 'box', 'vertical' | basic | |
| ```backgroundColor``` | string | VisitorComment background-color | whitesmoke | |
| ```inputBackgroundColor``` | string | Background color of guest book preparation column | White | |
| ```userInputLineColor``` | string | Underline color in the User Information field | #b4b4b4a2 | |
| ```buttonColor``` | string | Font color of send button | #1877f | |
| ```progressbarColor``` | string | The color of the progress bar that is generated when a scroll event occurs | #5f5f5f | |
| ```isShowScrollDownIcon``` | boolean | Whether to display icons that are generated when a scroll event occurs | true | |
| ```scrollDownIconColor``` | string | Color in ScrollDown Icon | black | Only works when isShowScrollDownIcon is true |
| ```comment``` | string | the text of visitor comment | this portfolio is very nice | fetched variable |
| ```nickname``` | string | the nickname of visitor comment | dev-portfolio | fetched variable |
| ```password``` | string | the password of visitor comment | 1234 | fetched variable |
| ```commentInputPlacehoder``` | <a href='https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/VisitorCommentType.ts#:~:text=export%20interface-,CommentInputPlaceholderType,-%7B'>CommentInputPlaceholderType</a> | Placeholder in the input that you write in the visitor comment | See "More about VisitorComment's Props" | |
| ```commentList``` | <a href='https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/VisitorCommentType.ts#:~:text=export%20interface-,VisitorCommentListType,-%7B'>VisitorCommentListType</a> | Description, nickname, and date displayed in comment list | See "More about VisitorComment's Props" | fetched variable |
| ```handleCreateComment``` | (e?: React.MouseEvent<HTMLButtonElement>) => void | Comments Props for event handling | | |
| ```handleChangeDescription``` | (e?: React.ChangeEvent<HTMLElement>) => void | Description Props for event handling | | |
| ```handleChangeNickname``` | (e?: React.ChangeEvent<HTMLElement>) => void | Nickname Props for event handling | | |
| ```handleChangePassword``` | (e?: React.ChangeEvent<HTMLElement>) => void | Password Props for event handling | | |


<details>
<summary>More about VisitorComment's props</summary>

  #### VisitorComment example
 
  ```js
  const visitorComment = {
    theme: 'basic',
    progressbarColor: '#5f5f5f',
    isShowScrollDownIcon: true,
    commentList: [
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
  }
  ```
 
</details>

# Example
1. [dev-portfolio-app](https://github.com/modern-agile-team/dev-portfolio-app) : https://dev-portfolio-app.vercel.app/
<img width="1000" alt="스크린샷 2022-09-12 오후 8 53 37" src="https://user-images.githubusercontent.com/56839474/189646788-5c28a9f6-ab65-4471-83e7-04bf2cf8368f.png">

<br>

2. [seohyunsim](https://github.com/seohyunsim/seohyunsim-portfolio) : https://seohyunsim-portfolio.vercel.app/
<img width="1000" alt="스크린샷 2022-09-12 오후 8 52 52" src="https://user-images.githubusercontent.com/56839474/189646646-7faf4842-e881-42bc-bcb9-422975adac95.png">

## License
MIT

## Contributor
* [seohyunsim](https://github.com/seohyunsim)
* [soonki-98](https://github.com/soonki-98)
* [woorim960](https://github.com/woorim960)
