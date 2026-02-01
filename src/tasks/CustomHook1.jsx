import useToggle from "../hooks/UseToggle"

const CustomHook1 = () => {
    const {state, toggleState} = useToggle(false);

  return (
    <div className="flex flex-col gap-6 items-center">
        <div className={`text-3xl ${state ? 'text-yellow-400' : 'text-gray-400'}`}>
            {state ? 'ON' : 'OFF'}
        </div>

        <button 
        onClick={() => toggleState()}
        className="bg-slate-800 text-lg w-24 h-12 flex items-center justify-center rounded-2xl cursor-pointer hover:bg-slate-900">
            Toggle
        </button>
    </div>
  )
}

export default CustomHook1