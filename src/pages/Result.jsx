import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Results() {
  const { username } = useParams();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.github.com/search/users?q=${username}`)
      .then(res => res.json())
      .then(data => setUsers(data.items || []));
  }, [username]);

  return (
    <div>
      <h2>Results for "{username}"</h2>

      {users.map(user => (
        <div key={user.id}>
          <img src={user.avatar_url} width="50" />
          <p>{user.login}</p>
          <button onClick={() => navigate(`/profile/${user.login}`)}>visit</button>
        </div>
      ))}
    </div>
  );
}

export default Results;