# dev-porfolio
![npm_package_badge](https://img.shields.io/badge/npm-v0.1.0-brightgreen)
![license_badge](https://img.shields.io/badge/license-MIT-lightgrey)
> This is still under development...  

An open source component library for React that helps you develop your web portfolio easily and quickly.

  * <a href="#install">Installation</a>
  * <a href="#usage">Usage</a>
  * <a href="#components">Components</a>
  * <a href="#license">Licence</a>
  * <a href="#contributor">Contributor</a>

## Install

`npm i dev-portfolio --save`

## Usage

```js
import { Header, TechStackList, Contact, ... } from 'dev-portfolio';

const App = () => {
  return (
    <>
      <Header />
      <TechStackList />
      <Contact />
      ...
    </>
  );
}

export default App;
```

## Components

* <a href="#header"><code>Header</code></a>
* <a href="#techstacklist"><code>TechStackList</code></a>
* <a href="#contact"><code>Contact</code></a>

### Header
```js
import { Header } from 'dev-portfolio';

const logoOption = { ... };
const channels = [ ... ];
const sideBarOption = { ... };

const App = () => {
  return (
    <Header 
      logoOption={logoOption}
      channels={channels}
      sideBarOption={sideBarOption}
    />
  );
}

export default App;
```

<details>
<summary>Props of Header</summary>

  #### logoOption
  ```js
  const logoOption = {
    uriToMove: '/',
    logoImg: "./asset/logo.png",
    title: 'dev-portfolio',
    styles: {
      logoMargin: '0px 16px 0px 16px',
      titleColor: 'black',
      titleSize: '32px',
      titleWeight: '800',
    },
  };
  ```
  
  #### channels
  ```js
  const channels = [
    { name: 'github', uriToMove: 'https://', color: '#181717BB', size: '30px' },
    { name: 'naver', uriToMove: 'https://', color: '#47A141BB', size: '30px' },
    { name: 'facebook', uriToMove: 'https://', color: '#1877F2BB', size: '30px' },
    { name: 'youtube', uriToMove: 'https://', color: '#FF0000BB', size: '30px' },
  ];
  ```
  
  #### sideBarOption
  ```js
  const sideBarOption = {
    mainTitle: 'dev-portfolio',
    styles: { size: '50px', margin: '0px 12px 0px 24px' },
  };
  ```
  
</details>

### TechStackList
```js
import { TechStackList } from 'dev-portfolio';

const techStackList = [ ... ];
const gap = " ... ";

const App = () => {
  return (
    <TechStackList 
      techStackList={techStackList}
      gap={gap}
    />
  );
}

export default App;
```

<details>
<summary>Props of TechStackList</summary>

  #### techStackList
  ```js
  const techStackList = [
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
  ```
  
  #### gap
  ```js
  // 'narrower' | 'narrow' | 'normal' | 'wide' | 'wider';
  const gap = 'normal';
  ```
  
</details>

### Contact
```js
import { Contact } from 'dev-portfolio';

const contactOption = { ... };

const App = () => {
  return (
    <Contact 
      contactOption={contactOption}
    />
  );
}

export default App;
```

<details>
<summary>Props of Contact</summary>

  #### contactOption
  ```js
  const contactOption = {
    title: 'Hello, I'm dev-portfolio.',
    subTitle: 'If you're interested in me, please press the button below :D',
    buttonText: 'Want to work with me?',
    channels: [
      {
        name: 'github',
        uriToMove: 'https://',
        color: '#181717BB',
        size: '18px',
        margin: '0px 12px 0px 0px',
      },
      {
        name: 'naver',
        uriToMove: 'https://',
        color: '#47A141BB',
        size: '18px',
        margin: '0px 12px 0px 0px',
      },
      {
        name: 'facebook',
        uriToMove: 'https://',
        color: '#1877F2BB',
        size: '18px',
        margin: '0px 12px 0px 0px',
      },
      {
        name: 'youtube',
        uriToMove: 'https://',
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
