import styled from 'styled-components';
import {
  SideBarItemPropsType,
  SideBarItemElementType,
  SideBarItemStyledPropsType,
} from '../../../common/types/ComponentTypes/Header/SideBarType';

const ItemContainer = styled.div`
  color: ${({ color }) => color ?? 'black'};
  text-decoration: none;
`;

const Item = styled.div<SideBarItemStyledPropsType>`
  cursor: pointer;
  margin: ${({ margin }) => margin ?? '10px 0px'};
`;

const SideBarItems = ({ sideBarItems, setIsClickedSideBarIcon }: SideBarItemPropsType) => {
  return (
    <>
      {sideBarItems.map(({ title }: SideBarItemElementType, idx) => (
        <ItemContainer
          key={idx}
          onClick={() => {
            setIsClickedSideBarIcon(false);
            document.getElementById(title)?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <Item>{title}</Item>
        </ItemContainer>
      ))}
    </>
  );
};

export default SideBarItems;
