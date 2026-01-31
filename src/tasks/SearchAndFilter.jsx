import { useState, useRef } from "react"

const users = ["Gyan", "Aman", "Rohit", "Priya", "Ankit"]

const SearchAndFilter = () => {
    const [matchUsers, setMatchUsers] = useState([]);
    const [noResult, setNoResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const timerRef = useRef(null);

    function handleSearchChange(e) {
        setNoResult(false);
        const search = e.target.value.toLowerCase().trim();

        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        if (search === '') {
            setMatchUsers([]);
            setLoading(false);
            return;
        }

        setLoading(true);
        timerRef.current = setTimeout(() => {
            const filteredUsers = users.filter(user => user.toLowerCase().includes(search));
            setMatchUsers(filteredUsers);
            setNoResult(filteredUsers.length === 0);

            setLoading(false);
        }, 2000);
    }

    return (
        <div className="flex flex-col gap-6">
            <input
            className="border border-blue-400 rounded-2xl px-4 py-2 w-75"
            type="text" 
            placeholder="Search user..." 
            onChange={(e) => handleSearchChange(e)}
            />

            {loading ? 
            <span className="italic text-slate-500">Loading...</span> : 
            matchUsers?.map((user, i) => (
                <div key={i}>
                    {user}
                </div>
            ))}

            {noResult 
            && 
            <div className="italic text-slate-500">No result found</div>}
        </div>
    )
}

export default SearchAndFilter