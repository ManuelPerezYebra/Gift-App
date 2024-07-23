import styled from 'styled-components';

const StyledForm = styled.form`
  width: 100%;
  color: black;
  align-items: center;
  display: flex;

  input {
    color: #333333;
    font-size: 18px;
    border-radius: 10px;
    border: none;
    background-color: #e6e6e6;
    box-shadow: 0px 0px 32px -12px rgba(0, 0, 0, 0.15);
    width: 60%;
    padding: 10px;
  }
  input[type='number'] {
    color: #333333;
    margin-left: 1%;
    width: 18%;
    text-align: center;
    box-shadow: 0px 0px 32px -12px rgba(0, 0, 0, 0.15);
  }
  input[type='submit'] {
    margin-left: 1%;
    color: #333333;
    width: 20%;
    text-align: center;
    box-shadow: 0px 0px 32px -12px rgba(0, 0, 0, 0.15);
    padding: 10px;
  }
  @media only screen and (max-width: 470px) {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: space-between;

    input {
      font-size: 14px;
      border-radius: 10px;
      padding: 5px;
      border: none;
      background-color: #e6e6e6;
      box-shadow: 0px 0px 32px -12px rgba(0, 0, 0, 0.15);
      width: 60%;
    }
    input[type='number'] {
      margin-left: 1%;
      width: 18%;
      padding: 5px;

      text-align: center;
      box-shadow: 0px 0px 32px -12px rgba(0, 0, 0, 0.15);
    }
    input[type='submit'] {
      margin-left: 1%;
      padding: 5px;

      width: 20%;
      box-shadow: 0px 0px 32px -12px rgba(0, 0, 0, 0.15);
    }
  }
`;

export { StyledForm };
