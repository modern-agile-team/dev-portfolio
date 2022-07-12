import Basic from './Basic';
import Box from './Box';
import Vertical from './Vertical';

interface Props {
  startDate?: string;
  endDate?: string;
  title?: string;
  des?: string;
  theme?: 'basic' | 'box' | 'vertical';
  verticalOption?: {
    titleColor?: string;
    shape?: 'square' | 'round-square';
  };
}

const History = (props: Props) => {
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
