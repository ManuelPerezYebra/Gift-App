import { useEffect, useState } from 'react';
import { getGifs } from '../../helpers/getGifs';
import { GiftGridItem } from '../giftGridItem/GiftGridItem';
import { GiftsContainer } from './giftGrid.styles';

export const GiftGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    console.log(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h1>{category}</h1>
      <GiftsContainer>
        {images.map(image => (
          <GiftGridItem key={image.id} {...image} />
        ))}
      </GiftsContainer>
    </>
  );
};
