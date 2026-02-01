import { useEffect, useState } from "react"

const AutoCounter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intvl = setInterval(() => {
            setCount(prev => prev+1);
        }, 1000);

        return () => {
            clearInterval(intvl);
        }
    }, [])
    

  return (
    <div>
        <div>{count}</div>
    </div>
  )
}

export default AutoCounter