/* eslint-disable react-hooks/exhaustive-deps */
import { ThemeContext } from '../contexts/theme';
import React, { useContext, useEffect, useState } from 'react';
import Temp from './Temp';
import TempDisplay from './TempDisplay';
import { MaterialUISwitch } from '../contexts/switchButton';
import FormControlLabel from '@mui/material/FormControlLabel';

function App() {
  
  const [{theme,isDark},toggleTheme] = useContext(ThemeContext);
  
  const [temp, setTemp] = useState(0);
  const [scale, setScale] = useState(false);
  const [tempDisplay, setTempDisplay] = useState('');
  useEffect(() => {
    convertTemp(temp);
  }, [temp, scale]);


  const handleChangeScale = () => setScale(!scale);

  const toCelcuis = (temperature) => {
    return ((temperature - 32) * 5) / 9;
  };
  const toFarenheit = (temperature) => {
    return (temperature * 9) / 5 + 32;
  };

  const convertTemp = (value) => {
    value = value ? value : 0;
    let tempVal = parseFloat(value);
    let convertedTemp = scale ? toCelcuis(tempVal) : toFarenheit(tempVal);
    setTempDisplay(Math.round(convertedTemp * 1000) / 1000);
  };

  return (
    <div className="App" style={{backgroundColor:theme.backgroundColor,color:theme.color,border:theme.border}}>
    <div className='app__theme theme--switch'>its a {isDark?"Dark theme":"light theme"} 
    
      <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }} defaultValue  />}
        label={`switch to ${!isDark?"Dark theme":"Light theme"}`}
        onClick={toggleTheme}
      />
    </div>
      <Temp
        temp={temp}
        onChangeScale={handleChangeScale}
        scale={scale}
        setTemp={setTemp}
      ></Temp>
      <TempDisplay
        tempDisplay={tempDisplay}
        temp={temp}
        scale={scale}
      ></TempDisplay>
    </div>
  );
}

export default App;
