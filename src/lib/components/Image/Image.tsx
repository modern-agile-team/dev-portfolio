import styled from 'styled-components';
import { ImagePropsType } from '../../common/types/ComponentTypes/ImageType';

/**
 * Express the section you want to brag about using Image component.
 *
 * @props src: Image source url. (default: {@link https://picsum.photos/300/300/?random})
 * @props subhead: Sub title text.	(default: 'Write your subhead')
 * @props subheadSize: subhead text size style. (default: '14px')
 * @props subheadColor: subhead text color size style. (default: 'black')
 * @props head: Main title text.	(default: 'Write your head')
 * @props headSize: head text size style. (default: '20px')
 * @props headWeight: head text weight style. (default: '700')
 * @props headColor: head color style. (default: 'black')
 * @props redirectURL: URL you want to redirect when clicked. (default: '/')
 * @props noShowHead: If this value is set to True, you can hide the head text. (default: false)
 * @props zoomWhenHover: If this value is set to True, you can zoom image when hovered on image. (default: true)
 */
const Image = ({
  src,
  subhead,
  subheadSize,
  subheadColor,
  head,
  headSize,
  headWeight,
  headColor,
  redirectURL,
  noShowHead,
  zoomWhenHover,
}: ImagePropsType) => {
  return (
    <Wrap>
      <Items
        subheadSize={subheadSize}
        subheadColor={subheadColor}
        headSize={headSize}
        headWeight={headWeight}
        headColor={headColor}
        noShowHead={noShowHead}
        zoomWhenHover={zoomWhenHover}
      >
        <a href={redirectURL}>
          <div className="imgWrap">
            <img src={src} />
          </div>
          <div className="imgDes">
            <p className="subhead">{subhead}</p>
            <div className="head">{head}</div>
          </div>
        </a>
      </Items>
    </Wrap>
  );
};

export default Image;

Image.defaultProps = {
  src: 'https://picsum.photos/300/300/?random',
  subhead: 'Write your subhead',
  subheadSize: '14px',
  subheadColor: 'black',
  head: 'Write your head',
  headSize: '20px',
  headWeight: '700',
  headColor: 'black',
  redirectURL: '/',
  noShowHead: false,
  zoomWhenHover: true,
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  display: inline;
  color: red;
`;

const Items = styled.div<ImagePropsType>`
  display: inline-block;
  width: 100%;
  margin-bottom: ${({ noShowHead }) => (noShowHead ? 0 : '1.2em')};
  a {
    text-decoration-line: none;

    .imgWrap {
      overflow: hidden;
    }
    img {
      width: 100%;
      transition: 0.6s;
      object-fit: cover;
      display: block;
      :hover {
        transform: ${({ zoomWhenHover }) => (zoomWhenHover ? 'scale(105%)' : 'none')};
      }
    }
    .imgDes {
      display: ${({ noShowHead }) => (noShowHead ? 'none' : 'inline')};
      .subhead {
        margin: 5px 0px 1px 1px;
        font-size: ${({ subheadSize }) => subheadSize};
        color: ${({ subheadColor }) => subheadColor};
        @media screen and (max-width: 800px) {
          font-size: 1.5vw;
        }
      }
      .head {
        font-size: ${({ headSize }) => headSize};
        font-weight: ${({ headWeight }) => headWeight};
        color: ${({ headColor }) => headColor};
        @media screen and (max-width: 800px) {
          font-size: 1.5vw;
        }
      }
      margin-bottom: 10px;
    }
  }
`;
