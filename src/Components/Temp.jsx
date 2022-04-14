import React, { useState,useEffect } from 'react';

export default function Temp({ temp, setTemp }) {
  const [temperature, setTemperature] = useState('');
  

  useEffect(()=>{
    
    const handleChange = (value) => {
      setTemperature(value);
    };
  },[])

  return (
    <div className="temp temp__container">
      <form className="temp__form">
        <div className="input__group">
          <label className="form__label" htmlFor="number">
            Enter Temperature in{' '}
          </label>
          <input
            className="form__input"
            type="number"
            name="number"
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}
