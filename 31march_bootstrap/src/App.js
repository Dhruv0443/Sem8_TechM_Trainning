import './App.css';
import ProductComponent from './component/productComponent';
import ParentComponent from './component/ParentComponent';

function App() {
  return (
    <div className="App">
    <>
     <ProductComponent/> 
     <br/>
     <ParentComponent/>
    </>
      
    </div>
  );
}

export default App;
