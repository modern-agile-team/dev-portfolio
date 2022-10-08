import TechStack from './TechStack';
import { TechStackListPropsType } from '../../../common/types/ComponentTypes/TechStack/TechStackListType';
import { uuidv4 } from '../../../common/utils';

/**
 * You can freely show off the skills or abilities by using TechStackList component.
 *
 * @props id: Name to be added to Sidebar.
 * @props techStackList: Enter the properties such as nameOption, progressBarOption and click the {@link https://github.com/modern-agile-team/dev-portfolio#techstacklist link} if you want to see the README.md about TechStackList.
 * @props gap: Spacing between technical-stack elements in TechStackList. (default: 'normal') 'narrower' | 'narrow' | 'normal' | 'wide' | 'wider'
 */
const TechStackList = ({ id, techStackList, gap }: TechStackListPropsType) => {
  return (
    <div id={id}>
      {techStackList?.map(({ nameOption, progressBarOption }, idx) => (
        <TechStack key={uuidv4()} nameOption={nameOption} progressBarOption={progressBarOption} gap={gap} />
      ))}
    </div>
  );
};

export default TechStackList;

TechStackList.defaultProps = {
  techStackList: [
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
  ],
  gap: 'normal',
};
