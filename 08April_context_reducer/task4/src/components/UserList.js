import { useContext } from "react";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";

const UserList = () => {
  const { state, dispatch } = useContext(UserContext);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {state.map(user => (
          <li key={user.id}>
            {user.name} {user.email}
            <Link to={`/edit/${user.id}`}>Edit</Link>
            <button onClick={() => dispatch({ type: "DELETE_USER", payload: user.id })}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <Link to="/add">Add User</Link>
    </div>
  );
};

export default UserList;