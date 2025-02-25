import { createGlobalStyle } from 'styled-components';

export const GlobalCSS = createGlobalStyle`
  @font-face{
        font-family:'radnika_next';
        src:url('../public/static/radnikanext-medium-webfont.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    };
     html{
         --yellow-light:#ffff00;
         --yellow-dark:#DEB910;
         --blue-light:#2196f3;
         --blue-dark:#1a237e;
         --red:#ff0000;
         --black:#263238;
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
