import React from "react";
import UserList from "./components/UserList";
import withDataFetch from "./hoc/withDataFetch";

const UsersWithFetch = withDataFetch(UserList,'https://jsonplaceholder.typicode.com/users');
function App() {
  return (
    <div className="App">
      <h1>Data Fetching (Json PLaceholder)</h1>
      <UsersWithFetch/>
    </div>
  );
}

export default App;
