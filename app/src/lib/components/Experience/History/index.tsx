import Basic from './Basic';

interface Props {
  startDate?: string;
  endDate?: string;
  title?: string;
  des?: string;
  theme?: 'basic' | 'others';
}

const History = (props: Props) => {
  const { theme } = props;

  switch (theme) {
    case 'basic':
      return <Basic {...props} />;
    case 'others':
      return <div />;
    default:
      return <Basic {...props} />;
  }
};

export default History;
