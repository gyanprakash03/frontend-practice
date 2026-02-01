import { useState } from 'react'

const CharacterCounter = () => {
    const [input, setInput] = useState('');

  return (
    <div className='flex flex-col gap-6 items-center'>
        <input 
        className="border border-blue-400 rounded-2xl px-4 py-2 w-75"
        type='text' 
        placeholder='Enter text here...' 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />

        <div className='text-blue-300'>Characters typed: {input.length}</div>

        {input.length > 20 &&
        <div className="italic text-slate-500">Character limit exceeded</div>}
    </div>
  )
}

export default CharacterCounter