import React from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { TempStyle } from '../styles/tempStyle';

export default function Temp({ temp, setTemp, scale, onChangeScale, isDark }) {
  const scaleName = scale ? ' Celcius ' : ' Fahrenheit ';
  const scaleNameR = scale ? ' Fahrenheit ' : ' Celcius ';
  const tempSign = !scale ? '℃' : '℉';
  const tempSignR = scale ? '℃' : '℉';

  return (
    <TempStyle className="temp temp__container">
      <form className="temp__form">
        <div className="input__group">
          <label
            className="form__label"
            htmlFor="number"
            placeholder={tempSign}
          >
            {scaleNameR} to
            {scaleName}
            <span>
              ({tempSign} to {tempSignR})
            </span>
          </label>

          <input
            placeholder={tempSign}
            className="form__input"
            type="number"
            name="number"
            value={temp ? temp : ''}
            onChange={(e) => setTemp(e.target.value)}
          />
        </div>
        <div className="toggle__group">
          <ToggleButtonGroup
            color={'info'}
            value={scale ? scaleName : scaleNameR}
            exclusive
            onChange={onChangeScale}
          >
            <div className="toggle__text">Swap Units</div>

            <ToggleButton value={scaleName}  className="toggle__btn">℃</ToggleButton>

            <ToggleButton value={scaleNameR} className="toggle__btn"> ℉ </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </form>
    </TempStyle>
  );
}
