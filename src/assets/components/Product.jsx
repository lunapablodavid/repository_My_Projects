import './Product.css'
import './ProductList'

const Product = ({product,addCart,deleteCart })=> {
 
  return (
  <> 
    <header>
 
    </header>
    <div className='divContainer'>

    <div className='productContainer'>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
            <h3>{product.price}</h3>
            <p className>{product.description}</p>
       <div>
           <button onClick={()=>addCart(product)}>Agregar alcarrito</button>
           <button onClick={()=>deleteCart(product)}>Eliminar del carrito</button>
       </div>
     </div> 
    </div>
       
  </>
 )
}

export default Product
