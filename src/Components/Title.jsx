import React, { useContext } from 'react';
import { TitleStyled } from '../styles/title';
import { ThemeContext } from '../styles/theme.js';
export default function Title() {
  const [{ theme }] = useContext(ThemeContext);
  return (
    <TitleStyled className="title__container">
      <div className="title__text" style={{ color: theme.color }}>
        <div>
          <span className="text--first">Temperature</span>
          <span className="text--second">Converter</span>
        </div>
      </div>
    </TitleStyled>
  );
}
