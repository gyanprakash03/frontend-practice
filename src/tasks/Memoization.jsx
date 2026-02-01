import { useCallback, useState } from "react"
import Child1 from "../components/Child1";

const Memoization = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = useCallback(() => {
        setCount(prev => prev+1);
    }, [])

  return (
    <div className="flex gap-12 items-center text-2xl">
        <div>{count}</div>

        <Child1 handleIncrement={handleIncrement}/>
    </div>
  )
}

export default Memoization