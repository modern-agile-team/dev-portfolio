import { lazy, Suspense, useRef, useState } from 'react';
import styled from 'styled-components';
import { useInterval } from '../../common/hooks';
import { ItemPropsType, topType } from '../../common/types/ComponentTypes/ItemType';
import { Spinner } from '../Loader';
const LazyImage = lazy(() => import('../Lazy/Image'));

const Description = ({
  title,
  description,
  isTextRising,
  textRisingSpeed,
  titleColor,
  descriptionColor,
  hoverdInnerBorderColor,
  itemRef,
}: ItemPropsType & { itemRef: HTMLLIElement | null }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [top, setTop] = useState(0);
  const TEXT_RISING_STEP = 5;
  useInterval(() => {
    if (!isTextRising || !textRef.current || !itemRef || textRef.current.scrollHeight < itemRef.scrollHeight / 2)
      return;
    if (top >= textRef.current.scrollHeight) {
      setTop(-TEXT_RISING_STEP * 2);
    } else {
      setTop(top + TEXT_RISING_STEP);
    }
  }, textRisingSpeed || 300);
  return (
    <DescriptionContainer className="hover">
      <HoverSection className="inner-hover" hoverdInnerBorderColor={hoverdInnerBorderColor}>
        <h3 style={{ color: `${titleColor}` }}>{title}</h3>
        <DescriptionWrapper ref={textRef} top={top} textRisingSpeed={textRisingSpeed}>
          <pre style={{ color: `${descriptionColor}` }}>{`${description}`}</pre>
        </DescriptionWrapper>
      </HoverSection>
    </DescriptionContainer>
  );
};

/**
 * Express the section you want to brag about using item component.
 *
 * @props src: Image source url	(default: {@link https://picsum.photos/500/300/?random image})
 * @props title: Main Title Text (default: 'This is title')
 * @props description: Description Text	(default: 'description')
 * @props titleColor: title text color style (default: 'white')
 * @props descriptionColor: description text color style (default: 'white')
 * @props redirectURL: URL you want to redirect when clicked (default: '/')
 * @props textRisingSpeed: (default: 300)
 * @props isTextRising: (default: false)
 * @props hoverdInnerBorderColor: Inner border color of item when hoverd (default: 'white')
 */
const Item = ({
  src,
  title,
  description,
  titleColor,
  descriptionColor,
  redirectURL,
  textRisingSpeed,
  isTextRising,
  hoverdInnerBorderColor,
}: ItemPropsType) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const itemRef = useRef<HTMLLIElement>(null);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <Suspense fallback={<Spinner />}>
      <StyledItem
        ref={itemRef}
        className="gallery-item"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a href={redirectURL}>
          <LazyImage src={src || ''} alt={title} />
          {isHover && (
            <Description
              itemRef={itemRef.current}
              title={title}
              description={description}
              titleColor={titleColor}
              descriptionColor={descriptionColor}
              textRisingSpeed={textRisingSpeed}
              hoverdInnerBorderColor={hoverdInnerBorderColor}
              isTextRising={isTextRising}
            />
          )}
        </a>
      </StyledItem>
    </Suspense>
  );
};

export default Item;

Item.defaultProps = {
  src: 'https://picsum.photos/500/300/?random',
  title: 'This is title',
  description: 'description',
  titleColor: 'white',
  descriptionColor: 'white',
  redirectURL: '/',
  textRisingSpeed: 300,
  isTextRising: false,
  hoverdInnerBorderColor: 'white',
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

const HoverSection = styled.section<ItemPropsType>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid ${({ hoverdInnerBorderColor }) => hoverdInnerBorderColor};
  h3 {
    position: absolute;
    text-align: center;
    width: 90%;
    top: 0;
    overflow-wrap: break-word;
  }
`;

const DescriptionWrapper = styled.div<ItemPropsType & topType>`
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
