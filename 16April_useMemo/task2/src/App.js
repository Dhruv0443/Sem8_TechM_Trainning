import { useMemo, useState } from "react";
import ProductList from "./components/ProductList";

const sampleProducts =[
  {id:1,name:"Laptop",price:1500},
  {id:2,name:"Phone",price:800},
  {id:3,name:"Table",price:600},
  {id:4,name:"Monitor",price:900},
  {id:5,name:"Mouse",price:700},
];
function App() {
  const [count, setCount] = useState(0);
  const[products]=useState(sampleProducts);
  //Expensive filter operation
  const expensiveProductsCount = useMemo(()=>{
    console.log('Filtering expensive products...');
    return products.filter(p =>p.price>700).length;
  },[products]);
  return (
    <div style={{padding:"20px"}}>
    <h1>Product List</h1>
    <p>Expensice Products Count: {expensiveProductsCount}</p>
    <button onClick={()=> setCount(count+1)}>Clicked {count} times</button>
    <ProductList products={products}/>
    </div>
  );
}
export default App;
