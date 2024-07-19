import React from 'react';
import ReactDOM from 'react-dom/client';
import GifExpertApp from './giftExpertApp/GifExpertApp';
import { GlobalStyles } from './components/GlobalStyles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <GifExpertApp />
  </React.StrictMode>
);
