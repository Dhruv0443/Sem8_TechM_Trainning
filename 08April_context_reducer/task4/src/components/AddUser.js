import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "/context/UserContext";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_USER",
      payload: {
        id: Date.now(),
        name,
        email
      }
    });

    navigate("/"); // redirect to home or another page after adding
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
