import logo from './logo.svg';
import './App.css';
// import Calculator from './component/25March_morn/Calculator';
import Calculator from './component/25March_eve/Calculator';
import ProductApp from './component/27March_morn/ProductApp';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <ProductApp/>
    </div>
  );
}

export default App;
