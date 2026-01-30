import { useState, useEffect } from "react"

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    function addTodo() {
        if (newTodo === '') return;
        setTodos(prev => [newTodo, ...prev]);
        setNewTodo('');
    }

    function deleteTodo(idx) {
        setTodos(prev => prev.filter((todo, i) => i !== idx));
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Enter') addTodo();
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [addTodo]);


    return (
        <div className="flex flex-col items-center gap-12 w-100">
            <div className="flex gap-6">
                <input
                className="border border-blue-400 rounded-2xl px-2"
                type="text"
                placeholder="Enter task"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                />

                <button
                onClick={addTodo}
                className="bg-blue-950 w-24 h-12 flex items-center justify-center rounded-2xl cursor-pointer hover:bg-blue-900">
                    Add +
                </button>
            </div>
            
            <div className="w-full flex flex-col gap-3">
                {todos.map((todo, i) => (

                    <div key={i} 
                    className="flex justify-between items-center">
                        <span className="text-slate-400">
                            {todo}
                        </span>

                        <button
                        onClick={() => deleteTodo(i)}
                        className="text-red-700 cursor-pointer">
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TodoApp