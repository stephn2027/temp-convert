import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './Components/App';
import { ThemeProvider } from './styles/theme';

import { GlobalCSS } from './styles/globalCSS.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalCSS />

      <App />
    </ThemeProvider>
  </React.StrictMode>
);
