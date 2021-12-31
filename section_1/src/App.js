import React from 'react';
import { useState } from 'react';
import ChildArea from './components/ChildArea';
import './App.css';

const App = () => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open)
  return (
    <div>
      <h1>Hello, World!</h1>
      <div>
        <input value={text} onChange={onChangeText} type="text"/>
        <button onClick={onClickOpen}>Display</button>
      </div>
      <ChildArea
        open = {open}
      />
    </div>
  )
}

export default App;
