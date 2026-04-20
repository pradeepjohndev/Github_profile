import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (!username) return;
        navigate(`/results/${username}`);
    };
    return (
        <section className="main width-full h-screen flex items-center justify-evenly bg-gray-100">
            <div className="main__content flex flex-col items-start justify-center gap-3">
                <h1 className="main__title text-wrap">A new way to find github profile<br></br> and repositories.</h1>
                <p className="main__description">Discover and explore GitHub profiles and repositories with ease.</p>
                <input type="text" className="cursor-text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <button onClick={handleSearch} className="main__button bg-blue-500 text-white px-4 py-2 rounded">Search</button>            </div>
            <div className="side__content">
                <h2 className="side__title">Side Content</h2>
                <p className="side__description">This is some additional content on the side.</p>
            </div>
        </section>
    );
}
