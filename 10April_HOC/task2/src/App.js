import logo from './logo.svg';
import './App.css';
// import UserList from './component/UserList';
import WithAuth from './component/withAuth';

function App() {
  return (
    <div className="App">
      {/* <UserList/> */}
      <WithAuth/>
    </div>
  );
}

export default App;
