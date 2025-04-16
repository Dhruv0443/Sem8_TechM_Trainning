import React from "react";
import Product from "./Product";
const ProductList =({products})=>{
    console.log('Rendering ProductList');
    return(
        <div>
            {products.map(product=>(
                <Product key={product.id} product={product}/>
            ))}
        </div>
    );
};
export default ProductList;