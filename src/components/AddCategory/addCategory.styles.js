import styled from 'styled-components';

const StyledForm = styled.form`
  width: 100%;
  color: black;
  input {
    color: #333333;
    font-size: 18px;
    border-radius: 10px;
    padding: 10px;
    padding-left: 20px;
    border: none;
    background-color: #e6e6e6;
    box-shadow: 0px 0px 32px -12px rgba(0, 0, 0, 0.15);
    width: 50%;
  }
  input[type='submit'] {
    margin-left: 1%;
    font-size: 18px;
    color: #333333;

    width: 20%;

    box-shadow: 0px 0px 32px -12px rgba(0, 0, 0, 0.15);
  }
  input[type='number'] {
    color: #333333;

    margin-left: 1%;
    font-size: 18px;

    width: 20%;
    text-align: center;

    box-shadow: 0px 0px 32px -12px rgba(0, 0, 0, 0.15);
  }
  @media only screen and (max-width: 470px) {
    width: 100%;
    font-size: 12px;

    input {
      border-radius: 10px;
      padding: 5px;
      border: none;
      background-color: #e6e6e6;
      box-shadow: 0px 0px 32px -12px rgba(0, 0, 0, 0.15);
      width: 55%;
    }
    input[type='number'] {
      margin-left: 1%;
      width: 20%;
      text-align: center;

      box-shadow: 0px 0px 32px -12px rgba(0, 0, 0, 0.15);
    }
  }
  input[type='submit'] {
    margin-left: 1%;
    width: 20%;
    box-shadow: 0px 0px 32px -12px rgba(0, 0, 0, 0.15);
  }
`;

export { StyledForm };
