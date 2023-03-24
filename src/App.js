import React from 'react';
import './style.css';
import CustomButton from './CustomButton';
import { useState } from 'react';

export default function App() {
  const [buttons, setButtons] = useState(1);

  const createNewInstance = (e) => {
    e.preventDefault();
    setButtons(buttons + 1);
  };

  const components = [];
  for (let i=0; i<buttons; i++) {
      components.push(<CustomButton onNewInstance={createNewInstance} key={i}/>);
  }
  return components;
}
