import React from 'react'

const IncrementCounter = ({setCount}) => {

    function increaseCount() {
        setCount(prev => prev+1);
    }

  return (
    <div>
        <button 
        onClick={increaseCount}
        className="bg-blue-950 w-16 h-16 flex items-center justify-center rounded-full cursor-pointer hover:bg-blue-900">
            <span>+</span>
        </button>
    </div>
  )
}

export default IncrementCounter