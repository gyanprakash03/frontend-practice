import { memo } from "react";

const Child1 = memo(({handleIncrement}) => {
    const num = Math.floor(Math.random()*100);

  return (
    <div className="flex gap-12 items-center">
        <button 
        onClick={handleIncrement}
        className="bg-blue-950 w-16 h-16 flex items-center justify-center rounded-full cursor-pointer hover:bg-blue-900">
        <span>{num}</span>
        </button>
    </div>
  )
})

export default Child1