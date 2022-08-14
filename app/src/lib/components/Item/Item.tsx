import { forwardRef, useRef, useState } from 'react';
import styled from 'styled-components';
import { useInterval } from '../Carousel/hooks';
import {
  ItemPropsType,
  ItemDescriptionPropsType,
  ItemDescriptionWrapperStyledPropsType,
} from '../../common/types/ComponentTypes/ItemType';

const Description = forwardRef<HTMLDivElement, ItemDescriptionPropsType>(
  ({ title, top, description, textRisingSpeed }, ref) => {
    return (
      <DescriptionContainer className="hover">
        <HoverSection className="inner-hover">
          <h3>{title}</h3>
          <DescriptionWrapper ref={ref} top={top} textRisingSpeed={textRisingSpeed}>
            <text>{description}</text>
          </DescriptionWrapper>
        </HoverSection>
      </DescriptionContainer>
    );
  }
);

const Item = ({ redirectURL, title, description, imgURL, textRisingSpeed, isTextRising }: ItemPropsType) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [top, setTop] = useState(0);
  const textRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLLIElement>(null);
  const TEXT_RISING_STEP = 5;

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  useInterval(() => {
    if (
      !isTextRising ||
      !textRef.current ||
      !itemRef.current ||
      textRef.current.scrollHeight < itemRef.current.scrollHeight / 2
    )
      return;
    if (isHover) {
      if (top >= textRef.current.scrollHeight) {
        setTop(-TEXT_RISING_STEP * 2);
      } else {
        setTop(top + TEXT_RISING_STEP);
      }
    }
  }, textRisingSpeed || 300);

  return (
    <StyledItem ref={itemRef} className="gallery-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a href={redirectURL}>
        <img src={imgURL} alt={title} />
        {isHover && (
          <Description
            ref={textRef}
            description={description}
            title={title}
            top={top}
            textRisingSpeed={textRisingSpeed}
          />
        )}
      </a>
    </StyledItem>
  );
};

export default Item;

Item.defaultProps = {
  isTextRising: false,
  redirectURL: '',
  title: 'This is title',
  description: 'description',
  imgURL:
    'https://catnip-echium-964.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fba8bdb9c-c600-453f-bdb7-9c04419b026c%2Fdefault.png?table=block&id=440c81c7-fdfa-4688-87bd-51215d4ef7d3&spaceId=0b241d7f-6520-4240-ac94-27957e3f3aa5&width=2000&userId=&cache=v2',
  textRisingSpeed: 300,
};

const StyledItem = styled.li`
  list-style: none;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0px 1px 10px 0px rgba(63, 63, 63, 0.2);
  cursor: pointer;
  img {
    position: relative;
    border-radius: 4px;
    object-fit: cover;
    width: 100%;
    height: 100%;
    flex-grow: 1;
    object-fit: contain;
  }
  &:hover {
    transform: translateY(10px);
  }
  &:hover::after {
    content: '';
    position: absolute;
    left: 0;
    top: -10px;
    height: 10px;
    width: 100%;
  }
`;

const DescriptionContainer = styled.div`
  position: absolute;
  box-sizing: border-box;
  border-radius: 4px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 16px;
`;

const HoverSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid #fff;
  h3 {
    position: absolute;
    text-align: center;
    width: 90%;
    top: 0;
    overflow-wrap: break-word;
  }
`;

const DescriptionWrapper = styled.div<ItemDescriptionWrapperStyledPropsType>`
  position: absolute;
  top: 20%;
  width: 90%;
  max-height: calc(70% - 20px);
  overflow: hidden;
  text-align: center;
  margin: 20px 0;
  text {
    margin: 0;
    position: relative;
    height: 100%;
    overflow-wrap: break-word;
    top: -${(props) => props.top}px;
    transition: ${(props) => (props.textRisingSpeed ?? 300 / 1000) * 4}s;
  }
`;
