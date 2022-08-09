import React, { cloneElement, ReactElement, useMemo } from 'react';
import { useCarousel } from './hooks';
import { TbPlayerPlay, TbPlayerPause } from 'react-icons/tb';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { ChildrenWrapper, Container, Player, Wrapper } from './style';
interface Props {
  id?: string;
  children: React.ReactNode;
  width?: string;
  transition?: number;
  autoplaySpeed?: number;
  slideToShow?: number;
  isArrowShow?: boolean;
  isAutoplay?: boolean;
  isAutoplayControl?: boolean;
  arrowLocation?: 'bottom' | 'mid-side' | 'top' | 'bottom-side' | 'top-side';
  playerLocation?: 'bottom-mid' | 'bottom-left' | 'bottom-right' | 'top-mid' | 'top-left' | 'top-right';
  prevArrowIcon?: ReactElement;
  nextArrowIcon?: ReactElement;
  startAutoplayIcon?: ReactElement;
  pauseAutoplayIcon?: ReactElement;
}

const Carousel = ({
  id,
  children,
  width,
  transition = 1000,
  autoplaySpeed = 3000,
  slideToShow = 1,
  isArrowShow = true,
  isAutoplay = false,
  isAutoplayControl = true,
  arrowLocation = 'mid-side',
  playerLocation = 'bottom-mid',
  prevArrowIcon = <FiChevronLeft />,
  nextArrowIcon = <FiChevronRight />,
  startAutoplayIcon = <TbPlayerPlay />,
  pauseAutoplayIcon = <TbPlayerPause />,
}: Props) => {
  const { itemList, showIndex, transitionTime, listeners, itemLength } = useCarousel({
    children,
    slideToShow,
    transition,
    autoplaySpeed,
    isAutoplay,
  });
  const { showPrev, showNext, stopPlayCarousel, playCarousel } = listeners;
  const sizedPrevArrowIcon = useMemo(() => cloneElement(prevArrowIcon), [prevArrowIcon]);
  const sizedNextArrowIcon = useMemo(() => cloneElement(nextArrowIcon), [nextArrowIcon]);
  const sizedStartAutoplayIcon = useMemo(() => cloneElement(startAutoplayIcon), [startAutoplayIcon]);
  const sizedPauseAutoplayIcon = useMemo(() => cloneElement(pauseAutoplayIcon), [pauseAutoplayIcon]);

  return (
    <Wrapper arrowLocation={arrowLocation} width={width} {...listeners}>
      {isArrowShow && (
        <div className="arrow-icon-wrapper" id="prev-button" onClick={showPrev}>
          {sizedPrevArrowIcon}
        </div>
      )}
      <Container len={itemLength} transition={transitionTime} showIndex={showIndex}>
        <div className="carousel-wrapper">
          <div className="carousel-container">
            {itemList.map((child, index) => {
              return (
                <ChildrenWrapper len={itemLength} slideToShow={slideToShow} key={index}>
                  {child}
                </ChildrenWrapper>
              );
            })}
          </div>
        </div>
      </Container>
      {isArrowShow && (
        <div className="arrow-icon-wrapper" id="next-button" onClick={showNext}>
          {sizedNextArrowIcon}
        </div>
      )}
      {isAutoplayControl && (
        <Player playerLocation={playerLocation}>
          <div className="icon-wrapper" id="start-button" onClick={playCarousel}>
            {sizedStartAutoplayIcon}
          </div>
          <div className="icon-wrapper" id="pause-button" onClick={stopPlayCarousel}>
            {sizedPauseAutoplayIcon}
          </div>
        </Player>
      )}
    </Wrapper>
  );
};

export default React.memo(Carousel);

Carousel.defaultProps = {
  transition: 1000,
  autoplaySpeed: 3000,
  slideToShow: 1,
  isArrowShow: true,
  isAutoplay: false,
  isAutoplayControl: true,
  arrowLocation: 'mid-side',
  prevArrowIcon: <FiChevronLeft />,
  nextArrowIcon: <FiChevronRight />,
  startAutoplayIcon: <TbPlayerPlay />,
  pauseAutoplayIcon: <TbPlayerPause />,
};
