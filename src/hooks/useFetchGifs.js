import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category, limit) => {
  const [images, setImages] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  console.log(isLoading);
  const getImages = async () => {
    const newImages = await getGifs(category, limit);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages(category, limit);
  }, [category, limit]);

  return {
    images,
    isLoading
  };
};
