import styled from 'styled-components';

const GiftsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  img {
    max-width: 150px;
  }

  @media only screen and (max-width: 425px) {
    gap: 5px;

    img {
      max-width: 80px;
    }
  }
`;

export { GiftsContainer };
