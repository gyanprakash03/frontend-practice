import React from 'react'
import { useState } from "react";

const CounterWithLimits = () => {
  const [count, setCount] = useState(0);

  function decreaseCount() {
    setCount(prev => prev === 0 ? prev : prev - 1);
  }

  function increaseCount() {
    setCount(prev => prev === 10 ? prev : prev + 1);
  }

  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="flex justify-between items-center text-4xl gap-16">
        <button 
        onClick={decreaseCount}
        className="bg-blue-950 w-16 h-16 flex items-center justify-center rounded-full cursor-pointer hover:bg-blue-900">
          <span>-</span>
        </button>

        <div>{count}</div>

        <button 
        onClick={increaseCount}
        className="bg-blue-950 w-16 h-16 flex items-center justify-center rounded-full cursor-pointer hover:bg-blue-900">
          <span>+</span>
        </button>
      </div>

      <button 
      onClick={() => setCount(0)}
      className="bg-red-950 w-32 h-16 flex items-center justify-center rounded-2xl cursor-pointer hover:bg-red-900">
        Reset
      </button>

      {count === 0 && <div>Minimum limit reached</div>}
      {count === 10 && <div>Maximum limit reached</div>}
    </div>
  )
}

export default CounterWithLimits