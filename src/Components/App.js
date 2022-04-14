/* eslint-disable react-hooks/exhaustive-deps */
import { ThemeContext } from '../contexts/theme';
import React, { useContext, useEffect, useState } from 'react';
import Temp from './Temp';
import TempDisplay from './TempDisplay';

function App() {
  
  const [{theme,isDark},toggleTheme] = useContext(ThemeContext);
  console.log(theme, "theme")
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
    <div className="App" style={{backgroundColor:theme.backgroundColor,color:theme.color}}>
    <div>its a {isDark?"Dark theme":"light theme"} <button onClick={toggleTheme}>swicth to {!isDark?"Dark theme":"light theme"}</button></div>
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
