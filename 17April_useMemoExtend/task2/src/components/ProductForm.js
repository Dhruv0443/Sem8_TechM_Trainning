import React, { useEffect, useState } from "react";
function ProductForm({onSubmit,product}){
    const[name,setName]=useState("");
    const[price,setPrice]=useState("");
    useEffect (()=>{
        if(product){
            setName(product.name);
            setPrice(product.price);
        }else{
            setName("");
            setPrice("");
        }
    },[product]);
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(!name || !price)return;
        onSubmit({id:product?.id, name, price :Number(price)});
        setName("");
        setPrice("");
    };
    return(
        <form onSubmit={handleSubmit} style={{margin:"20px 0"}}>
            <h3>{product?"Edit Product":"Add Product"}</h3>
            <input type="text" placeholder="Product name"
            value={name}
            onChange={(e)=>setName(e.target.value)}/>
            <input type="number" placeholder="Product price"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}/>
            <button type="submit">{product? "Update":"Add"}</button>
        </form>
    );
};
export default ProductForm;