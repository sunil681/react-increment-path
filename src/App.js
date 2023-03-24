import React from 'react';
import './style.css';
import CustomButton from './CustomButton';
import { useState } from 'react';

export default function App() {
  const [buttons, setButtons] = useState([null]);

  return buttons.map((button) => <CustomButton />);
}
