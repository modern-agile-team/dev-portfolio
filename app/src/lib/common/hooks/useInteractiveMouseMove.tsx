import { useState } from 'react';

const useInteractiveMouseMove = () => {
  const [mouseY, setMouseY] = useState<number>(0);
  const [mouseX, setMouseX] = useState<number>(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLDivElement;
    const mouseYLocation = e.pageY - target.offsetTop;
    const mouseXLocation = e.pageX / (target.offsetWidth / 2) - 1;
    const midPointY = target.clientHeight / 2;
    setMouseY(mouseYLocation / midPointY - 1);
    setMouseX(mouseXLocation);
    return [mouseX, mouseY];
  };

  return { handleMouseMove, mouseX, mouseY };
};

export default useInteractiveMouseMove;
