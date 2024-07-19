import { useState } from 'react';
import { MainContainer } from './giftExpertApp.styles';
import { v4 } from 'uuid';
import { AddCategory } from '../components/AddCategory/AddCategory';
import { GiftGrid } from '../components/giftGrid/GiftGrid';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Marvel']);
  const onAddCategory = newCategory => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  console.log(categories);
  return (
    <>
      <MainContainer>
        <h1>Gift Api</h1>
        <AddCategory onNewCategory={event => onAddCategory(event)} />

        {categories.map(category => (
          <GiftGrid key={v4()} category={category} />
        ))}
      </MainContainer>
    </>
  );
};

export default GifExpertApp;
