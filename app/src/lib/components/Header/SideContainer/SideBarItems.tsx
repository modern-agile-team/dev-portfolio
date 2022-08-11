import styled from 'styled-components';

interface SideBarItemProps {
  sideBarItems: any;
  setIsClickedSideBarIcon: (clickedSideBarIcon: boolean) => void;
}

interface SideBarItemObjectProps {
  title: string;
  idx: number;
}

const ItemContainer = styled.div`
  color: ${({ color }) => color ?? 'black'};
  text-decoration: none;
`;

const Item = styled.div<{
  margin?: string;
}>`
  cursor: pointer;
  margin: ${({ margin }) => margin ?? '10px 0px'};
`;

const SideBarItems = ({ sideBarItems, setIsClickedSideBarIcon }: SideBarItemProps) => {
  return sideBarItems?.map(({ title, idx }: SideBarItemObjectProps) => (
    <ItemContainer
      key={idx}
      onClick={() => {
        setIsClickedSideBarIcon(false);
        document.getElementById(title)?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      <Item>{title}</Item>
    </ItemContainer>
  ));
};

export default SideBarItems;
