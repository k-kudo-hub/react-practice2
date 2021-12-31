import React from 'react';
import { useState } from 'react';
import './App.css';

const App = () => {
  const [countNum, setCountNum] = useState(0);
  const countUp = () => setCountNum(countNum + 1);
  const countDown = () => setCountNum(countNum - 1);
  return (
    <div>
      <h1>Hello, World!</h1>
      <div style={{ display: 'flex' }}>
        <button onClick={countUp}>CountUp</button>
        <button onClick={countDown}>CountDown</button>
      </div>
      <p>{countNum}</p>
    </div>
  )
}

export default App;
