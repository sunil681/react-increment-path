import React from 'react';
import './style.css';
import CustomButton from './CustomButton';
import { useState } from 'react';

export default function App() {
  const [buttons, setButtons] = useState([0]);

  const createNewInstance = (e) => {
    e.preventDefault();
    setButtons([...buttons, buttons.length]);
  };

  return buttons.map((button) => <CustomButton onNewInstance={createNewInstance} key={button}/>);
}
