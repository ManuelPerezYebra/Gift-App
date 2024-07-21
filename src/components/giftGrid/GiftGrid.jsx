import { useEffect, useState } from 'react';
import { getGifs } from '../../helpers/getGifs';
import { GiftsContainer, InfoContainer } from './giftGrid.styles';

export const GiftGrid = ({ category, limit }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category, limit).then(setImages);
  }, [category, limit]);

  const categoryValue = category.toUpperCase();
  return (
    <>
      <InfoContainer>
        <h3>{categoryValue}</h3>
        <p>- Mostrando {limit} resultados</p>
      </InfoContainer>

      <GiftsContainer>
        {images.map(img => (
          <img key={img.id} src={img.url} alt={img.title} />
        ))}
      </GiftsContainer>
    </>
  );
};
