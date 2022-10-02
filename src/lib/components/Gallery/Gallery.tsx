import styled, { css } from 'styled-components';
import {
  GalleryPropsType,
  GalleryStyledPropsType,
  GalleryItemWrapperStyledPropsType,
} from '../../common/types/ComponentTypes/GalleryType';

/**
 * You can make easily Gallery by inserting your customized components in Gallery component.
 *
 * @props id: Name to be added to Sidebar
 * @props column: Number of vertical lines (default: 3)
 * @props gap: Spacing between items in Gallery	(default: normal)
 * @props theme: You can choose the color of your customized components in Gallery when they are hoverd with a variety of theme such as 'mid-night', 'blossom', 'fruits', 'bare-bare', 'mint-chocolate'.	(default: mid-night)
 * @props padding: Gallery padding	(default: 2em 10em)
 */
const Gallery = ({ id, children, column, gap, theme, padding }: GalleryPropsType) => {
  return (
    <Wrap id={id} padding={padding}>
      <Wrapper>
        <ItemWrapper theme={theme} column={column} gap={gap}>
          {children}
        </ItemWrapper>
      </Wrapper>
    </Wrap>
  );
};

export default Gallery;

Gallery.defaultProps = {
  column: 3,
  gap: 'normal',
  theme: 'mid-night',
};

const Wrap = styled.div<GalleryStyledPropsType>`
  padding: ${({ padding }) => padding ?? '2em 10em'};
  @media (max-width: 1280px) {
    padding: 10px;
  }
  @media (max-width: 568px) {
    padding: 0;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  outline: 0px;
  padding: 16px;
  border-radius: 6px;
`;

const ItemWrapper = styled.ul<GalleryItemWrapperStyledPropsType>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.column}, 1fr);
  padding: 0;
  margin: 0;
  ${({ gap }) => {
    switch (gap) {
      case 'narrower':
        return css`
          gap: 10px;
        `;
      case 'narrow':
        return css`
          gap: 15px;
        `;
      case 'normal':
        return css`
          gap: 20px;
        `;
      case 'wide':
        return css`
          gap: 25px;
        `;
      case 'wider':
        return css`
          gap: 30px;
        `;
    }
  }}
  .gallery-item {
    .hover {
      ${({ theme }) => {
        switch (theme) {
          case 'mid-night':
            return css`
              background-color: #333333a8;
              color: #e7e7e7;
            `;
          case 'blossom':
            return css`
              background-color: #b156676e;
              color: #fff;
            `;
          case 'fruits':
            return css`
              background-color: #e99f2982;
              color: #fff;
            `;
          case 'bare-bare':
            return css`
              background: linear-gradient(#c2e3f4b1, 70%, #efb630b1);
              color: #030305;
            `;
          case 'mint-chocolate':
            return css`
              background-color: #90c8b64a;
              color: #530f0f;
            `;
        }
      }}
    }
  }
  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 568px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
