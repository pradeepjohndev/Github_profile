import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search_bar({ showsuggestion = true }) {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (!username || !username.trim()) return;
        navigate(`/results/${username}`);
    };

    const users = ["pradeepjohndev", "deva-p-stack", "abdulwasim-s"]

    return (
        <>
            <input type="text" value={username} placeholder="Enter GitHub username..." className="flex-1 gap-4 w-100 space-x-8 bg-red-50 border rounded-2xl px-4 py-3 text-black outline-none"
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()} />
            <button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-600 rounded-2xl hover:cursor-pointer transition px-6 py-3 font-semibold">
                Search
            </button>
            {showsuggestion && (
                <>
                    <p className="text-xs text-gray-400">check out few of dev's out there...!</p>
                    <article className="name__suggestion">

                        {users.map((user) => (
                            <p key={user}
                                className="text-gray-500 bg-gray-700 inline p-2 mr-2 rounded-2xl hover:border transition hover:cursor-pointer"
                                onClick={() => {
                                    setUsername(user);
                                    navigate(`/results/${user}`);
                                }}>
                                {user}
                            </p>
                        ))}
                    </article>
                </>
            )}
        </>
    )
}