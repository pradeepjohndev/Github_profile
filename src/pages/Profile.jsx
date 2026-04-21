import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaLocationDot, FaStar } from "react-icons/fa6";
import Navbar from "../components/Navbar";

export default function Profile() {
    const { username } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`https://api.github.com/users/${username}`);
                setUser(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        const fetchRepos = async () => {
            try {
                const res = await axios.get(`https://api.github.com/users/${username}/repos`);
                setUser(prev => ({ ...prev, repos: res.data }));
            } catch (err) {
                console.error(err);
            }
        };
        fetchRepos(), fetchUser();
    }, [username]);


    if (!user) return <p>Loading...</p>;

    return (
        <>
            <section className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
                <Navbar />
                <div className="max-w-5xl mx-auto bg-gray-800 rounded-2xl shadow-lg p-6">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        <img src={user.avatar_url} alt="avatar" className="w-28 h-28 rounded-full border-4 border-gray-700 shadow-md" />
                        <div className="flex-1  text-center md:text-left md:">
                            <h2 className="text-2xl font-bold">{user.name}</h2>
                            <p className="text-gray-400">@{user.login}</p>
                            <p className="mt-2 text-gray-300">{user.bio || "No bio available"}</p>
                            <p className="mt-2 text-sm text-gray-400 inline-flex items-baseline gap-2"><FaLocationDot />{user.location || "Unknown"}</p>

                            <button onClick={() => window.open(user.html_url, "_blank")} className="m-4 md:flex md:items-center hover:cursor-pointer px-5 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition">
                                Visit GitHub
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div className="bg-gray-700 px-4 py-3 rounded-xl">
                                <p className="text-lg font-bold">{user.followers}</p>
                                <p className="text-sm text-gray-400">Followers</p>
                            </div>
                            <div className="bg-gray-700 px-4 py-3 rounded-xl">
                                <p className="text-lg font-bold">{user.following}</p>
                                <p className="text-sm text-gray-400">Following</p>
                            </div>
                            <div className="bg-gray-700 px-4 py-3 rounded-xl">
                                <p className="text-lg font-bold">{user.public_repos}</p>
                                <p className="text-sm text-gray-400">Repos</p>
                            </div>
                        </div>

                    </div>

                    <div className="mt-6 text-sm text-gray-400 flex flex-wrap gap-4">
                        <p>Joined: {new Date(user.created_at).toLocaleDateString()}</p>
                        <p>Last Updated: {new Date(user.updated_at).toLocaleDateString()}</p>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto mt-8">
                    <h3 className="text-xl font-semibold mb-4">Repositories</h3>

                    <div className="grid md:grid-cols-2 gap-4">
                        {user.repos?.map(repo => (
                            <div key={repo.id} className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition" >
                                <h4 className="text-lg font-semibold">{repo.name}</h4>
                                <p className="text-gray-400 text-sm mt-1">{repo.description || "No description"}</p>

                                <div className="flex justify-between items-center mt-3 text-sm text-gray-400">
                                    <span className="inline-flex items-baseline gap-2 text-amber-300"><FaStar />{repo.stargazers_count}</span>
                                    <span>{repo.language || "N/A"}</span>
                                </div>

                                <button onClick={() => window.open(repo.html_url, "_blank")}
                                    className="mt-4 w-full py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition">
                                    View Repo
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </>
    );
}