import React from 'react'

const DecrementCounter = ({setCount}) => {

    function decreaseCount() {
        setCount(prev => prev === 0 ? prev : prev-1);
    }

  return (
    <div>
        <button 
        onClick={decreaseCount}
        className="bg-blue-950 w-16 h-16 flex items-center justify-center rounded-full cursor-pointer hover:bg-blue-900">
            <span>-</span>
        </button>
    </div>
  )
}

export default DecrementCounter