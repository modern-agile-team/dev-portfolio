export interface IntroPropsType {
  /**
   * Name to be added to Sidebar
   */
  id?: string;
  /**
   * Title of Intro section. (default: 'Intro')
   */
  title?: string;
  /**
   * title text color style. (default: 'black')
   */
  titleColor?: string;
  /**
   * Main text that can express you the best.(default: 'shortIntro that will captivate people')
   */
  shortIntro?: string;
  /**
   * shortIntro text color style. (default: 'black')
   */
  shortIntroColor?: string;
  /**
   * Introduce yourself. (default: `This props name is description.\nPlease write down your brief introduction here. If you want to change the line, type backslash-n between the letters. Also you want to move the letters to the center, change textAlign to center. code your dreams!`)
   */
  description?: string;
  /**
   * description text color style. (default: 'black')
   */
  descriptionColor?: string;
  /**
   * description background color style. (default: 'white')
   */
  descriptionBackgroundColor?: string;
  /**
   * Intro text align	style.
   * You can choose one of the themes such as 'left' and 'center'. (default: 'left')
   *
   * @example textAlign
   * ```ts
   * textAlign="left"
   * ```
   */
  textAlign?: IntroTextAlignType;
  /**
   * Intro background color style. (default: 'whitesmoke')
   */
  backgroundColor?: string;
}

type IntroTextAlignType = 'left' | 'center';
