import styled from 'styled-components';
import History from './History';
import {
  ExperiencePropsType,
  ExperienceStyledPropsType,
  ExperienceChildStyledPropsType,
} from '../../common/types/ComponentTypes/ExperienceType';

/**
 *
 * @props id: Name to be added to Sidebar
 * @props title: Main title text of Experience Component	(default: Experience)
 * @props background: 서현아 이건 너가 넣어줘라 뭔지 몰겠어
 * @props textAlign: Experience Text align (default: left)
 * @props theme: You can decorate your experience with a variety of theme such as 'basic', 'box', 'vertical'.	(default: basic)
 * @props verticalOption: Special settings can be added when the theme is 'vertical'.	({@link https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/ExperienceType.ts#:~:text=export%20interface-,ExperienceVerticalOptionType,-%7B "See More about Experience's Props"})
 * @props historyList: You can add your history data such as date, title, description, etc.	({@link https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/ExperienceType.ts#:~:text=export%20interface-,ExperienceHistoryListType,-%7B "See More about Experience's Props"})
 * @verticalOption titleColor: color of title
 * @verticalOption shape: 'square' | 'round-square'
 * @historyList startData: Date when you started that kind experience
 * @historyList endDate: Date when you finished that kind experience
 * @historyList title: Title of experience
 * @historyList des: Describe about your experience
 */
const Experience = (props: ExperiencePropsType) => {
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

const Wrap = styled.div<ExperienceStyledPropsType>`
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

const ChildWrap = styled.div<ExperienceChildStyledPropsType>`
  display: flex;
  flex-direction: ${({ theme }) => (theme === 'vertical' ? 'row' : 'column')};
  flex-wrap: ${({ theme }) => (theme === 'vertical' ? 'wrap' : 'nowrap')};
  white-space: pre-wrap;
`;
