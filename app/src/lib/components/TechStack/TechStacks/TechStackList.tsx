import TechStack from './TechStack';
import { TechStackListPropsType } from '../../../common/types/ComponentTypes/TechStack/TechStackListType';

/**
 *
 * @props id: Name to be added to Sidebar
 * @props gap: Spacing between TechStacks in TechStackList (default: normal) 'narrower' | 'narrow' | 'normal' | 'wide' | 'wider'
 * @props techStackList: TechStack-only props such as tech name, tech logo, and progressbar, etc	({@link https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/TechStack/TechStackType.ts "See More about TechStackList's Props"})
 * @techStackList nameOption: Choose name, logo and each size of techStack
 * @techStackList  progressBarOption: State of progressbar
 * @nameOption name: Name of skill (find skill from {@link "here"})
 * @nameOption logoName: Logo name of skill (find skill from {@link "here"})
 * @nameOption fontSize: Font size of skill name (unit: px)
 * @nameOption logoSize: Size of logo (unit: px)
 * @progressBarOption rate: How well you handle the skill (unit: %)
 * @progressBarOption isHiddenRateText: Whether show rate in progressbar
 * @progressBarOption colorTo: End color of wave animation of progressbar
 * @progressBarOption colorFrom: Start color of wave animation of progressbar
 * @progressBarOption width: Width of progressbar
 * @progressBarOption height: Height of progressbar
 */
const TechStackList = ({ id, techStackList = techStacksDefault, gap = 'normal' }: TechStackListPropsType) => {
  return (
    <div id={id}>
      {techStackList?.map(({ nameOption, progressBarOption }, idx) => (
        <TechStack key={idx} nameOption={nameOption} progressBarOption={progressBarOption} gap={gap} />
      ))}
    </div>
  );
};

export default TechStackList;

TechStackList.defaultProps = {
  gap: 'normal',
};

const techStacksDefault = [
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
