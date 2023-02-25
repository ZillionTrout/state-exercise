import React, { useState } from 'react'

const Switch = () => {
  const [counter, setCounter] = useState(0);
  const [theme, setTheme] = useState('light');

  const setLightTheme = () => {
    setCounter(counter +1);
    setTheme('light')
  }

  const setDarkTheme = () => {
    setCounter(counter +1);
    setTheme('dark')
  }
  
  return (
    <div className={`switch ${theme}`}>
      <h2>Theme picker</h2>
      <h4>Times changed: {counter} </h4>
      <button onClick={setLightTheme}>Theme Light</button>
      <button onClick={setDarkTheme}>Theme Dark</button>
    </div>
    
  )
}

export default Switch;
