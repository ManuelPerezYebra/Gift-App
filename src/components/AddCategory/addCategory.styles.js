import styled from 'styled-components';

const StyledForm = styled.form`
  width: 100%;
  input {
    font-size: 28px;
    border-radius: 10px;
    padding: 10px;
    border: none;
    background-color: #e6e6e6;
    box-shadow: 0px 0px 32px -12px rgba(0, 0, 0, 0.15);
    width: 78%;
  }
  input[type='submit'] {
    margin-left: 1%;
    width: 20%;

    box-shadow: 0px 0px 32px -12px rgba(0, 0, 0, 0.15);
  }
  @media only screen and (max-width: 425px) {
    width: 100%;
    input {
      font-size: 16px;
      border-radius: 10px;
      padding: 5px;
      border: none;
      background-color: #e6e6e6;
      box-shadow: 0px 0px 32px -12px rgba(0, 0, 0, 0.15);
      width: 68%;
    }
    input[type='submit'] {
      margin-left: 1%;
      width: 30%;
      font-size: 16px;

      box-shadow: 0px 0px 32px -12px rgba(0, 0, 0, 0.15);
    }
  }
`;

export { StyledForm };
