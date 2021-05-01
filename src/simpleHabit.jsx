// Practice React Hook
import React, { useCallback, useEffect, useState } from 'react';
import './app.css';

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0); // count는 상태, setCount는 그것을 업데이트 하는 함수

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  useEffect(() => {
    console.log(`mounted & updated: ${count}`);
  }, [count]);

  return (
    <li className='habit'>
      <span className='habit-name'>Reading</span>
      <span className='habit-count'>{count}</span>
      <button className='habit-button habit-increase' onClick={handleIncrement}>
        <i className='fas fa-plus-square'></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
