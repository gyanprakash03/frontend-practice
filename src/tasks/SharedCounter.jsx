import { useState } from "react"
import DecrementCounter from "../components/DecrementCounter";
import IncrementCounter from "../components/IncrementCounter";

const SharedCounter = () => {
    const [count, setCount] = useState(0);

  return (
    <div className="flex justify-between items-center text-3xl gap-16">
        <DecrementCounter setCount={setCount}/>
        <div>{count}</div>
        <IncrementCounter setCount={setCount}/>
    </div>
  )
}

export default SharedCounter