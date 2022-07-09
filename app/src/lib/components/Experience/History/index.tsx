import Basic from './Basic';
import Box from './Box';

interface Props {
  startDate?: string;
  endDate?: string;
  title?: string;
  des?: string;
  theme?: 'basic' | 'box';
}

const History = (props: Props) => {
  const { theme } = props;

  switch (theme) {
    case 'basic':
      return <Basic {...props} />;
    case 'box':
      return <Box {...props} />;
    default:
      return <Basic {...props} />;
  }
};

export default History;
