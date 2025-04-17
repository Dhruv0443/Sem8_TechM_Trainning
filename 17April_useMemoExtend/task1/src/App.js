import { useMemo, useState } from 'react';
import ProductList from './components/ProductList';


const sampleProducts=[
  {id:1, name:"Laptop", price:1500},
  {id:2, name:"Phone", price:800},
  {id:3, name:"Tablet", price:600},
  {id:4, name:"Monitor", price:300},
];

function App(){
  const [count,setCount]=useState(0);
  const [products]=useState(sampleProducts);
  const [minPrice,setMinPrice]= useState(0);

  //useMemo for filtering based on minPrice
  const filteredProducts = useMemo(() => {
    console.log("Filtering products with price >", minPrice);
    return products.filter(product => product.price > minPrice);
  }, [products, minPrice]);
  

  return(
    <div style={{padding:"20px"}}>
      <h1>ProductList</h1>
      <label>
        Minimum Price Filter:{""}
        <input
          type='number'
          value={minPrice}
          onChange={(e)=>setMinPrice(e.target.value)}
        />
      </label>

      <p>Products above ${minPrice} = {filteredProducts.length}</p>

      <button onClick={()=>setCount(count+1)}>Clicked {count} times.</button>
      <ProductList products={filteredProducts}/>
    </div>
  );
}

export default App;