import React from "react";
const Product = React.memo(({product})=>{
    console.log(`Rendering Product: ${product.name}`);
    return(
        <div style={{margin:'10px 0', padding:"10px", border:"1px solid #ccc"}}>
            <strong>{product.name}</strong>. ${product.price}
        </div>
    );
});
export default Product;