import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Search_bar from "../components/Search_bar";
import Navbar from "../components/Navbar";

export default function Results() {
  const { username } = useParams();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.github.com/search/users?q=${username}`)
      .then(res => res.json())
      .then(data => setUsers(data.items || []));
  }, [username]);

  return (
    <section className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-semibold text-gray-200">
          Results for <span className="text-blue-400">{username}</span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {users.map(user => (
          <div key={user.id}
            className="bg-gray-800 border border-gray-700 rounded-2xl p-5 flex flex-col items-center text-center shadow-lg hover:shadow-blue-400/10 hover:-translate-y-1 transition">

            <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full border-2 border-gray-600 mb-4" />
            <p className="text-lg font-medium mb-4">{user.login}</p>
            <button onClick={() => navigate(`/profile/${user.login}`)}
              className="mt-auto px-5 py-2 rounded-lg bg-blue-400 text-gray-900 font-medium hover:cursor-pointer hover:bg-blue-500 transition">
              Visit Profile
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}