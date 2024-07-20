import { useEffect, useState } from 'react';
import { getGifs } from '../../helpers/getGifs';
import { GiftsContainer } from './giftGrid.styles';

export const GiftGrid = ({ category, limit }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category, limit).then(setImages);
  }, [category, limit]);

  return (
    <>
      <h3>{category}</h3>
      <GiftsContainer>
        {images.map(img => (
          <img key={img.id} src={img.url} alt={img.title} />
        ))}
      </GiftsContainer>
    </>
  );
};
