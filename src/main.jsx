import React from 'react';
import ReactDOM from 'react-dom/client';
import GifExpertApp from './giftExpertApp/GifExpertApp';
import { GlobalStyles } from './components/GlobalStyles/GlobalStyles';
import CounterProvider from './providers/CounterProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterProvider>
      <GlobalStyles />
      <GifExpertApp />
    </CounterProvider>
  </React.StrictMode>
);
