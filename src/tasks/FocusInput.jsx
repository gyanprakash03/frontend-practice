import { useRef } from "react"

const FocusInput = () => {
    const inputRef = useRef(null);

  return (
    <div className="flex gap-6">
        <input 
        className="border border-blue-900 rounded-xl px-2"
        type="text" 
        placeholder="Enter anything..." 
        ref={inputRef}
        />

        <button
        className="py-2 px-4 rounded-xl bg-slate-700"
        onClick={() => {inputRef.current.focus()}}>
            Focus
        </button>
    </div>
  )
}

export default FocusInput