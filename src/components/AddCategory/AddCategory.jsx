import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { StyledForm } from './addCategory.styles';
import { CounterContext } from '../../context/CounterContext';

export const AddCategory = ({ onNewCategory }) => {
  const { counter, setCounter } = useContext(CounterContext);

  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <StyledForm
        action=""
        onSubmit={event =>
          onSubmit(event, inputValue, onNewCategory, setInputValue, counter)
        }
      >
        <input
          type="text"
          name="text"
          id=""
          placeholder="Search your favorite gift"
          value={inputValue}
          onChange={event => onInputChange(event, setInputValue)}
        />
        <input
          type="number"
          name="number"
          id=""
          placeholder="1 to 60"
          onChange={event => onInputValue(event, setCounter)}
        />
        <input type="submit" value="Search" />
      </StyledForm>
    </>
  );
};

const onInputChange = (event, setInputValue) => {
  setInputValue(event.target.value);
};
const onInputValue = (event, setCounter) => {
  setCounter(event.target.value);
};
const onSubmit = (event, inputValue, onNewCategory, setInputValue, counter) => {
  event.preventDefault();
  const newInputValue = inputValue.trim();
  if (newInputValue.length <= 1) return;

  onNewCategory(newInputValue, counter);
  setInputValue('');
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
};
