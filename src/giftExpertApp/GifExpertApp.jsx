import { useState, useContext } from 'react';
import { MainContainer } from './giftExpertApp.styles';
import { v4 } from 'uuid';
import { AddCategory } from '../components/AddCategory/AddCategory';
import { GiftGrid } from '../components/giftGrid/GiftGrid';
import { CounterContext } from '../context/CounterContext';

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    { name: '', numberOfGift: 50 }
  ]);
  const { counter } = useContext(CounterContext);

  const onAddCategory = (newCategory, numberOfGift) => {
    if (categories.some(category => category.name === newCategory)) return;
    setCategories([
      { name: newCategory, numberOfGift: numberOfGift || counter },
      ...categories
    ]);
  };

  return (
    <>
      <MainContainer>
        <h1>Gif API Repository</h1>
        <AddCategory onNewCategory={onAddCategory} />

        {categories.map(category => (
          <GiftGrid
            key={v4()}
            category={category.name}
            limit={category.numberOfGift}
          />
        ))}
      </MainContainer>
    </>
  );
};

export default GifExpertApp;
