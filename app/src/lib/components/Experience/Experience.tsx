import styled from 'styled-components';
import History from './History';

interface Props {
  id?: string;
  historyList?: {
    startDate?: string;
    endDate?: string;
    title?: string;
    des?: string;
  }[];
  title?: string;
  textAlign?: string;
  background?: string;
  theme?: 'basic' | 'box' | 'vertical';
  verticalOption?: {
    titleColor?: string;
    shape?: 'square' | 'round-square';
  };
}

const Experience = (props: Props) => {
  const { id, historyList, title, textAlign, background, theme, verticalOption } = props;

  return (
    <Wrap id={id} textAlign={textAlign} background={background}>
      <div className="title">{title}</div>
      <hr />
      <ChildWrap theme={theme}>
        {historyList?.map((elements, idx) => (
          <History {...verticalOption} key={idx} {...elements} theme={theme} />
        ))}
      </ChildWrap>
    </Wrap>
  );
};

export default Experience;

Experience.defaultProps = {
  title: 'Experience',
  theme: 'basic',
  historyList: [
    {
      startDate: 'startDate',
      endDate: 'endDate',
      title: 'this is title',
      des: 'This prop name is des.\nWrite down the additional explanation you want here.\nYou can break the line to backslash-n.',
    },
    {
      startDate: 'startDate',
      endDate: 'endDate',
      title: 'this is title',
      des: `If you just want to write the date and time without the text,\ndon't worry !\nYou can write a des props just by emptying it.\nAn example is shown below.`,
    },
    {
      startDate: 'startDate',
      endDate: 'endDate',
      title: 'this is title',
    },
  ],
};

const Wrap = styled.div<{
  textAlign?: string;
  background?: string;
}>`
  padding: 25px;
  text-align: ${({ textAlign }) => textAlign ?? 'left'};
  background: ${({ background }) => background ?? 'left'};
  .title {
    padding: 10px 10px 20px 10px;
    font-size: 33px;
    font-weight: 800;
  }
  hr {
    border: 0;
    height: 1.5px;
    background: #d6d6d6;
  }
`;

const ChildWrap = styled.div<{
  theme?: 'basic' | 'box' | 'vertical';
}>`
  display: flex;
  flex-direction: ${({ theme }) => (theme === 'vertical' ? 'row' : 'column')};
  flex-wrap: ${({ theme }) => (theme === 'vertical' ? 'wrap' : 'nowrap')};
  white-space: pre-wrap;
`;
