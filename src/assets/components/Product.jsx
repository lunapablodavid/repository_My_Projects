import './Product.css'
import './ProductList'
import { useState } from 'react';

const Product = ({product,addCart})=> {
 
  return (
  <> 
    <header>
 
    </header>
        <div className='productContainer'>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
            <h3>{product.price}</h3>
            <p>{product.description}</p>
       <div>
           <button onClick={()=>addCart(product)}>Agregar alcarrito</button>
       </div>
     </div>   
  </>
 )
}

export default Product
