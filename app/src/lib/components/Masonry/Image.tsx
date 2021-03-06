import styled from 'styled-components';
import { MAIN } from '../../common/theme';

interface Props {
  src: string;
  subhead?: string;
  head?: string;
  redirectURL?: string;
}

const Image = ({ src, subhead, head, redirectURL }: Props) => {
  return (
    <Wrap>
      <Items>
        <a href={redirectURL}>
          <div className="imgWrap">
            <img src={src} />
          </div>
          <div className="imgDes">
            <p>{subhead}</p>
            <span>{head}</span>
          </div>
        </a>
      </Items>
    </Wrap>
  );
};

export default Image;

Image.defaultProps = {
  subhead: 'Write your subhead',
  head: 'script your head',
  redirectURL: '/',
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  display: inline;
`;

const Items = styled.div`
  display: inline-block;
  width: 100%;
  margin-bottom: 0.5em;
  a {
    text-decoration-line: none;
  }
  .imgWrap {
    overflow: hidden;
  }
  img {
    width: 100%;
    transition: 0.6s;
    object-fit: cover;
    display: block;
    :hover {
      transform: scale(105%);
    }
  }
  .imgDes {
    p {
      margin: 5px 0px 2px 1px;
      font-size: 14px;
      @media screen and (max-width: 800px) {
        font-size: 1.5vw;
      }
    }
    span {
      font-size: 22px;
      font-weight: 800;
      @media screen and (max-width: 800px) {
        font-size: 1.5vw;
      }
    }
    color: black;
    margin-bottom: 10px;
    :hover {
      color: ${MAIN.MAIN_COLOR};
    }
  }
`;
