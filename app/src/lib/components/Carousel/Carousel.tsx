import React, { cloneElement, useMemo } from 'react';
import { useCarousel } from './hooks';
import { TbPlayerPlay, TbPlayerPause } from 'react-icons/tb';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { ChildrenWrapper, Container, Player, Wrapper } from './style';
import { CarouselPropsType } from '../../common/types/ComponentTypes/CarouselType';

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
}: CarouselPropsType) => {
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
    <Wrapper id={id} arrowLocation={arrowLocation} width={width} {...listeners}>
      {isArrowShow && (
        <div className="arrow-icon-wrapper" id="prev-button" onClick={showPrev}>
          {sizedPrevArrowIcon}
        </div>
      )}
      {isAutoplayControl && playerLocation.split('-')[0] === 'top' && (
        <Player playerLocation={playerLocation}>
          <div className="icon-wrapper" id="start-button" onClick={playCarousel}>
            {sizedStartAutoplayIcon}
          </div>
          <div className="icon-wrapper" id="pause-button" onClick={stopPlayCarousel}>
            {sizedPauseAutoplayIcon}
          </div>
        </Player>
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
      {isArrowShow && playerLocation.split('-')[0] === 'bottom' && (
        <div className="arrow-icon-wrapper" id="next-button" onClick={showNext}>
          {sizedNextArrowIcon}
        </div>
      )}
      {isAutoplayControl && playerLocation.split('-')[0] === 'bottom' && (
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
