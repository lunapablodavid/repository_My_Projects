import React from "react";
import Product from "./Product";
const ProductList=({products, addCart, deleteCart})=>{

return(
    
  <>
  <div className="colores"> 
        <h2>Lista de productos</h2>
</div>
<div>
      <section>
      {products.map((prod)=> <Product key={prod.id} product={prod}  addCart={addCart} deleteCart={deleteCart}/>)} 
      </section>
  </div>

   </>  
);
}
export default ProductList;
