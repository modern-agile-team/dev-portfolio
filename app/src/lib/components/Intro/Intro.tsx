import styled from 'styled-components';
import { IntroPropsType, IntroOptionType } from '../../common/types/ComponentTypes/IntroType';
import { IntroTitle, IntroForm } from './index';

/**
 *
 * @props id:	Name to be added to Sidebar
 * @props textAlign: Intro Text align	center (default: center)
 * @props backgroundColor: Intro Background color	whitesmoke (default: whitesmoke)
 * @props introOption: Intro-only props (default: {@link https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/IntroType.ts "See More about Intro's Props"}) @introOption title: Core of your introduction, @introOption description: Introduce yourself, @introOption shortIntro: a brief introduction
 */
const Intro = ({ id, introOption = IntroOptionDefault, textAlign, backgroundColor }: IntroPropsType) => {
  const { title, shortIntro, description } = introOption;

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

const IntroOptionDefault: IntroOptionType = {
  title: 'Intro',
  shortIntro: 'shortIntro that will captivate people',
  description:
    'This props name is description.\nPlease write down your brief introduction here.\nIf you want to change the line, type backslash-n between the letters.\nAlso you want to move the letters to the center, change textAlign to center.\n\ncode your dreams!',
};
