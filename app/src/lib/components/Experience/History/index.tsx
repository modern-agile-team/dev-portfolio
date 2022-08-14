import Basic from './Basic';
import Box from './Box';
import Vertical from './Vertical';
import { IndexPropsType } from '../../../common/types/ComponentTypes/ExperienceType';

const History = (props: IndexPropsType) => {
  const { theme } = props;

  switch (theme) {
    case 'basic':
      return <Basic {...props} />;
    case 'box':
      return <Box {...props} />;
    case 'vertical':
      return <Vertical {...props} />;
    default:
      return <Basic {...props} />;
  }
};

export default History;
