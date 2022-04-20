/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import Temp from './Temp';
import TempDisplay from './TempDisplay';
import Title from './Title';
import TempDetails from './TempDetails'
import { MaterialUISwitch } from '../styles/switchButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import { AppStyles } from '../styles/appStyles';
import { ThemeContext } from '../styles/theme';

function App() {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

  const [temp, setTemp] = useState(0);
  const [scale, setScale] = useState(false);
  const [tempDisplay, setTempDisplay] = useState('');
  useEffect(() => {
    convertTemp(temp);
  }, [temp, scale]);

  const handleChangeScale = () => setScale(!scale);

  const toCelcuis = (temperature) => {
    return temperature - 32 * (5 / 9);
  };
  const toFahrenheit = (temperature) => {
    return temperature * (9 / 5) + 32;
  };

  const convertTemp = (value) => {
    value = value ? value : 0;
    let tempVal = parseFloat(value);
    let convertedTemp = scale ? toCelcuis(tempVal) : toFahrenheit(tempVal);
    setTempDisplay(Math.round(convertedTemp * 1000) / 1000);
  };

  return (
    <AppStyles>
      <div
        className="App"
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.color,
          border: theme.border,
          transition: 'ease-in .5s all',
        }}
      >
        <div className="app__theme--switch">
          <FormControlLabel
            label={`switch to ${!isDark ? 'dark theme' : 'light theme'}`}
            control={<MaterialUISwitch sx={{ m: 1 }} checked={isDark} />}
            onClick={toggleTheme}
          />
        </div>
        <Title />

        <Temp
          temp={temp}
          onChangeScale={handleChangeScale}
          scale={scale}
          isDark={isDark}
          setTemp={setTemp}
        ></Temp>
        <TempDisplay
          tempDisplay={tempDisplay}
          temp={temp}
          scale={scale}
        ></TempDisplay>
        <TempDetails scale={scale}/>
      </div>
    </AppStyles>
  );
}

export default App;
