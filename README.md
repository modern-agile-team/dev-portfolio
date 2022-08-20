# dev-porfolio
![npm_package_badge](https://img.shields.io/badge/npm-v0.3.48-brightgreen)
![license_badge](https://img.shields.io/badge/license-MIT-lightgrey)

An open source component library for React that helps you develop your web portfolio easily and quickly.

<img width="100%" src="https://user-images.githubusercontent.com/56839474/185625494-bef1d408-f0bd-4d50-8e84-02a32ed79711.gif"></img>

## List

  * <a href="#install">Installation</a>
  * <a href="#usage">Usage</a>
  * <a href="#components">Components</a>
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
  * <a href="#contact">Contact</a>
  
### Header
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

| props | type | description |
| - | - | - |
| id | string | Name to be added to Sidebar |
| headerHeight | string | CSS for Height of Header Component |
| headerWidth | string | CSS for Width of Header Component |
| headerBackgroundColor | string | CSS for Background color of Header Component |
| logoOption | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/8b8f85015e356e649deee3e988cc3e33036a3b33/app/src/lib/common/types/ComponentTypes/Header/HeaderLogoType.ts#:~:text=export%20interface-,HeaderLogoPropsType,-extends%20HeaderLogoImgStyledPropsType%2C">LogoOptionPropsType</a> | Logo & Header_Title only props |
| channels | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/8b8f85015e356e649deee3e988cc3e33036a3b33/app/src/lib/common/types/ComponentTypes/ChannelType.ts#:~:text=export%20interface-,ChannelType,-extends%20ChannelStyledType%20%7B">ChannelType[]</a> | Channel-only props such as Github and LinkedIn, etc |
| sideBarOption | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/Header/SideBar/SideBarType.ts#1:~:text=SideBarOptionPropsType">SideBarOptionPropsType</a> | Sidebar-only props such as Sidebar's Icon, etc |

<details>
<summary>More about Header's props</summary>

  #### logoOption example
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
  ```js
  const channels = [
    { name: 'github', redirectUrl: 'https://', color: '#181717BB', size: '24px' },
    { name: 'naver', redirectUrl: 'https://', color: '#47A141BB', size: '24px' },
    { name: 'facebook', redirectUrl: 'https://', color: '#1877F2BB', size: '24px' },
    { name: 'youtube', redirectUrl: 'https://', color: '#FF0000BB', size: '24px' },
  ];
  ```
  
  #### sideBarOption example
  ```js
  const sideBarOption = {
    mainTitle: 'dev-portfolio',
    iconSize: '28px',
    iconColor: '#181717BB',
    iconMargin: '0px 12px 0px 12px',
  };
  ```
  
</details>

### TechStackList
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

| props | type | description |
| - | - | - |
| id | string | Name to be added to Sidebar |
| gap | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/TechStack/TechStackListType.ts#:~:text=type-,TechStackGapType,-%3D%20%27narrower%27">TechStackGapType</a> | Spacing between 'TechStack's |
| techStackList | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/TechStack/TechStackType.ts#:~:text=export%20interface-,TechStackPropsType,-extends%20TechStackPropsGapType%20%7B">TechStackPropsType[]</a> | TechStack-only props such as tech name, tech logo, and progressbar, etc |

<details>
<summary>More about TechStackList's props</summary>

  #### techStackList example
  ```js
  const techStackList = [
    {
      nameOption: { name: 'Javascript', logoName: 'Javascript', fontSize: '18px', logoSize: '24px' },
      progressBarOption: {
        rate: '45%',
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
        colorTo: '#339933',
        colorFrom: 'whitesmoke',
        width: '100%',
        height: '40px',
      },
    },
  ];
  ```
  
  #### gap example
  ```js
  // 'narrower' | 'narrow' | 'normal' | 'wide' | 'wider';
  const gap = 'narrow';
  ```
 
</details>

### Contact
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

| props | type | description |
| - | - | - |
| id | string | Name to be added to Sidebar |
| backgroundColor | string | CSS for Background Color of Contact Component |
| contactOption | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/Contact/ContactType.ts#:~:text=interface-,ContactOptionType,-%7B">ContactOptionType</a> | Contact-only props such as title, email button, channels and my personal info, etc |

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


## License
MIT

## Contributor
* [seohyunsim](https://github.com/seohyunsim)
* [soonki-98](https://github.com/soonki-98)
* [woorim960](https://github.com/woorim960)
