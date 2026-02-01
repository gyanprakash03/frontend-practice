import { useState , useEffect } from "react"

const DocumentTitleCounter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;

    }, [count])
    

  return (
    <div className="flex justify-between items-center text-3xl gap-12">
        <div className="bg-gray-800 w-16 h-16 flex items-center justify-center rounded-full">{count}</div>

        <button 
        onClick={() => setCount(prev => prev+1)}
        className="bg-blue-950 w-16 h-16 flex items-center justify-center rounded-full cursor-pointer hover:bg-blue-900">
            <span>+</span>
        </button>
    </div>
  )
}

export default DocumentTitleCounter