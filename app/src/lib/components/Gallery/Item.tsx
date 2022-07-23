import { useState } from 'react';
import styled from 'styled-components';

interface Props {
  redirectURL?: string;
  title?: string;
  description?: string;
  imgURL?: string;
}

const Item = ({ redirectURL, title, description, imgURL }: Props) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <StyledItem className="gallery-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a href={redirectURL}>
        <img src={imgURL} alt={title} />
        {isHover && (
          <DescriptionContainer className="hover">
            <section className="inner-hover">
              <h3>{title}</h3>
              <p>{description}</p>
            </section>
          </DescriptionContainer>
        )}
      </a>
    </StyledItem>
  );
};

export default Item;

Item.defaultProps = {
  redirectURL: '',
  title: 'This is title',
  description: 'description',
  imgURL:
    'https://catnip-echium-964.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fba8bdb9c-c600-453f-bdb7-9c04419b026c%2Fdefault.png?table=block&id=440c81c7-fdfa-4688-87bd-51215d4ef7d3&spaceId=0b241d7f-6520-4240-ac94-27957e3f3aa5&width=2000&userId=&cache=v2',
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
  .inner-hover {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 1px solid #fff;
  }
  h3,
  p {
    text-align: center;
    width: 80%;
    overflow-wrap: break-word;
  }
`;
