import styled from 'styled-components';

const GiftsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  img {
    border-radius: 10px;
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
