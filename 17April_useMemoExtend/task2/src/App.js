import { useMemo, useState } from "react";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";

const initialProducts =[
  {id:1,name:"Laptop",price:1500},
  {id:2,name:"Phone",price:800},
  {id:3,name:"Table",price:600},
  {id:4,name:"Monitor",price:900},
  {id:5,name:"Mouse",price:700},
];
function App() {
  const[products,setProducts]=useState(initialProducts);
  const[minPrice,setMinPrice] =useState(0);
  const[editingProduct,seteditingProduct] =useState(null);
  const filteredProducts = useMemo(()=>{
    console.log('Filtering expensive products with price >',minPrice);
    return products.filter(p =>p.price>minPrice);
  },[products,minPrice]);
  const addProduct =(product)=>{
    setProducts((prev)=>[
      ...prev,{...product, id:Date.now()},
    ]);
  };
  const updateProduct = (updateProduct)=>{
    setProducts((prev)=>
    prev.map((p)=> (p.id === updateProduct.id ? updateProduct:p)));
    seteditingProduct(null);
  };
  const deleteProduct =(id)=>{
    setProducts((prev)=> prev.filter((p)=>p.id!==id));
  }
  return (
    <div style={{padding:"20px"}}>
    <h1>Product Manager</h1>
    <label>
      Minimum Price Filter:{""}
      <input type="number" value={minPrice}
      onChange={(e)=>setMinPrice(Number(e.target.value))}/>
    </label>
    <p>Filtered Products: {filteredProducts.length}</p>
    <ProductForm
    onSubmit = {editingProduct ? updateProduct:addProduct}
    product ={editingProduct} 
    key={editingProduct?.id || "new"}/>
    <ProductList products={filteredProducts}
      onEdit = {(product)=>seteditingProduct(product)}
      onDelete ={deleteProduct}
    />
    
    </div>
  );
}
export default App;
