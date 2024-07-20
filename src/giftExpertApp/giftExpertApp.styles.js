import styled from 'styled-components';

const MainContainer = styled.div`
  width: 80%;
  margin: 0px auto;
  padding: 20px;
  @media only screen and (max-width: 425px) {
    width: 100%;
  }
`;
const StyledButton = styled.button`
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
`;

export { MainContainer, StyledButton };
