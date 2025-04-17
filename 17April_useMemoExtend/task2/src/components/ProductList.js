function ProductList({products,onEdit,onDelete}){
    return(
        <div>
            <h3>Product List</h3>
            {products.length ===0 && <p>No products found</p>}
            <ul>
                {products.map((p)=>(
                    <li key={p.id}>
                        <strong>{p.name}</strong> .${p.price}
                        <button onClick={()=>onEdit(p)}style={{marginLeft:"10px"}}>Edit</button>
                        <button onClick={()=>onDelete(p.id)}style={{marginLeft:"5px"}}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ProductList;