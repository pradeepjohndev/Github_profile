import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
        fetchUser();
        const fetchRepos = async () => {
            try {
                const res = await axios.get(`https://api.github.com/users/${username}/repos`);
                setUser(prev => ({ ...prev, repos: res.data }));
            } catch (err) {
                console.error(err);
            }
        };
        fetchRepos();

    }, [username]);

    if (!user) return <p>Loading...</p>;

    return (
        <div>
            <h2>{user.name}</h2>
            <img src={user.avatar_url} width="100" alt="avatar" />

            <button onClick={() => window.open(user.html_url, "_blank")}>Visit GitHub Profile</button>

            <p>Username: {user.login}</p>
            <p>Followers: {user.followers}</p>
            <p>Following: {user.following}</p>
            <p>Public Repos: {user.public_repos}</p>

            <p>Bio: {user.bio}</p>
            <p>Location: {user.location}</p>

            <p>created at: {new Date(user.created_at).toLocaleDateString()}</p>
            <p>updated at: {new Date(user.updated_at).toLocaleDateString()}</p>

            <section>
                <h3>Repos</h3>
                <div className="repos">
                    {user.repos?.map(repo => (
                        <div key={repo.id}>
                            <h4>{repo.name}</h4>
                            <p>{repo.description}</p>
                            <p>Stars: {repo.stargazers_count}</p>
                            <p>Language: {repo.language || "N/A"}</p>
                            <button onClick={() => window.open(repo.html_url, "_blank")}>Visit Repo</button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}