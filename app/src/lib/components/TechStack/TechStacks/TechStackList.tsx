import TechStack from './TechStack';
import { TechStackListPropsType } from '../../../common/types/ComponentTypes/TechStack/TechStackListType';

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
