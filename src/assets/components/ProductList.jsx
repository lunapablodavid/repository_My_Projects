import React from "react";
import Product from "./Product";
const ProductList=({products, addCart})=>{

return(
    
  <>
  <div className="divContainer"> 
        <h2>Lista de productos</h2>
</div>
<div>
      <section>
      {products.map((prod)=> <Product key={prod.id} product={prod}  addCart={addCart} />)} 
      </section>
  </div>

   </>  
);
}
export default ProductList;
