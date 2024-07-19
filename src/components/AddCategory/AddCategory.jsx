import { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledForm } from './addCategory.styles';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <StyledForm
        action=""
        onSubmit={event =>
          onSubmit(event, inputValue, onNewCategory, setInputValue)
        }
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Search your favorite gift"
          value={inputValue}
          onChange={event => onInputChange(event, setInputValue)}
        />
        <input type="submit" value="Search" />
      </StyledForm>
    </>
  );
};

const onInputChange = (event, setInputValue) => {
  setInputValue(event.target.value);
};
const onSubmit = (event, inputValue, onNewCategory, setInputValue) => {
  event.preventDefault();
  const newInputValue = inputValue.trim();
  console.log(inputValue);
  if (newInputValue.length <= 1) return;

  onNewCategory(newInputValue);
  setInputValue('');
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
};
