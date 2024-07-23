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

  @media only screen and (max-width: 500px) {
    gap: 5px;
    width: 100%;

    img {
      max-width: 70px;
    }
  }
`;
const InfoContainer = styled.div`
  text-align: center;
  h3 {
    margin-bottom: 0px;
  }
  p {
    margin-top: 5px;
  }
`;

export { GiftsContainer, InfoContainer };
