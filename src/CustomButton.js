import React, { useState, useRef } from 'react';

const DIRECTIONS = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

export default function CustomButton() {
  const [value, setValue] = useState(0);
  const curDirection = useRef(DIRECTIONS.INCREMENT);

  const changeValue = (e) => {
    e.preventDefault();

    if (curDirection.current === DIRECTIONS.INCREMENT) {
      if (value < 5 && value > -5) {
        setValue(value + 1);
      } else {
        curDirection.current = DIRECTIONS.DECREMENT;
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
    <>
      <div>Direction: {curDirection.current}</div>
      <div>Value: {value}</div>
      <button onClick={changeValue}>Click Me</button>
    </>
  );
}
