import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';

import App from './Components/App';
import { ThemeProvider } from './contexts/theme';
import styled,{createGlobalStyle} from 'styled-components';
const root = ReactDOM.createRoot(document.getElementById('root'));
const GlobalStyles = createGlobalStyle`
  @font-face{
        font-family:'radnika_next';
        src:url('../public/static/radnikanext-medium-webfont.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    };
     html{
         --red:#ff0000;
         --black:#393939;
         --grey:#393939;
         --gray: var(--grey);
         --lightGrey: #e1e1e1;
         --offWhite: #ededed;
         --maxWidth: 1000px;
         --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
         
        box-sizing: border-box;
        
     }
     *,*::before,*::after{
         box-sizing: inherit;
     }
     body{
         font-family:'radnika_next',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
         padding: 0;
         margin: 0;
         font-size: 1.5rem;
         line-height: 2;
         

     }
     a{
         text-decoration: none;
         color: var(--black);
         & :hover{
             text-decoration: underline;
         }
     }
     button{
        font-family:'radnika_next',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

     }
`;

root.render(
  <React.StrictMode>
  <ThemeProvider>
  <GlobalStyles/>

    <App />
  

  </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

