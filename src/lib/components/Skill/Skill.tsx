import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { SkillPropsType } from '../../common/types/ComponentTypes/SkillType';

const Skill = ({ title, titleSize, isHiddenTitle, iconName, iconSize, margin, padding }: SkillPropsType) => {
  return (
    <Container margin={margin} padding={padding}>
      <Icon icon={`${iconName?.toLowerCase()}`} fontSize={iconSize} />
      <Name titleSize={titleSize} isHiddenTitle={isHiddenTitle}>
        {title}
      </Name>
    </Container>
  );
};

export default Skill;

Skill.defaultProps = {
  title: 'dev-portfolio',
  titleSize: '24px',
  isHiddenTitle: false,
  iconName: 'simple-icons:devdotto',
  iconSize: '50px',
  margin: '0px',
  padding: '0px',
};

const Container = styled.div<SkillPropsType>`
  display: flex;
  align-items: center;
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

const Name = styled.span<SkillPropsType>`
  display: ${({ isHiddenTitle }) => (isHiddenTitle ? 'none' : 'flex')};
  margin-left: 8px;
  font-size: ${({ titleSize }) => titleSize};
  font-weight: bold;
`;
