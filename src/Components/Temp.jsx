import React, { useState, useEffect } from 'react';
import { ToggleButtonGroup,ToggleButton } from '@mui/material';
export default function Temp({ temp, setTemp, scale, onChangeScale }) {
  const scaleName = scale ? ' Celcius ' : ' Farenheit ';
  const scaleNameR = scale ? ' Farenheit ' : ' Celcius ';
  const tempSign = !scale ? '℃' : '℉';
  const tempSignR = scale? '℃' : '℉';
  
  return (
    <div className="temp temp__container">
      <form className="temp__form">
        <div className="input__group">
          <label
            className="form__label"
            htmlFor="number"
            placeholder={tempSign}
          >
            {scaleNameR} to
            {scaleName}({tempSign} to {tempSignR})
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
        <div className='toggle__group'>

        <ToggleButtonGroup
          color="primary"
          value={scale?scaleName:scaleNameR}
          exclusive
          onChange={onChangeScale}
        >
          <div className='toggle__text'>Swap Units</div>
          <ToggleButton value={scaleName}>℃</ToggleButton>
         
          <ToggleButton value={scaleNameR}> ℉ </ToggleButton>
         
        </ToggleButtonGroup>
        </div>
      </form>
    </div>
  );
}
