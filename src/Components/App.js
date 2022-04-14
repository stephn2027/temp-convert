import React,{useEffect, useState} from 'react';
import Temp from "./Temp";
import TempDisplay from "./TempDisplay";

function App() {

  const [temp,setTemp]= useState(0);

  useEffect(() => {
   
  }, [temp])
  
  const handleChangeTemp =(value)=>{
    setTemp(value);
    
  }
  

  return (
    <div className="App">
      <Temp  temp={temp} setTemp={setTemp}></Temp>
      <TempDisplay ></TempDisplay>
    </div>
  );
}

export default App;
