import TechStack from './TechStack';
import { TechStackListPropsType } from '../../../common/types/ComponentTypes/TechStack/TechStackListType';

const TechStackList = ({ id, techStackList, gap = 'normal' }: TechStackListPropsType) => {
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
