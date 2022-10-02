import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { SkillPropsType } from '../../common/types/ComponentTypes/SkillType';

/**
 * Express your skills using the Skill component.
 *
 * @props title: Main text that expresses the skill (default: 'javascript')
 * @props titleSize: Title size style (default: '24px')
 * @props titleColor: Title color style (default: 'black')
 * @props isHiddenTitle: If this value is set to True, you can hide the title. (default: false)
 * @props iconName: Enter the name of the icon you searched on the following site. (default: 'ion:logo-javascript') {@link https://icon-sets.iconify.design/}
 * @props iconSize: Icon size style (defualt: '40px')
 * @props iconColor: Icon color style (default: '#F0DB4F')
 * @props margin: Skill margin style (defualt: '0px')
 * @props padding: Skill padding style (defualt: '0px')
 * @props backgroundColor: Skill background color style (default: 'white')
 * @props borderColor: Skill border color style (default: 'white')
 * @props borderRadius: Skill border-radius style (default: '12px')
 */
const Skill = ({
  title,
  titleSize,
  titleColor,
  isHiddenTitle,
  iconName,
  iconSize,
  iconColor,
  margin,
  padding,
  backgroundColor,
  borderColor,
  borderRadius,
}: SkillPropsType) => {
  return (
    <Container
      margin={margin}
      padding={padding}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderRadius={borderRadius}
    >
      <Icon icon={`${iconName?.toLowerCase()}`} fontSize={iconSize} color={iconColor} />
      <Name titleSize={titleSize} titleColor={titleColor} isHiddenTitle={isHiddenTitle}>
        {title}
      </Name>
    </Container>
  );
};

export default Skill;

Skill.defaultProps = {
  title: 'Javascript',
  titleSize: '24px',
  titleColor: 'black',
  isHiddenTitle: false,
  iconName: 'ion:logo-javascript',
  iconSize: '40px',
  iconColor: '#F0DB4F',
  margin: '0px',
  padding: '0px',
  backgroundColor: 'white',
  borderColor: 'white',
  borderRadius: '12px',
};

const Container = styled.span<SkillPropsType>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: ${({ borderRadius }) => borderRadius};
`;

const Name = styled.span<SkillPropsType>`
  display: ${({ isHiddenTitle }) => (isHiddenTitle ? 'none' : 'flex')};
  margin-left: 8px;
  font-size: ${({ titleSize }) => titleSize};
  font-weight: bold;
  color: ${({ titleColor }) => titleColor};
`;
