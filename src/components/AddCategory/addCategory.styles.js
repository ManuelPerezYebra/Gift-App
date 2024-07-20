import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;

  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: black;
  padding: 10px;

  input {
    color: #333333;
    font-size: 18px;
    border-radius: 10px;
    padding: 10px;
    padding-left: 20px;
    border: none;
    background-color: #e6e6e6;
    box-shadow: 0px 0px 32px -12px rgba(0, 0, 0, 0.15);
    width: 55%;
    margin: 5px 0;

    @media only screen and (max-width: 425px) {
      font-size: 14px;
      padding: 5px;
      flex: 1 1 100%;
      margin: 5px 0;
    }
  }

  input[type='number'] {
    margin-left: 1%;
    font-size: 18px;
    text-align: center;
    width: 20%;

    @media only screen and (max-width: 425px) {
      font-size: 14px;
      flex: 1 1 45%;
    }
  }

  input[type='submit'] {
    margin-left: 1%;
    font-size: 18px;
    flex: 1 1 20%;
    text-align: center;

    @media only screen and (max-width: 425px) {
      font-size: 14px;
      flex: 1 1 45%;
    }
  }
`;

export { StyledForm };
