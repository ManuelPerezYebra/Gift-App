import { useEffect, useLayoutEffect, useState } from 'react';
import { getGifs } from '../../helpers/getGifs';
import { GiftsContainer, InfoContainer } from './giftGrid.styles';
import { useFetchGifs } from '../../hooks/useFetchGifs';

export const GiftGrid = ({ category, limit }) => {
  const { images, isLoading } = useFetchGifs(category, limit);

  const categoryValue = category.toUpperCase();

  return (
    <>
      <InfoContainer>
        <h3>{categoryValue}</h3>
        {isLoading && <h2>Cargando...</h2>}
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
