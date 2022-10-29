import { useState } from 'react';
import { Spinner } from '../Loader';

const LazyImage = ({ src, alt }: { src: string; alt?: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      {isLoading && <Spinner />}
      <img
        src={src}
        alt={alt}
        onLoad={(e) => {
          setIsLoading(false);
        }}
      />
    </>
  );
};

export default LazyImage;
