import styled from 'styled-components';
import { IntroPropsType } from '../../common/types/ComponentTypes/IntroType';
import { IntroTitle, IntroForm } from './index';

/**
 *
 * @props id:	Name to be added to Sidebar
 * @props textAlign: Intro Text align	center (default: center)
 * @props backgroundColor: Intro Background color	whitesmoke (default: whitesmoke)
 * @props title: Core of your introduction (default: 'Intro')
 * @props shortIntro: a brief introduction ('shortIntro that will captivate people')
 * @props description: Introduce yourself ('This props name is description.\nPlease write down your brief introduction here. If you want to change the line, type backslash-n between the letters. Also you want to move the letters to the center, change textAlign to center. code your dreams!')
 */
const Intro = ({ id, textAlign, backgroundColor, title, shortIntro, description }: IntroPropsType) => {
  return (
    <Wrap id={id} textAlign={textAlign} backgroundColor={backgroundColor}>
      <IntroTitle title={title} shortIntro={shortIntro} />
      <IntroForm description={description} />
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
  white-space: pre-wrap; // 줄바꿈 인식
  text-align: ${({ textAlign }) => textAlign};
  background-color: ${({ backgroundColor }) => backgroundColor ?? 'whitesmoke'};
  @media screen and (max-width: 480px) {
    padding: 0px;
  }
`;

Intro.defaultProps = {
  title: 'Intro',
  shortIntro: 'shortIntro that will captivate people',
  description:
    'This props name is description.\nPlease write down your brief introduction here.\nIf you want to change the line, type backslash-n between the letters.\nAlso you want to move the letters to the center, change textAlign to center.\n\ncode your dreams!',
};
