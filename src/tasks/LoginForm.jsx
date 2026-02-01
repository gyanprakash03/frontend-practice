import { useState } from 'react'

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    function handleSubmit(e) {
        e.preventDefault();

        console.log(`Email: ${formData.email}\nPassword: ${formData.password}`);
        setFormData({email: '', password: ''});
    }

  return (
    <form 
    className='flex flex-col gap-6 items-center'
    onSubmit={(e) => handleSubmit(e)}>
        <input 
        className="border border-blue-400 rounded-2xl px-4 py-2 w-75"
        type='text' 
        placeholder='Enter Email' 
        value={formData.email}
        onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
        />

        <input 
        className="border border-blue-400 rounded-2xl px-4 py-2 w-75"
        type='password' 
        placeholder='Enter Password' 
        value={formData.password}
        onChange={(e) => setFormData(prev => ({...prev, password: e.target.value}))}
        />

        <button 
        className="bg-blue-950 w-24 h-12 flex items-center justify-center rounded-2xl cursor-pointer hover:bg-blue-900"
        type='submit'>
            Submit
        </button>
    </form>
  )
}

export default LoginForm