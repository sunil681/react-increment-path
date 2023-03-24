import './style.css'
import React, { useState, useRef } from 'react';

const DIRECTIONS = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

export default function CustomButton({ onNewInstance }) {
  const [value, setValue] = useState(0);
  const curDirection = useRef(DIRECTIONS.INCREMENT);
  const newInstance = useRef(false);

  const changeValue = (e) => {
    e.preventDefault();

    if (curDirection.current === DIRECTIONS.INCREMENT) {
      if (value < 5 && value > -5) {
        if (value === 0 && newInstance.current === true) {
          //create new instance
          onNewInstance(e);
          newInstance.current = false;
        }        
        setValue(value + 1);
      } else {
        curDirection.current = DIRECTIONS.DECREMENT;
        newInstance.current = true;
        setValue(value - 1);
      }
    } else {
      if (value < 5 && value > -5) {
        setValue(value - 1);
      } else {
        curDirection.current = DIRECTIONS.INCREMENT;
        setValue(value + 1);
      }
    }
  };

  return (
    <p className={'container'}>
      <div>Direction: {curDirection.current}</div>
      <div>Value: {value}</div>
      <button onClick={changeValue}>Click Me</button>
    </p>
  );
}
