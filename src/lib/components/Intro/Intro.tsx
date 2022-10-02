import styled from 'styled-components';
import { IntroPropsType } from '../../common/types/ComponentTypes/IntroType';
import { IntroTitle, IntroForm } from './index';

/**
 * You can write the short and impactful content by using an Intro component.
 * TIP: Create short and impactful content so that anyone who sees your introductory content can immediately make a strong impression.
 *
 * @props id:	Name to be added to Sidebar.
 * @props title: Title of Intro section. (default: 'Intro')
 * @props titleColor: title text color style. (default: 'black')
 * @props shortIntro: Main text that can express you the best.(default: 'shortIntro that will captivate people')
 * @props shortIntroColor: shortIntro text color style. (default: 'black')
 * @props description: Introduce yourself. (default: `This props name is description.\nPlease write down your brief introduction here. If you want to change the line, type backslash-n between the letters. Also you want to move the letters to the center, change textAlign to center. code your dreams!`)
 * @props descriptionColor: description text color style. (default: 'black')
 * @props descriptionBackgroundColor: description background color style. (default: 'white')
 * @props textAlign: Intro text align	style. You can choose one of the themes such as 'left' and 'center'. (default: 'left')
 * @props backgroundColor: Intro background color style. (default: 'whitesmoke')
 */
const Intro = ({
  id,
  title,
  titleColor,
  shortIntro,
  shortIntroColor,
  description,
  descriptionColor,
  descriptionBackgroundColor,
  textAlign,
  backgroundColor,
}: IntroPropsType) => {
  return (
    <Wrap id={id} textAlign={textAlign} backgroundColor={backgroundColor}>
      <IntroTitle title={title} titleColor={titleColor} shortIntro={shortIntro} shortIntroColor={shortIntroColor} />
      <IntroForm
        description={description}
        descriptionColor={descriptionColor}
        descriptionBackgroundColor={descriptionBackgroundColor}
      />
    </Wrap>
  );
};

export default Intro;

const Wrap = styled.div<{
  textAlign?: string;
  backgroundColor?: string;
}>`
  display: flex;
  flex-direction: column;
  padding: 30px;
  padding-top: 20px;
  white-space: pre-wrap;
  text-align: ${({ textAlign }) => textAlign};
  background-color: ${({ backgroundColor }) => backgroundColor};
  @media screen and (max-width: 480px) {
    padding: 0px;
  }
`;

Intro.defaultProps = {
  title: 'Intro',
  titleColor: 'black',
  shortIntro: 'shortIntro that will captivate people',
  shortIntroColor: 'black',
  description:
    'This props name is description.\nPlease write down your brief introduction here.\nIf you want to change the line, type backslash-n between the letters.\nAlso you want to move the letters to the center, change textAlign to center.\n\ncode your dreams!',
  descriptionColor: 'black',
  descriptionBackgroundColor: 'white',
  textAlign: 'left',
  backgroundColor: 'whitesmoke',
};
